import React, { useState } from 'react';
import {
  Box,
  TextField,
  List,
  ListItem,
  ListItemText,
  InputAdornment,
  Divider,
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchIcon from '@mui/icons-material/Search';

// Mapbox API token (replace with your own)
const MAPBOX_API_KEY = 'YOUR_MAPBOX_API_KEY';

const LocationSearch = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const fetchSuggestions = async (value) => {
    if (!value) return setResults([]);

    const response = await fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${value}.json?access_token=${MAPBOX_API_KEY}&autocomplete=true&limit=5`
    );
    const data = await response.json();

    if (data?.features) {
      setResults(data.features);
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    fetchSuggestions(value);
  };

  return (
    <Box sx={{ width: '100%', maxWidth: 500, mx: 'auto', mt: 4 }}>
      <TextField
        fullWidth
        placeholder="Where to?"
        value={query}
        onChange={handleChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />

      {results.length > 0 && (
        <List sx={{ border: '1px solid #ddd', borderRadius: 2, mt: 1 }}>
          {results.map((place, index) => (
            <ListItem key={index} button>
              <LocationOnIcon sx={{ mr: 1 }} />
              <ListItemText
                primary={place.text}
                secondary={place.place_name}
              />
            </ListItem>
          ))}

          <Divider />
          <ListItem button>
            <ListItemText
              primary="Search in a different city"
              primaryTypographyProps={{ color: 'primary' }}
            />
          </ListItem>
        </List>
      )}
    </Box>
  );
};

export default LocationSearch;
