import { useLocalStorage } from '@mantine/hooks';
import { ColorScheme, ColorSchemeProvider, MantineProvider } from '@mantine/core';
import { Home } from './pages/home';
import { ActionToggle } from './toggleTheme';
import { About } from './pages/about';

export default function App() {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: 'light',
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider withGlobalStyles withNormalizeCSS theme={{ colorScheme }}>
        <ActionToggle />
        <Home />

        <About />
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
