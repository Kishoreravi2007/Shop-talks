import React, { useState } from 'react';
import { X, Plus, Sparkles, AlertCircle } from 'lucide-react';

export default function AddPresentationModal({ onClose, onAddTalk }) {
  const [formData, setFormData] = useState({
    title: '',
    subtitle: '',
    category: 'Architecture',
    type: 'Conference',
    event: '',
    location: 'San Francisco, CA',
    date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
    year: '2026',
    duration: '40 mins',
    slidesCount: 8,
    tags: 'Architecture, Scaling, System Design',
    abstract: '',
    keyTakeaways: 'Design for graceful degradation\nMinimize round-trip latencies\nAutomate verification testing'
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.title.trim()) {
      setError('Please provide a presentation title.');
      return;
    }
    if (!formData.event.trim()) {
      setError('Please provide an event or conference name.');
      return;
    }

    const tagsArray = formData.tags
      .split(',')
      .map((t) => t.trim())
      .filter(Boolean);

    const takeawaysArray = formData.keyTakeaways
      .split('\n')
      .map((t) => t.trim())
      .filter(Boolean);

    // Generate starter slide deck
    const starterSlides = [
      {
        id: 1,
        layout: 'hero',
        title: formData.title,
        subtitle: formData.subtitle || 'Key Architectural Insights and Lessons',
        event: formData.event,
        speakerNotes: 'Introduce yourself and state the primary premise of this talk.'
      },
      {
        id: 2,
        layout: 'bullets',
        title: 'Problem Statement & Motivation',
        subtitle: 'Why this challenge matters today',
        content: [
          'High friction and bottlenecks in current paradigms',
          'Scalability constraints under sudden traffic bursts',
          'Developer productivity and maintenance overhead'
        ],
        speakerNotes: 'Connect with the audience pain points here.'
      },
      {
        id: 3,
        layout: 'bullets',
        title: 'Core Architectural Takeaways',
        subtitle: 'Summary of proposed solution patterns',
        content: takeawaysArray.length > 0 ? takeawaysArray : [
          'Modular decoupling of systems',
          'Idempotent async message passing',
          'Automated observability and alerting'
        ],
        speakerNotes: 'Walk through each key pillar in detail.'
      },
      {
        id: 4,
        layout: 'summary',
        title: 'Q&A and Discussion',
        subtitle: 'Thank you for attending!',
        resourcesText: 'Slides and code examples available in repo.',
        speakerNotes: 'Invite questions from the attendees.'
      }
    ];

    const categoryGradients = {
      Architecture: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 50%, #06b6d4 100%)',
      Frontend: 'linear-gradient(135deg, #0ea5e9 0%, #2563eb 50%, #4f46e5 100%)',
      'AI & LLMs': 'linear-gradient(135deg, #7c3aed 0%, #c026d3 50%, #ec4899 100%)',
      Databases: 'linear-gradient(135deg, #059669 0%, #0d9488 50%, #0284c7 100%)',
      'UI & Design Systems': 'linear-gradient(135deg, #db2777 0%, #9333ea 50%, #4f46e5 100%)',
      'DevOps & Reliability': 'linear-gradient(135deg, #d97706 0%, #ea580c 50%, #dc2626 100%)'
    };

    const newTalk = {
      id: `talk-${Date.now()}`,
      title: formData.title.trim(),
      subtitle: formData.subtitle.trim() || 'A comprehensive technical presentation.',
      category: formData.category,
      type: formData.type,
      event: formData.event.trim(),
      location: formData.location.trim(),
      date: formData.date.trim(),
      year: formData.year,
      duration: formData.duration.trim(),
      slidesCount: starterSlides.length,
      views: 1,
      rating: 5.0,
      featured: false,
      accentColor: '#6366f1',
      gradient: categoryGradients[formData.category] || categoryGradients.Architecture,
      tags: tagsArray.length > 0 ? tagsArray : ['TechTalk'],
      abstract: formData.abstract.trim() || 'This presentation breaks down architectural patterns, practical case studies, and engineering best practices.',
      keyTakeaways: takeawaysArray,
      prerequisites: 'Basic software engineering background.',
      resources: {
        repoUrl: 'https://github.com',
        recordingUrl: 'https://youtube.com',
        pdfUrl: '#'
      },
      slides: starterSlides
    };

    onAddTalk(newTalk);
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title-wrap">
            <h2 className="modal-title">Add New Presentation</h2>
            <span className="modal-subtitle">
              Add a new talk, slide deck, or keynote to your showcase hub
            </span>
          </div>
          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            title="Close"
          >
            <X size={18} />
          </button>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', flex: 1, minHeight: 0 }}>
          <div className="modal-body">
            {error && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(239, 68, 68, 0.15)', border: '1px solid rgba(239, 68, 68, 0.4)', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', color: '#fca5a5', fontSize: '0.88rem' }}>
                <AlertCircle size={16} />
                <span>{error}</span>
              </div>
            )}

            <div className="form-group">
              <label className="form-label">Presentation Title *</label>
              <input
                type="text"
                name="title"
                className="form-input"
                placeholder="e.g. Modern Web Performance at Scale"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Subtitle / Tagline</label>
              <input
                type="text"
                name="subtitle"
                className="form-input"
                placeholder="e.g. Reducing Core Web Vitals and streaming edge assets"
                value={formData.subtitle}
                onChange={handleChange}
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Category</label>
                <select
                  name="category"
                  className="form-select"
                  value={formData.category}
                  onChange={handleChange}
                >
                  <option value="Architecture">Architecture</option>
                  <option value="Frontend">Frontend</option>
                  <option value="AI & LLMs">AI & LLMs</option>
                  <option value="Databases">Databases</option>
                  <option value="UI & Design Systems">UI & Design Systems</option>
                  <option value="DevOps & Reliability">DevOps & Reliability</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Event Type</label>
                <select
                  name="type"
                  className="form-select"
                  value={formData.type}
                  onChange={handleChange}
                >
                  <option value="Keynote">Keynote</option>
                  <option value="Conference">Conference</option>
                  <option value="Workshop">Workshop</option>
                  <option value="Internal Tech Talk">Internal Tech Talk</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Event / Conference Name *</label>
                <input
                  type="text"
                  name="event"
                  className="form-input"
                  placeholder="e.g. React Conf 2026"
                  value={formData.event}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Duration & Date</label>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                  <input
                    type="text"
                    name="duration"
                    className="form-input"
                    placeholder="45 mins"
                    value={formData.duration}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="date"
                    className="form-input"
                    placeholder="Apr 2026"
                    value={formData.date}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Tags (comma separated)</label>
              <input
                type="text"
                name="tags"
                className="form-input"
                placeholder="React, Architecture, Edge, Performance"
                value={formData.tags}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Abstract / Description</label>
              <textarea
                name="abstract"
                rows={3}
                className="form-textarea"
                placeholder="Detailed summary of the session topic and real-world impact..."
                value={formData.abstract}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Key Takeaways (one per line)</label>
              <textarea
                name="keyTakeaways"
                rows={3}
                className="form-textarea"
                placeholder="Key lesson 1&#10;Key lesson 2&#10;Key lesson 3"
                value={formData.keyTakeaways}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="modal-footer">
            <button
              type="button"
              className="btn-secondary"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn-primary"
            >
              <Plus size={16} />
              <span>Save Presentation</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
