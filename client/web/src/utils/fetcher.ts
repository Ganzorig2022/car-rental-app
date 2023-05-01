export const fetchPlaces = async (searchInput: string) => {
  const searchResults = await fetch(
    `https://api.mapbox.com/search/searchbox/v1/suggest?q=${searchInput}&language=en&session_token=${process.env.NEXT_PUBLIC_MAPBOX_KEY_SEARCK_SESSION_TOKEN}&access_token=${process.env.NEXT_PUBLIC_MAPBOX_KEY_SEARCK_ACCESS_TOKEN}`
  );
  const data = await searchResults.json();

  return data.suggestions;
};
