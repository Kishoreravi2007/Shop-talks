import React from 'react';
import { Search, X, LayoutGrid, CalendarRange, SlidersHorizontal, Layers } from 'lucide-react';

export default function FilterBar({
  searchQuery,
  onSearchChange,
  categories,
  selectedCategory,
  onSelectCategory,
  categoryCounts,
  selectedType,
  onSelectType,
  selectedYear,
  onSelectYear,
  sortBy,
  onSortChange,
  viewMode,
  onViewModeChange
}) {
  return (
    <div className="filter-toolbar-section">
      <div className="filter-top-row">
        {/* Search Input */}
        <div className="search-input-wrapper">
          <Search size={18} className="search-icon" />
          <input
            type="text"
            className="search-input"
            placeholder="Search talks, slides, architectures, topics..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            id="presentation-search-input"
          />
          {searchQuery && (
            <button
              type="button"
              className="search-clear-btn"
              onClick={() => onSearchChange('')}
              title="Clear search"
            >
              <X size={14} />
            </button>
          )}
        </div>

        {/* Filters and View Mode Controls */}
        <div className="filter-dropdowns">
          <select 
            className="filter-select"
            value={selectedType}
            onChange={(e) => onSelectType(e.target.value)}
            aria-label="Filter by Event Type"
          >
            <option value="all">All Event Types</option>
            <option value="Keynote">Keynotes</option>
            <option value="Conference">Conferences</option>
            <option value="Workshop">Workshops</option>
            <option value="Internal Tech Talk">Internal Talks</option>
          </select>

          <select 
            className="filter-select"
            value={selectedYear}
            onChange={(e) => onSelectYear(e.target.value)}
            aria-label="Filter by Year"
          >
            <option value="all">All Years</option>
            <option value="2026">2026</option>
            <option value="2025">2025</option>
            <option value="2024">2024</option>
          </select>

          <select 
            className="filter-select"
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
            aria-label="Sort presentations"
          >
            <option value="newest">Newest First</option>
            <option value="popular">Most Viewed</option>
            <option value="rating">Highest Rated</option>
            <option value="slides">Most Slides</option>
          </select>

          <div className="view-mode-toggle">
            <button
              type="button"
              className={`view-mode-btn ${viewMode === 'grid' ? 'active' : ''}`}
              onClick={() => onViewModeChange('grid')}
              title="Grid View"
              id="view-mode-grid"
            >
              <LayoutGrid size={16} />
              <span>Grid</span>
            </button>
            <button
              type="button"
              className={`view-mode-btn ${viewMode === 'timeline' ? 'active' : ''}`}
              onClick={() => onViewModeChange('timeline')}
              title="Timeline View"
              id="view-mode-timeline"
            >
              <CalendarRange size={16} />
              <span>Timeline</span>
            </button>
          </div>
        </div>
      </div>

      {/* Category Pills Row */}
      <div className="category-pills-row">
        {categories.map((cat) => {
          const count = categoryCounts[cat] || 0;
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              type="button"
              className={`category-pill ${isActive ? 'active' : ''}`}
              onClick={() => onSelectCategory(cat)}
            >
              <span>{cat}</span>
              <span className="pill-count">{count}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
