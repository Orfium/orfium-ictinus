import { Box, ThemeProvider } from '@orfium/ictinus/vanilla';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <Box p="lg">
        <p className="read-the-docs">
          This is a vanilla-extract example to show case correct importation of css variables and
          vanilla-extract styles per component.
        </p>
      </Box>
    </ThemeProvider>
  );
}

export default App;
