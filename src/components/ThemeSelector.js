import { useTheme } from '../hooks/useTheme';

// styles
import './ThemeSelector.css';

// swatches
const themeColor = ['#58249c', '#249c6b', '#b70233'];

export default function ThemeSelector() {
  const { changeColor } = useTheme();
  return (
    <div className="theme-selector">
      <div className="theme-buttons"></div>
    </div>
  );
}
