import React from 'react';
import { Presentation, Plus, Sparkles, Globe, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './Icons';

export default function Header({ onOpenAddModal, speakerProfile }) {
  return (
    <header className="site-header">
      <div className="header-inner">
        <div className="brand-wrapper" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="brand-icon-box">
            <Presentation size={24} />
          </div>
          <div className="brand-info">
            <div className="brand-title">
              Shop-Talks
              <span className="brand-badge">Speaker Hub</span>
            </div>
            <span className="brand-tagline">Presentations, Slide Decks & Tech Talks</span>
          </div>
        </div>

        <div className="header-actions">
          {speakerProfile?.socials?.website && (
            <a 
              href={speakerProfile.socials.website} 
              target="_blank" 
              rel="noreferrer" 
              className="social-link-btn"
              title="Personal Website (kishoreravi.online)"
            >
              <Globe size={18} />
            </a>
          )}
          <a 
            href={speakerProfile?.socials?.linkedin || "https://www.linkedin.com/in/kumaravikishore/"} 
            target="_blank" 
            rel="noreferrer" 
            className="social-link-btn"
            title="LinkedIn Profile"
          >
            <LinkedinIcon size={18} />
          </a>
          <a 
            href={speakerProfile?.socials?.github || "https://github.com/Kishoreravi2007"} 
            target="_blank" 
            rel="noreferrer" 
            className="social-link-btn"
            title="GitHub Profile"
          >
            <GithubIcon size={18} />
          </a>
          <a 
            href={speakerProfile?.socials?.twitter || "https://x.com/KishoreKai90955"} 
            target="_blank" 
            rel="noreferrer" 
            className="social-link-btn"
            title="Twitter / X"
          >
            <TwitterIcon size={18} />
          </a>
          {speakerProfile?.email && (
            <a 
              href={`mailto:${speakerProfile.email}`} 
              className="social-link-btn"
              title={`Email (${speakerProfile.email})`}
            >
              <Mail size={18} />
            </a>
          )}

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', padding: '0.25rem 0.8rem 0.25rem 0.35rem', background: 'rgba(255, 255, 255, 0.05)', borderRadius: 'var(--radius-full)', border: '1px solid rgba(255, 255, 255, 0.12)' }}>
            <img 
              src={speakerProfile?.avatar || "/kishore-photo.jpg"} 
              alt={speakerProfile?.name} 
              style={{ width: '26px', height: '26px', borderRadius: '50%', objectFit: 'cover', border: '1.5px solid #00f2fe' }} 
            />
            <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#ffffff' }}>{speakerProfile?.name || 'Kishore Ravi'}</span>
          </div>

          <button 
            type="button" 
            className="btn-primary"
            onClick={onOpenAddModal}
            id="add-presentation-btn"
          >
            <Plus size={18} />
            <span>Add Presentation</span>
          </button>
        </div>
      </div>
    </header>
  );
}
