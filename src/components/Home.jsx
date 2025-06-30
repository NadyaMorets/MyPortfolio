import { useTheme } from '../components/ThemeContext';

function Home() {
  const { isDarkMode } = useTheme();
  return (
    <section className={isDarkMode ? 'dark' : 'light'}>
      <div className="section-content">
        <h1>Привет, я Надя</h1>
        <p>Разрабатываю 2D, 3D игры на Unity и делаю сайты</p>
      </div>
    </section>
  );
}

export default Home;