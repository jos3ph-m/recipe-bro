import { useTheme } from '../hooks/useTheme';

// styles
import './ThemeSelector.css';

export default function ThemeSelector() {
  const { changeColor } = useTheme();
  return <div className="theme-selector"></div>;
}
