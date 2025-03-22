import React from 'react';

interface SortProps {
  sortBy: string;
  sortOrder: string;
  onSortChange: (sortBy: string, sortOrder: string) => void;
}

const Sort: React.FC<SortProps> = ({ sortBy, sortOrder, onSortChange }) => {
  return (
    <div className="sort-container">
      <select
        value={sortBy}
        onChange={(e) => onSortChange(e.target.value, sortOrder)}
      >
        <option value="name">Name</option>
        <option value="population">Population</option>
      </select>
      <select
        value={sortOrder}
        onChange={(e) => onSortChange(sortBy, e.target.value)}
      >
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
    </div>
  );
};

export default Sort;
