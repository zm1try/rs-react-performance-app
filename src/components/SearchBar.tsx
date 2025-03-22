import React from 'react';

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = React.memo(
  ({ searchTerm, onSearchChange }: SearchBarProps) => {
    return (
      <input
        type="text"
        placeholder="Search countries..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    );
  }
);

SearchBar.displayName = 'SearchBar';
export default SearchBar;
