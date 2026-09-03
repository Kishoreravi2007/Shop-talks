import React from 'react';
import { Play, FileText, Calendar, Clock, Layers, MapPin } from 'lucide-react';

export default function PresentationTimeline({ talks, onLaunchSlides, onOpenDetails }) {
  // Sort talks chronologically descending
  const sortedTalks = [...talks].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="timeline-container">
      {sortedTalks.map((talk) => (
        <div key={talk.id} className="timeline-item">
          <div className="timeline-dot" />

          <div className="timeline-card">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.65rem', flexWrap: 'wrap', gap: '0.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <span className="card-category-tag" style={{ background: talk.accentColor || '#6366f1' }}>
                  {talk.category}
                </span>
                <span style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
                  {talk.event}
                </span>
              </div>
              <div 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.5rem', 
                  fontSize: '0.82rem', 
                  color: talk.date?.includes('Yesterday') ? '#00f2fe' : 'var(--text-secondary)',
                  fontWeight: talk.date?.includes('Yesterday') ? 700 : 500
                }}
              >
                <Calendar size={13} />
                <span>Presented: {talk.date}</span>
              </div>
            </div>

            <h3 
              style={{ fontSize: '1.25rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.5rem', cursor: 'pointer' }}
              onClick={() => onLaunchSlides(talk)}
            >
              {talk.title}
            </h3>

            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: 1.5 }}>
              {talk.subtitle}
            </p>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Clock size={13} /> {talk.duration}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Layers size={13} /> {talk.slidesCount} slides
                </span>
                {talk.location && (
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <MapPin size={13} /> {talk.location}
                  </span>
                )}
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <button
                  type="button"
                  className="card-btn-view"
                  style={{ padding: '0.45rem 0.9rem', fontSize: '0.82rem' }}
                  onClick={() => onLaunchSlides(talk)}
                >
                  <Play size={14} fill="currentColor" />
                  <span>Launch Presentation</span>
                </button>
                <button
                  type="button"
                  className="card-btn-details"
                  style={{ width: '32px', height: '32px' }}
                  onClick={() => onOpenDetails(talk)}
                  title="View Talk Dossier"
                >
                  <FileText size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
