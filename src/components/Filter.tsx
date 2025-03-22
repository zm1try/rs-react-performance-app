import React from 'react';

interface FilterProps {
  regions: string[];
  selectedRegion: string;
  onRegionChange: (region: string) => void;
}

const Filter: React.FC<FilterProps> = ({
  regions,
  selectedRegion,
  onRegionChange,
}) => {
  return (
    <select
      value={selectedRegion}
      onChange={(e) => onRegionChange(e.target.value)}
    >
      <option value="">All Regions</option>
      {regions.map((region) => (
        <option key={region} value={region}>
          {region}
        </option>
      ))}
    </select>
  );
};

export default Filter;
