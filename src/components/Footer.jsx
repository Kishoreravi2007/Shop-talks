import React from 'react';
import { Presentation, ArrowUp, Download, RefreshCw, Heart } from 'lucide-react';

export default function Footer({ talks, onResetDefaults, speakerProfile }) {
  const handleExportJson = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(talks, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", "shop-talks-presentations.json");
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <div className="brand-icon-box" style={{ width: '38px', height: '38px' }}>
              <Presentation size={20} />
            </div>
            <div>
              <div style={{ fontWeight: 800, fontSize: '1.15rem', color: '#ffffff' }}>
                Shop-Talks
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                Unified Presentation Portfolio & Speaker Deck Hub
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', flexWrap: 'wrap' }}>
            <button
              type="button"
              className="btn-secondary"
              style={{ fontSize: '0.82rem', padding: '0.45rem 0.9rem' }}
              onClick={handleExportJson}
              title="Export all talks as JSON"
            >
              <Download size={14} />
              <span>Export Talks (JSON)</span>
            </button>

            <button
              type="button"
              className="btn-secondary"
              style={{ fontSize: '0.82rem', padding: '0.45rem 0.9rem' }}
              onClick={onResetDefaults}
              title="Reset talks to initial showcase"
            >
              <RefreshCw size={14} />
              <span>Reset Defaults</span>
            </button>

            <button
              type="button"
              className="social-link-btn"
              onClick={scrollToTop}
              title="Scroll to Top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>

        <div className="footer-bottom">
          <div>
            <span>© {new Date().getFullYear()} Shop-Talks. All Rights Reserved.</span>
            <span style={{ margin: '0 0.5rem', color: 'rgba(255, 255, 255, 0.2)' }}>•</span>
            <span>Built by <strong style={{ color: '#00f2fe' }}>Kishore Ravi</strong></span>
          </div>

          <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
            <span>Total Talks: {talks.length}</span>
            <span>•</span>
            <span>Total Slides: {talks.reduce((acc, t) => acc + (t.slidesCount || t.slides?.length || 0), 0)}</span>
            <span>•</span>
            <span>Speaker Hub</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
