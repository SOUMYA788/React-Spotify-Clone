import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Stack } from '@mui/system';
import './App.css';
import { Album, Home, Navigation, SearchBar } from './components';
import { Box } from '@mui/material';

function App() {

  return (
    <Router>
      <Stack direction="row">
        <Navigation />
        <Box sx={{ flex: "1",padding: "5px" }}>
          <Box sx={{ width: "100%", height: "50px", padding: "5px" }}>
            <SearchBar />
          </Box>
          <Box sx={{height:"calc(100vh - 50px)", overflowY:"scroll", scrollBehavior:"smooth"}}>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/album/:albumId' element={<Album />} />
            </Routes>
          </Box>
        </Box>
      </Stack>
    </Router>
  );
}

export default App;
