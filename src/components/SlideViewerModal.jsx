import React, { useState, useEffect, useCallback, useRef } from 'react';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  Minimize2, 
  BookOpen, 
  HelpCircle, 
  Copy, 
  Check, 
  Sparkles,
  Layers,
  ArrowRight,
  TrendingUp,
  Terminal,
  Activity,
  ExternalLink
} from 'lucide-react';

export default function SlideViewerModal({ talk, onClose }) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [showNotes, setShowNotes] = useState(false);
  const [showShortcuts, setShowShortcuts] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);
  const viewerContainerRef = useRef(null);

  const slides = talk?.slides || [];
  const totalSlides = slides.length;
  const currentSlide = slides[currentSlideIndex] || {};

  const handleNext = useCallback(() => {
    setCurrentSlideIndex((prev) => (prev < totalSlides - 1 ? prev + 1 : prev));
  }, [totalSlides]);

  const handlePrev = useCallback(() => {
    setCurrentSlideIndex((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      viewerContainerRef.current?.requestFullscreen?.();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen?.();
      setIsFullscreen(false);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Don't trigger if user is typing in an input
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'Backspace' || e.key === 'PageUp') {
        e.preventDefault();
        handlePrev();
      } else if (e.key === 'Escape') {
        if (showShortcuts) {
          setShowShortcuts(false);
        } else if (showNotes) {
          setShowNotes(false);
        } else if (!document.fullscreenElement) {
          onClose();
        }
      } else if (e.key === 'f' || e.key === 'F') {
        toggleFullscreen();
      } else if (e.key === 'n' || e.key === 'N') {
        setShowNotes((prev) => !prev);
      } else if (e.key === '?') {
        setShowShortcuts((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev, onClose, showShortcuts, showNotes]);

  const handleCopyCode = (code) => {
    if (!code) return;
    navigator.clipboard.writeText(code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  // Progress percentage
  const progressPercent = totalSlides > 1 ? ((currentSlideIndex + 1) / totalSlides) * 100 : 100;

  // Render Layout Content
  const renderSlideContent = () => {
    const layout = currentSlide.layout || 'bullets';

    if (layout === 'hero') {
      return (
        <div className="slide-layout-hero">
          <span className="hero-slide-badge">
            <Sparkles size={14} style={{ display: 'inline', marginRight: '6px' }} />
            {currentSlide.event || talk.event}
          </span>
          <h1 className="hero-slide-title">{currentSlide.title}</h1>
          <p className="hero-slide-subtitle">{currentSlide.subtitle}</p>
          <div className="hero-slide-presenter">
            <span>{currentSlide.presenter || talk.author || 'Senior Staff Architect'}</span>
            <span>•</span>
            <span>{talk.date}</span>
          </div>
        </div>
      );
    }

    if (layout === 'split-code') {
      return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
          <div className="slide-canvas-header">
            <h2 className="slide-canvas-title">{currentSlide.title}</h2>
            <p className="slide-canvas-subtitle">{currentSlide.subtitle}</p>
          </div>

          <div className="slide-layout-split-code">
            <div className="slide-code-wrapper">
              <button
                type="button"
                className="slide-viewer-btn"
                style={{ position: 'absolute', top: '10px', right: '10px', height: '28px', padding: '0 8px' }}
                onClick={() => handleCopyCode(currentSlide.codeSnippet)}
                title="Copy code snippet"
              >
                {copiedCode ? <Check size={14} color="#10b981" /> : <Copy size={14} />}
                <span style={{ fontSize: '0.72rem' }}>{copiedCode ? 'Copied' : 'Copy'}</span>
              </button>
              <pre>
                <code>{currentSlide.codeSnippet}</code>
              </pre>
            </div>

            <div className="slide-code-bullets">
              {currentSlide.bullets?.map((bullet, idx) => (
                <div key={idx} className="slide-code-bullet-item">
                  <div style={{ color: 'var(--accent-cyan)', marginTop: '2px' }}>
                    <ArrowRight size={16} />
                  </div>
                  <span>{bullet}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }

    if (layout === 'diagram') {
      return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
          <div className="slide-canvas-header">
            <h2 className="slide-canvas-title">{currentSlide.title}</h2>
            <p className="slide-canvas-subtitle">{currentSlide.subtitle}</p>
          </div>

          <div className="diagram-nodes-row">
            {currentSlide.nodes?.map((node, idx) => (
              <div 
                key={idx} 
                className="diagram-node-card"
                style={{ borderColor: node.color || '#6366f1' }}
              >
                <div className="diagram-node-name">{node.name}</div>
                <div className="diagram-node-status" style={{ color: node.color }}>
                  ● {node.status}
                </div>
              </div>
            ))}
          </div>

          <div className="slide-layout-bullets" style={{ marginTop: '1.5rem' }}>
            {currentSlide.content?.map((item, idx) => (
              <div key={idx} className="slide-bullet-item" style={{ padding: '0.85rem 1.1rem', fontSize: '1rem' }}>
                <span className="slide-bullet-bullet">✦</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      );
    }

    if (layout === 'metrics') {
      return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
          <div className="slide-canvas-header">
            <h2 className="slide-canvas-title">{currentSlide.title}</h2>
            <p className="slide-canvas-subtitle">{currentSlide.subtitle}</p>
          </div>

          <div className="metrics-comparison-grid">
            {currentSlide.metrics?.map((m, idx) => (
              <div key={idx} className="metric-slide-card">
                <span className="metric-slide-label">{m.label}</span>
                <div className="metric-values-row">
                  <span className="metric-before-val">{m.before}</span>
                  <span className="metric-after-val">{m.after}</span>
                </div>
                <span className="metric-slide-badge">{m.change}</span>
              </div>
            ))}
          </div>

          <div className="slide-layout-bullets" style={{ marginTop: '2rem' }}>
            {currentSlide.content?.map((item, idx) => (
              <div key={idx} className="slide-bullet-item" style={{ padding: '0.9rem 1.25rem' }}>
                <span className="slide-bullet-bullet">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      );
    }

    if (layout === 'summary') {
      return (
        <div className="slide-layout-hero">
          <span className="hero-slide-badge">SESSION CONCLUSION</span>
          <h1 className="hero-slide-title">{currentSlide.title}</h1>
          <p className="hero-slide-subtitle">{currentSlide.subtitle}</p>
          {currentSlide.resourcesText && (
            <div style={{ background: 'rgba(99, 102, 241, 0.15)', border: '1px solid rgba(99, 102, 241, 0.4)', padding: '1rem 1.5rem', borderRadius: 'var(--radius-md)', fontFamily: 'var(--font-mono)', fontSize: '0.95rem', color: '#a5b4fc' }}>
              🔗 {currentSlide.resourcesText}
            </div>
          )}
          <div className="hero-slide-presenter">
            <span>{talk.title}</span>
            <span>•</span>
            <span>Q&A Open</span>
          </div>
        </div>
      );
    }

    // Default: Bullets layout
    return (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <div className="slide-canvas-header">
          <h2 className="slide-canvas-title">{currentSlide.title}</h2>
          <p className="slide-canvas-subtitle">{currentSlide.subtitle}</p>
        </div>

        <div className="slide-layout-bullets">
          {currentSlide.content?.map((item, idx) => (
            <div key={idx} className="slide-bullet-item">
              <span className="slide-bullet-bullet">✦</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="slide-viewer-overlay" ref={viewerContainerRef}>
      {/* Top Progress Line */}
      <div 
        className="slide-viewer-progress-line" 
        style={{ width: `${progressPercent}%` }} 
      />

      {/* Slide Viewer Header */}
      <header className="slide-viewer-header">
        <div className="slide-viewer-title-group">
          <span className="slide-viewer-category-tag">{talk.category}</span>
          <h2 className="slide-viewer-talk-title">{talk.title}</h2>
          <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
            Slide {currentSlideIndex + 1} of {totalSlides}
          </span>
        </div>

        <div className="slide-viewer-controls-group">
          {talk.standaloneUrl && (
            <a
              href={talk.standaloneUrl}
              target="_blank"
              rel="noreferrer"
              className="slide-viewer-btn"
              title="Open Real Standalone 4K Presentation in New Window"
              style={{ color: '#00f2fe', borderColor: 'rgba(0, 242, 254, 0.4)', textDecoration: 'none' }}
            >
              <ExternalLink size={15} />
              <span>Open in New Window</span>
            </a>
          )}

          <button
            type="button"
            className={`slide-viewer-btn ${showNotes ? 'active' : ''}`}
            onClick={() => setShowNotes((prev) => !prev)}
            title="Toggle Presenter Notes (N)"
          >
            <BookOpen size={16} />
            <span>Notes {showNotes ? 'On' : 'Off'}</span>
          </button>

          <button
            type="button"
            className={`slide-viewer-btn ${showShortcuts ? 'active' : ''}`}
            onClick={() => setShowShortcuts((prev) => !prev)}
            title="Keyboard Shortcuts (?)"
          >
            <HelpCircle size={16} />
          </button>

          <button
            type="button"
            className="slide-viewer-btn"
            onClick={toggleFullscreen}
            title="Toggle Fullscreen (F)"
          >
            {isFullscreen ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
          </button>

          <button
            type="button"
            className="slide-viewer-btn slide-viewer-btn-close"
            onClick={onClose}
            title="Exit Presentation (Esc)"
          >
            <X size={18} />
          </button>
        </div>
      </header>

      {/* Main Slide Stage Area */}
      <main className="slide-stage-area">
        <div className="slide-canvas">
          {renderSlideContent()}

          <div className="slide-canvas-number">
            SLIDE {String(currentSlideIndex + 1).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}
          </div>
          <div className="slide-canvas-watermark">
            SHOP-TALKS • {talk.event}
          </div>
        </div>

        {/* Presenter Notes Drawer */}
        {showNotes && (
          <div className="speaker-notes-drawer">
            <div className="speaker-notes-header">
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <BookOpen size={15} />
                Speaker Presenter Notes (Slide {currentSlideIndex + 1})
              </span>
              <button
                type="button"
                onClick={() => setShowNotes(false)}
                style={{ color: 'var(--text-muted)' }}
              >
                <X size={16} />
              </button>
            </div>
            <p className="speaker-notes-content">
              {currentSlide.speakerNotes || "No specific speaker notes for this slide. Speak naturally to the key bullet points."}
            </p>
          </div>
        )}
      </main>

      {/* Bottom Navigation Ribbon */}
      <footer className="slide-viewer-bottom-bar">
        <button
          type="button"
          className="nav-arrow-btn"
          onClick={handlePrev}
          disabled={currentSlideIndex === 0}
          title="Previous Slide (Left Arrow)"
        >
          <ChevronLeft size={18} />
          <span>Previous</span>
        </button>

        {/* Thumbnails list */}
        <div className="slide-thumbs-strip">
          {slides.map((s, idx) => (
            <button
              key={idx}
              type="button"
              className={`slide-thumb-item ${currentSlideIndex === idx ? 'active' : ''}`}
              onClick={() => setCurrentSlideIndex(idx)}
              title={`Jump to slide ${idx + 1}: ${s.title || ''}`}
            >
              {idx + 1}
            </button>
          ))}
        </div>

        <div className="keyboard-hints">
          <span><span className="kbd-badge">←</span> <span className="kbd-badge">→</span> Navigate</span>
          <span><span className="kbd-badge">N</span> Notes</span>
          <span><span className="kbd-badge">F</span> Fullscreen</span>
          <span><span className="kbd-badge">Esc</span> Close</span>
        </div>

        <button
          type="button"
          className="nav-arrow-btn"
          onClick={handleNext}
          disabled={currentSlideIndex === totalSlides - 1}
          title="Next Slide (Right Arrow or Space)"
        >
          <span>Next</span>
          <ChevronRight size={18} />
        </button>
      </footer>
    </div>
  );
}
