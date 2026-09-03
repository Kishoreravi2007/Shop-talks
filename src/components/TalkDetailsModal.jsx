import React, { useState } from 'react';
import { 
  X, 
  Play, 
  FileText, 
  Video, 
  Download, 
  CheckCircle, 
  Clock, 
  Calendar, 
  Layers, 
  MessageSquare, 
  Send, 
  Tag, 
  Share2,
  Check
} from 'lucide-react';
import { GithubIcon } from './Icons';

export default function TalkDetailsModal({ talk, onClose, onLaunchSlides }) {
  const [activeTab, setActiveTab] = useState('overview'); // overview, takeaways, agenda, resources
  const [qaQuestions, setQaQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState('');
  const [copiedLink, setCopiedLink] = useState(false);

  const handleAddQuestion = (e) => {
    e.preventDefault();
    if (!newQuestion.trim()) return;
    const item = {
      id: Date.now(),
      author: 'You (Conference Attendee)',
      time: 'Just now',
      text: newQuestion.trim()
    };
    setQaQuestions([item, ...qaQuestions]);
    setNewQuestion('');
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-header">
          <div className="modal-title-wrap">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.25rem' }}>
              <span className="card-category-tag" style={{ background: talk.accentColor || '#6366f1' }}>
                {talk.category}
              </span>
              <span style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                {talk.event} • Presented: {talk.date}
              </span>
            </div>
            <h2 className="modal-title">{talk.title}</h2>
          </div>

          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            title="Close modal"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="modal-tabs-header">
          <button
            type="button"
            className={`modal-tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            <FileText size={16} />
            <span>Overview & Abstract</span>
          </button>

          <button
            type="button"
            className={`modal-tab-btn ${activeTab === 'takeaways' ? 'active' : ''}`}
            onClick={() => setActiveTab('takeaways')}
          >
            <CheckCircle size={16} />
            <span>Key Takeaways</span>
          </button>

          <button
            type="button"
            className={`modal-tab-btn ${activeTab === 'agenda' ? 'active' : ''}`}
            onClick={() => setActiveTab('agenda')}
          >
            <Layers size={16} />
            <span>Slide Outline ({talk.slides?.length || talk.slidesCount})</span>
          </button>

          <button
            type="button"
            className={`modal-tab-btn ${activeTab === 'resources' ? 'active' : ''}`}
            onClick={() => setActiveTab('resources')}
          >
            <MessageSquare size={16} />
            <span>Links & Q&A</span>
          </button>
        </div>

        {/* Modal Content Body */}
        <div className="modal-body">
          {activeTab === 'overview' && (
            <>
              <div className="detail-meta-pills">
                <span className="detail-pill">
                  <Clock size={14} /> Duration: {talk.duration}
                </span>
                <span className="detail-pill">
                  <Layers size={14} /> {talk.slidesCount} Slides
                </span>
                <span className="detail-pill">
                  <Calendar size={14} /> Presented: {talk.date}
                </span>
                {talk.location && (
                  <span className="detail-pill">
                    📍 {talk.location}
                  </span>
                )}
              </div>

              <div>
                <h3 className="detail-section-title">Session Abstract</h3>
                <p className="detail-text-p">{talk.abstract}</p>
              </div>

              {talk.prerequisites && (
                <div style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', padding: '1rem 1.25rem' }}>
                  <h4 style={{ fontSize: '0.9rem', color: 'var(--accent-primary-light)', marginBottom: '0.35rem', fontWeight: 700 }}>
                    Recommended Prerequisites
                  </h4>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                    {talk.prerequisites}
                  </p>
                </div>
              )}

              <div>
                <h4 style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '0.5rem', fontWeight: 700 }}>
                  Associated Tags & Topics
                </h4>
                <div className="card-tags-row">
                  {talk.tags?.map((tag, idx) => (
                    <span key={idx} className="card-tag-pill" style={{ fontSize: '0.8rem', padding: '0.25rem 0.65rem' }}>
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </>
          )}

          {activeTab === 'takeaways' && (
            <div>
              <h3 className="detail-section-title">What You Will Learn</h3>
              <div className="detail-takeaways-list">
                {talk.keyTakeaways?.map((item, idx) => (
                  <div key={idx} className="detail-takeaway-item">
                    <CheckCircle size={18} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'agenda' && (
            <div>
              <h3 className="detail-section-title">Deck Slide Breakdown</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {talk.slides?.map((slide, idx) => (
                  <div 
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '0.85rem 1.1rem',
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-md)'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                      <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)', fontSize: '0.82rem', fontWeight: 700 }}>
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <div>
                        <div style={{ fontSize: '0.95rem', fontWeight: 600, color: '#ffffff' }}>
                          {slide.title}
                        </div>
                        {slide.subtitle && (
                          <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                            {slide.subtitle}
                          </div>
                        )}
                      </div>
                    </div>

                    <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-disabled)', fontFamily: 'var(--font-mono)' }}>
                      {slide.layout || 'slide'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'resources' && (
            <>
              <div>
                <h3 className="detail-section-title">Talk Assets & Links</h3>
                <div className="detail-resources-grid">
                  {talk.standaloneUrl && (
                    <a
                      href={talk.standaloneUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="resource-card-link"
                      style={{ borderColor: 'rgba(0, 242, 254, 0.4)', background: 'rgba(0, 242, 254, 0.08)' }}
                    >
                      <div className="resource-info">
                        <div className="resource-icon-box" style={{ color: '#00f2fe' }}>
                          <Play size={20} fill="currentColor" />
                        </div>
                        <div>
                          <div className="resource-name" style={{ color: '#00f2fe' }}>Standalone 4K Presentation</div>
                          <div className="resource-desc">Full interactive HTML & Video player</div>
                        </div>
                      </div>
                    </a>
                  )}

                  <a
                    href={talk.resources?.repoUrl || '#'}
                    target="_blank"
                    rel="noreferrer"
                    className="resource-card-link"
                  >
                    <div className="resource-info">
                      <div className="resource-icon-box">
                        <GithubIcon size={20} />
                      </div>
                      <div>
                        <div className="resource-name">GitHub Repository</div>
                        <div className="resource-desc">Source code & benchmarks</div>
                      </div>
                    </div>
                  </a>

                  <a
                    href={talk.resources?.recordingUrl || '#'}
                    target="_blank"
                    rel="noreferrer"
                    className="resource-card-link"
                  >
                    <div className="resource-info">
                      <div className="resource-icon-box">
                        <Video size={20} />
                      </div>
                      <div>
                        <div className="resource-name">Session Recording</div>
                        <div className="resource-desc">Watch conference video</div>
                      </div>
                    </div>
                  </a>

                  <a
                    href={talk.resources?.pdfUrl || '#'}
                    target="_blank"
                    rel="noreferrer"
                    className="resource-card-link"
                  >
                    <div className="resource-info">
                      <div className="resource-icon-box">
                        <Download size={20} />
                      </div>
                      <div>
                        <div className="resource-name">Download PDF</div>
                        <div className="resource-desc">Full slide deck export</div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Live Attendee Q&A Form */}
              <div style={{ marginTop: '1rem', borderTop: '1px solid var(--border-subtle)', paddingTop: '1.25rem' }}>
                <h3 className="detail-section-title">
                  <MessageSquare size={18} />
                  Attendee Questions & Answers ({qaQuestions.length})
                </h3>

                <form onSubmit={handleAddQuestion} className="qa-form-row">
                  <input
                    type="text"
                    className="form-input"
                    style={{ flex: 1 }}
                    placeholder="Ask a technical question about this presentation..."
                    value={newQuestion}
                    onChange={(e) => setNewQuestion(e.target.value)}
                  />
                  <button type="submit" className="btn-primary" style={{ padding: '0 1.25rem' }}>
                    <Send size={16} />
                    <span>Ask</span>
                  </button>
                </form>

                <div className="qa-list">
                  {qaQuestions.map((q) => (
                    <div key={q.id} className="qa-bubble">
                      <div className="qa-bubble-top">
                        <span className="qa-author">{q.author}</span>
                        <span>{q.time}</span>
                      </div>
                      <p className="qa-text">{q.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>

        {/* Modal Footer */}
        <div className="modal-footer">
          <button
            type="button"
            className="btn-secondary"
            onClick={handleCopyLink}
          >
            {copiedLink ? <Check size={16} color="#10b981" /> : <Share2 size={16} />}
            <span>{copiedLink ? 'Link Copied!' : 'Share Talk'}</span>
          </button>

          <button
            type="button"
            className="btn-primary"
            onClick={() => {
              onClose();
              onLaunchSlides(talk);
            }}
          >
            <Play size={16} fill="currentColor" />
            <span>Launch Slide Deck</span>
          </button>
        </div>
      </div>
    </div>
  );
}
