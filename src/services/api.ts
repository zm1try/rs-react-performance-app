const BASE_URL = 'https://restcountries.com/v3.1';

export const fetchCountries = async () => {
  try {
    const response = await fetch(`${BASE_URL}/all`);
    if (!response.ok) {
      throw new Error(`Error fetching countries: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching countries:', error);
    return [];
  }
};
