import React from 'react';
import { 
  Play, 
  Info, 
  Clock, 
  Layers, 
  Calendar, 
  Eye, 
  Star, 
  Tag, 
  ArrowUpRight, 
  FileText 
} from 'lucide-react';

export default function PresentationCard({ talk, onLaunchSlides, onOpenDetails }) {
  return (
    <article className="presentation-card">
      {/* Top Banner with Gradient */}
      <div 
        className="card-top-banner"
        style={{ background: talk.gradient || 'linear-gradient(135deg, #4f46e5 0%, #06b6d4 100%)' }}
      >
        <div className="card-top-pattern" />
        
        <div className="card-badge-row">
          <span className="card-category-tag">{talk.category}</span>
          <span className="card-type-tag">{talk.type}</span>
        </div>

        <div className="card-meta-quick">
          <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Clock size={13} /> {talk.duration}
          </span>
          <span>•</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Layers size={13} /> {talk.slidesCount} slides
          </span>
          <span>•</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Star size={13} fill="#fbbf24" color="#fbbf24" /> {talk.rating}
          </span>
        </div>
      </div>

      {/* Card Body Content */}
      <div className="card-body">
        <div className="card-event-info">
          <span>{talk.event}</span>
          <span 
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '4px',
              color: talk.date?.includes('Yesterday') ? '#00f2fe' : 'var(--accent-primary-light)',
              fontWeight: talk.date?.includes('Yesterday') ? 700 : 600
            }}
          >
            <Calendar size={13} /> Presented: {talk.date}
          </span>
        </div>

        <h3 
          className="card-title"
          onClick={() => onLaunchSlides(talk)}
          title="Click to present"
        >
          {talk.title}
        </h3>

        <p className="card-subtitle">{talk.subtitle}</p>

        {/* Tags */}
        <div className="card-tags-row">
          {talk.tags?.slice(0, 3).map((tag, idx) => (
            <span key={idx} className="card-tag-pill">
              #{tag}
            </span>
          ))}
          {talk.tags?.length > 3 && (
            <span className="card-tag-pill">+{talk.tags.length - 3}</span>
          )}
        </div>

        {/* Card Footer Actions */}
        <div className="card-footer-actions">
          <button
            type="button"
            className="card-btn-view"
            onClick={() => onLaunchSlides(talk)}
            title="Launch interactive slide presentation"
          >
            <Play size={16} fill="currentColor" />
            <span>Launch Slides</span>
          </button>

          {talk.standaloneUrl && (
            <a
              href={talk.standaloneUrl}
              target="_blank"
              rel="noreferrer"
              className="card-btn-details"
              title="Open full standalone 4K video ShopTalk"
              style={{ color: '#00f2fe', borderColor: 'rgba(0, 242, 254, 0.4)' }}
            >
              <ArrowUpRight size={16} />
            </a>
          )}

          <button
            type="button"
            className="card-btn-details"
            onClick={() => onOpenDetails(talk)}
            title="View talk notes & dossier"
          >
            <FileText size={16} />
          </button>
        </div>
      </div>
    </article>
  );
}
