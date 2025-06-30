import { useTheme } from '../components/ThemeContext';

function Skills() {
  const { isDarkMode } = useTheme();
  const skills = ["Unity", "C#", "HTML", "CSS", "JavaScript", "React"];

  return (
    <section className={isDarkMode ? 'dark' : 'light'}>
      <div className="section-content">
        <h2>Мои навыки</h2>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
      
    </section>
  );
}

export default Skills;