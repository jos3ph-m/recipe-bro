import { useTheme } from '../hooks/useTheme';

// styles
import './ThemeSelector.css';

// swatches
const themeColors = ['#58249c', '#249c6b', '#9f2020', '#9f9620', '#a7bcb9'];

export default function ThemeSelector() {
  const { changeColor } = useTheme();
  return (
    <div className="theme-selector">
      <div className="theme-buttons">
        {themeColors.map((color) => (
          <div
            key={color}
            onClick={() => changeColor(color)}
            style={{ background: color }}
          />
        ))}
      </div>
    </div>
  );
}
