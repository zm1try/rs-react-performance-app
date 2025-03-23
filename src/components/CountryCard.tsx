import React from 'react';

interface CountryCardProps {
  name: string;
  population: number;
  region: string;
  flag: string;
  visited: boolean;
  onToggleVisited: () => void;
}

const CountryCard: React.FC<CountryCardProps> = React.memo(
  ({
    name,
    population,
    region,
    flag,
    visited,
    onToggleVisited,
  }: CountryCardProps) => {
    return (
      <div className={`${visited ? 'visited' : ''} country-card`}>
        <img src={flag} alt={`${name} flag`} />
        <h3>{name}</h3>
        <p>Population: {population.toLocaleString()}</p>
        <p>Region: {region}</p>
        <button onClick={onToggleVisited}>
          {visited ? 'Mark as Not Visited' : 'Mark as Visited'}
        </button>
      </div>
    );
  }
);

CountryCard.displayName = 'CountryCard';
export default CountryCard;
