import { useTheme } from '../hooks/useTheme';

// styles
import './ThemeSelector.css';

// swatches
const themeColors = [
  '#58249c',
  '#249c6b',
  '#b70233',
  '#175908',
  '#9f9620',
  '#9f2020',
];

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
