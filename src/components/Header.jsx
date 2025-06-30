import { useTheme } from '../components/ThemeContext';

function Header() {
  const { isDarkMode, toggleTheme } = useTheme();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`header ${isDarkMode ? 'dark' : 'light'}`}>
      <ul className="mainmenu_list">
        <li><button onClick={() => scrollToSection('home')}>Главная</button></li>
        <li><button onClick={() => scrollToSection('projects')}>Проекты</button></li>
        <li><button onClick={() => scrollToSection('skills')}>Навыки</button></li>
        <li><button onClick={() => scrollToSection('contact')}>Контакты</button></li>
        <li><button onClick={toggleTheme}>{isDarkMode ? 'Светлая тема' : 'Тёмная тема'}</button></li>
      </ul>
      
    </nav>
  );
}

export default Header;