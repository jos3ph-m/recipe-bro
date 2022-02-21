import { useTheme } from '../hooks/useTheme';
import modeIcon from '../assets/mode-icon.svg';

// styles
import './ThemeSelector.css';

// swatches
const themeColors = [
  '#58249c',
  '#249c6b',
  '#9f2020',
  '#9f9620',
  '#a7bcb9',
  '#4a5352',
];

export default function ThemeSelector() {
  const { changeColor, changeMode, mode } = useTheme();

  const toggleMode = () => {
    changeMode(mode === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="theme-selector">
      <div className="mode-toggle">
        <img onClick={toggleMode} src={modeIcon} alt="dark/light toggle icon" />
      </div>
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
