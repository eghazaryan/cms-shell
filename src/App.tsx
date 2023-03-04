import { Demo } from './pages/home';
import { ThemeProvider } from './ThemeProvider';

export default function App() {
  return (
    <ThemeProvider>
      {/* <Welcome /> */}
      <Demo />
    </ThemeProvider>
  );
}
