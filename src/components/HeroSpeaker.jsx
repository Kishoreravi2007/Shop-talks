import React from 'react';
import { 
  Sparkles, 
  MapPin, 
  Play, 
  Layers, 
  Clock, 
  Eye, 
  Star, 
  Presentation as PresentationIcon, 
  Flame, 
  Calendar,
  ExternalLink
} from 'lucide-react';

export default function HeroSpeaker({ speaker, featuredTalk, onLaunchSlides, onOpenDetails }) {
  return (
    <section className="hero-speaker-section">
      <div className="hero-speaker-card">
        <div className="hero-glow-orb" />
        <div className="hero-glow-orb-2" />

        {/* Left: Speaker Avatar */}
        <div className="speaker-avatar-wrap">
          <img 
            src={speaker.avatar} 
            alt={speaker.name} 
            className="speaker-avatar-img"
          />
          <div className="speaker-live-status" title="Active Speaker & Architect" />
        </div>

        {/* Center: Speaker Bio */}
        <div className="speaker-details">
          <div className="speaker-badge-row">
            <span className="speaker-role-badge">
              <Sparkles size={13} style={{ display: 'inline', marginRight: '4px' }} />
              {speaker.title}
            </span>
            <span className="speaker-loc-tag">
              <MapPin size={14} />
              {speaker.location} • {speaker.company}
            </span>
          </div>

          <h1 className="speaker-name">{speaker.name}</h1>
          <p className="speaker-bio">{speaker.tagline}</p>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '0.4rem', flexWrap: 'wrap' }}>
            {speaker.socials?.website && (
              <a
                href={speaker.socials.website}
                target="_blank"
                rel="noreferrer"
                style={{ fontSize: '0.84rem', color: '#00f2fe', display: 'inline-flex', alignItems: 'center', gap: '4px', fontWeight: 600, background: 'rgba(0, 242, 254, 0.1)', padding: '0.25rem 0.65rem', borderRadius: 'var(--radius-full)', border: '1px solid rgba(0, 242, 254, 0.3)' }}
              >
                <span>🌐 Portfolio: kishoreravi.online</span>
                <ExternalLink size={12} />
              </a>
            )}
            {speaker.socials?.linkedin && (
              <a
                href={speaker.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                style={{ fontSize: '0.84rem', color: '#93c5fd', display: 'inline-flex', alignItems: 'center', gap: '4px', fontWeight: 600, background: 'rgba(59, 130, 246, 0.1)', padding: '0.25rem 0.65rem', borderRadius: 'var(--radius-full)', border: '1px solid rgba(59, 130, 246, 0.3)' }}
              >
                <span>in/kumaravikishore</span>
                <ExternalLink size={12} />
              </a>
            )}
          </div>
        </div>

        {/* Right: Speaker Stats Grid */}
        <div className="hero-stats-grid">
          <div className="stat-item">
            <span className="stat-value">{speaker.stats.talksCount}</span>
            <span className="stat-label">Delivered Talk</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">{speaker.stats.slidesDelivered}</span>
            <span className="stat-label">Total Slides</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">{speaker.stats.videoDemos || 4}</span>
            <span className="stat-label">4K Video Demos</span>
          </div>
        </div>
      </div>

      {/* Featured Talk Hero Banner */}
      {featuredTalk && (
        <div className="featured-spotlight">
          <div className="featured-content">
            <div className="featured-pill-row">
              <span className="featured-pill">
                <Flame size={14} />
                Featured Talk of the Season
              </span>
              <span className="featured-event-badge" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                <span>{featuredTalk.event}</span>
                <span>•</span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', color: '#00f2fe', fontWeight: 700 }}>
                  <Calendar size={13} /> Presented: {featuredTalk.date}
                </span>
              </span>
            </div>

            <h2 className="featured-title">{featuredTalk.title}</h2>
            <p className="featured-subtitle">{featuredTalk.subtitle}</p>

            <div className="featured-actions">
              <button 
                type="button" 
                className="btn-launch-slides"
                onClick={() => onLaunchSlides(featuredTalk)}
                id="hero-launch-slides-btn"
              >
                <Play size={18} fill="currentColor" />
                <span>Launch Slide Deck ({featuredTalk.slidesCount} Slides)</span>
              </button>

              {featuredTalk.standaloneUrl && (
                <a
                  href={featuredTalk.standaloneUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', borderColor: 'rgba(0, 242, 254, 0.4)', color: '#00f2fe' }}
                  title="Open full interactive 4K video ShopTalk"
                >
                  <ExternalLink size={16} />
                  <span>Live 4K Standalone Talk</span>
                </a>
              )}

              <button 
                type="button" 
                className="btn-secondary"
                onClick={() => onOpenDetails(featuredTalk)}
              >
                <span>Read Dossier & Notes</span>
              </button>
            </div>
          </div>

          {/* Interactive Slide Thumbnail Card on Right */}
          <div 
            className="featured-preview-box" 
            onClick={() => onLaunchSlides(featuredTalk)}
            title="Click to launch interactive slide player"
          >
            <div className="featured-preview-slide-indicator">
              SLIDE 01 // TITLE SLIDE
            </div>
            <div className="featured-preview-slide-title">
              {featuredTalk.title}
            </div>
            <div className="featured-preview-footer">
              <span>{featuredTalk.category}</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Play size={14} fill="currentColor" /> Present Now
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
