import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { fetchCountries } from '../services/api';
import CountryCard from '../components/CountryCard';
import Filter from '../components/Filter';
import SearchBar from '../components/SearchBar';
import Sort from '../components/Sort';

interface Country {
  name: { common: string };
  population: number;
  region: string;
  flags: { svg: string };
  visited: boolean;
}

const Home: React.FC = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [visitedCountries, setVisitedCountries] = useState<string[]>(() => {
    return JSON.parse(localStorage.getItem('visitedCountries') || '[]');
  });

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    const getCountries = async () => {
      const data = await fetchCountries();
      setCountries(data);
    };
    getCountries();
  }, []);

  const filteredCountries = useMemo(() => {
    let filtered = countries;

    if (selectedRegion) {
      filtered = filtered.filter(
        (country) => country.region === selectedRegion
      );
    }

    if (searchTerm) {
      filtered = filtered.filter((country) =>
        country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (sortBy === 'name') {
      filtered = filtered.sort((a, b) =>
        sortOrder === 'asc'
          ? a.name.common.localeCompare(b.name.common)
          : b.name.common.localeCompare(a.name.common)
      );
    } else if (sortBy === 'population') {
      filtered = filtered.sort((a, b) =>
        sortOrder === 'asc'
          ? a.population - b.population
          : b.population - a.population
      );
    }

    return filtered;
  }, [countries, searchTerm, selectedRegion, sortBy, sortOrder]);

  const toggleVisited = useCallback(
    (countryName: string) => {
      const updatedVisited = visitedCountries.includes(countryName)
        ? visitedCountries.filter((name) => name !== countryName)
        : [...visitedCountries, countryName];

      setVisitedCountries(updatedVisited);
      localStorage.setItem('visitedCountries', JSON.stringify(updatedVisited));
    },
    [visitedCountries]
  );

  const handleSearchChange = useCallback((term: string) => {
    setSearchTerm(term);
  }, []);

  const handleRegionChange = useCallback((region: string) => {
    setSelectedRegion(region);
  }, []);

  const handleSortChange = useCallback((sortBy: string, sortOrder: string) => {
    setSortBy(sortBy);
    setSortOrder(sortOrder);
  }, []);

  return (
    <div className="home">
      <header>
        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={handleSearchChange}
        />
        <Filter
          regions={[...new Set(countries.map((country) => country.region))]}
          selectedRegion={selectedRegion}
          onRegionChange={handleRegionChange}
        />
        <Sort
          sortBy={sortBy}
          sortOrder={sortOrder}
          onSortChange={handleSortChange}
        />
      </header>
      <main>
        {filteredCountries.map((country) => (
          <CountryCard
            key={country.name.common}
            name={country.name.common}
            population={country.population}
            region={country.region}
            flag={country.flags.svg}
            visited={visitedCountries.includes(country.name.common)}
            onToggleVisited={() => toggleVisited(country.name.common)}
          />
        ))}
      </main>
    </div>
  );
};

export default Home;
