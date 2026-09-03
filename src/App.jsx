import React, { useState, useEffect, useMemo } from 'react';
import Header from './components/Header';
import HeroSpeaker from './components/HeroSpeaker';
import FilterBar from './components/FilterBar';
import PresentationCard from './components/PresentationCard';
import PresentationTimeline from './components/PresentationTimeline';
import SlideViewerModal from './components/SlideViewerModal';
import TalkDetailsModal from './components/TalkDetailsModal';
import AddPresentationModal from './components/AddPresentationModal';
import Footer from './components/Footer';
import { INITIAL_PRESENTATIONS, SPEAKER_PROFILE } from './presentations';
import { Presentation, Layers, SearchX } from 'lucide-react';
import './styles/index.css';
import './styles/app.css';
import './styles/slide-viewer.css';
import './styles/modals.css';

const LOCAL_STORAGE_KEY = 'shoptalks_presentations_v8';

export default function App() {
  const [talks, setTalks] = useState(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch (e) {
      console.warn('Failed to parse saved talks:', e);
    }
    return INITIAL_PRESENTATIONS;
  });

  // Filters and UI State
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedYear, setSelectedYear] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'timeline'

  // Modals state
  const [activeSlideTalk, setActiveSlideTalk] = useState(null);
  const [activeDetailTalk, setActiveDetailTalk] = useState(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(talks));
    } catch (e) {
      console.error('Error saving talks to localStorage:', e);
    }
  }, [talks]);

  // Categories list
  const categories = useMemo(() => {
    const cats = ['All'];
    talks.forEach((t) => {
      if (t.category && !cats.includes(t.category)) {
        cats.push(t.category);
      }
    });
    return cats;
  }, [talks]);

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts = { All: talks.length };
    talks.forEach((t) => {
      if (t.category) {
        counts[t.category] = (counts[t.category] || 0) + 1;
      }
    });
    return counts;
  }, [talks]);

  // Featured presentation
  const featuredTalk = useMemo(() => {
    return talks.find((t) => t.featured) || talks[0];
  }, [talks]);

  // Filter and sort talks
  const filteredTalks = useMemo(() => {
    let result = talks.filter((t) => {
      // Search query filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = t.title?.toLowerCase().includes(query);
        const matchesSub = t.subtitle?.toLowerCase().includes(query);
        const matchesEvent = t.event?.toLowerCase().includes(query);
        const matchesTags = t.tags?.some((tag) => tag.toLowerCase().includes(query));
        const matchesAbstract = t.abstract?.toLowerCase().includes(query);
        if (!matchesTitle && !matchesSub && !matchesEvent && !matchesTags && !matchesAbstract) {
          return false;
        }
      }

      // Category filter
      if (selectedCategory !== 'All' && t.category !== selectedCategory) {
        return false;
      }

      // Event Type filter
      if (selectedType !== 'all' && t.type !== selectedType) {
        return false;
      }

      // Year filter
      if (selectedYear !== 'all' && String(t.year) !== String(selectedYear)) {
        return false;
      }

      return true;
    });

    // Sorting
    result.sort((a, b) => {
      if (sortBy === 'newest') {
        return new Date(b.date || b.year) - new Date(a.date || a.year);
      }
      if (sortBy === 'popular') {
        return (b.views || 0) - (a.views || 0);
      }
      if (sortBy === 'rating') {
        return (b.rating || 0) - (a.rating || 0);
      }
      if (sortBy === 'slides') {
        const aSlides = a.slidesCount || a.slides?.length || 0;
        const bSlides = b.slidesCount || b.slides?.length || 0;
        return bSlides - aSlides;
      }
      return 0;
    });

    return result;
  }, [talks, searchQuery, selectedCategory, selectedType, selectedYear, sortBy]);

  // Launch presentation handler (opens standalone presentation in new window if available)
  const handleLaunchPresentation = (talk) => {
    if (talk?.standaloneUrl) {
      window.open(talk.standaloneUrl, '_blank', 'noopener,noreferrer');
    } else {
      setActiveSlideTalk(talk);
    }
  };

  // Add Talk Handler
  const handleAddTalk = (newTalk) => {
    setTalks((prev) => [newTalk, ...prev]);
  };

  // Reset to default sample presentations
  const handleResetDefaults = () => {
    if (window.confirm('Reset showcase to your real presentations?')) {
      setTalks(INITIAL_PRESENTATIONS);
      localStorage.removeItem(LOCAL_STORAGE_KEY);
    }
  };

  return (
    <div className="app-container">
      {/* Header */}
      <Header
        onOpenAddModal={() => setIsAddModalOpen(true)}
        speakerProfile={SPEAKER_PROFILE}
      />

      <main className="main-content">
        {/* Hero Speaker Showcase */}
        <HeroSpeaker
          speaker={SPEAKER_PROFILE}
          featuredTalk={featuredTalk}
          onLaunchSlides={handleLaunchPresentation}
          onOpenDetails={(talk) => setActiveDetailTalk(talk)}
        />

        {/* Search, Filter & Controls Toolbar */}
        <FilterBar
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          categoryCounts={categoryCounts}
          selectedType={selectedType}
          onSelectType={setSelectedType}
          selectedYear={selectedYear}
          onSelectYear={setSelectedYear}
          sortBy={sortBy}
          onSortChange={setSortBy}
          viewMode={viewMode}
          onViewModeChange={setViewMode}
        />

        {/* Presentations Display Area */}
        {filteredTalks.length === 0 ? (
          <div className="empty-state">
            <div className="empty-state-icon">
              <SearchX size={32} />
            </div>
            <h3 className="empty-state-title">No presentations found</h3>
            <p className="empty-state-desc">
              No talks matched your current search and filter criteria. Try adjusting the category, year, or search terms.
            </p>
            <button
              type="button"
              className="btn-primary"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
                setSelectedType('all');
                setSelectedYear('all');
              }}
            >
              Reset All Filters
            </button>
          </div>
        ) : viewMode === 'grid' ? (
          <div className="presentations-grid">
            {filteredTalks.map((talk) => (
              <PresentationCard
                key={talk.id}
                talk={talk}
                onLaunchSlides={handleLaunchPresentation}
                onOpenDetails={(t) => setActiveDetailTalk(t)}
              />
            ))}
          </div>
        ) : (
          <PresentationTimeline
            talks={filteredTalks}
            onLaunchSlides={handleLaunchPresentation}
            onOpenDetails={(t) => setActiveDetailTalk(t)}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        talks={talks}
        onResetDefaults={handleResetDefaults}
        speakerProfile={SPEAKER_PROFILE}
      />

      {/* Interactive Slide Viewer Modal */}
      {activeSlideTalk && (
        <SlideViewerModal
          talk={activeSlideTalk}
          onClose={() => setActiveSlideTalk(null)}
        />
      )}

      {/* Talk Dossier & Details Modal */}
      {activeDetailTalk && (
        <TalkDetailsModal
          talk={activeDetailTalk}
          onClose={() => setActiveDetailTalk(null)}
          onLaunchSlides={handleLaunchPresentation}
        />
      )}

      {/* Add New Presentation Modal */}
      {isAddModalOpen && (
        <AddPresentationModal
          onClose={() => setIsAddModalOpen(false)}
          onAddTalk={handleAddTalk}
        />
      )}
    </div>
  );
}
