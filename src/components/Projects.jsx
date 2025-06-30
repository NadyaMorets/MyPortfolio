import { useState } from 'react';
import { useTheme } from '../components/ThemeContext';

// Импортируем изображения для проекта 1
import project1Image1 from '../assets/projects/project1/ВК2.png';
import project1Image2 from '../assets/projects/project1/ВК3.png';
import project1Image3 from '../assets/projects/project1/ВК4.png';

// Импортируем изображения для проекта 2
import project2Image1 from '../assets/projects/project2/Игра.png';
import project2Image2 from '../assets/projects/project2/Игра2.png';
import project2Image3 from '../assets/projects/project2/Игра3.png';

function Projects() {
  const { isDarkMode } = useTheme();

  // Состояние для текущего индекса изображения каждого проекта
  const [currentImageIndex, setCurrentImageIndex] = useState({
    1: 0, // Для проекта 1
    2: 0  // Для проекта 2
  });

  // Изображения для каждого проекта
  const projectImages = {
    1: [project1Image1, project1Image2, project1Image3],
    2: [project2Image1, project2Image2, project2Image3]
  };

  const projects = [
    { id: 1, title: "Космо-клининг", description: "Космо-клининг - это игра сортировка предметов, в которой вы можете управлять веселым роботом помощником и наводить порядок в космосе.", link: "https://vk.com/app53127894", hasGallery: true },
    { id: 2, title: "Рогалик-шутер от первого лица", description: "Это гибридный жанр игр, которой сочетает элементы классического рогалика с геймплеем от первого лица, характерным для шутеров.", hasGallery: true },
    { id: 3, title: "Travel", description: "Разработка сайта Travel с главным меню, навигацией, описанием", link: "https://nadyamorets.github.io/Travel-new/", hasGallery: false }
  ];
  
  // Функция для переключения изображений
  const changeImage = (projectId, direction) => {
    setCurrentImageIndex(prev => {
      const totalImages = projectImages[projectId].length;
      const newIndex = direction === 'next' 
        ? (prev[projectId] + 1) % totalImages
        : (prev[projectId] - 1 + totalImages) % totalImages;
      
      return { ...prev, [projectId]: newIndex };
    });
  };

  return (
    <section className={isDarkMode ? 'dark' : 'light'}>
      <div className="section-content">
        <h2>Мои проекты</h2>
        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              {project.link && (
                <a href={project.link} className="project-card-a">Ссылка на проект</a>
              )}
              {/* Галерея изображений (только для проектов с hasGallery: true) */}
              {project.hasGallery && (
                <div className="project-gallery">
                  <img 
                    src={projectImages[project.id][currentImageIndex[project.id]]} 
                    alt={`${project.title} - ${currentImageIndex[project.id] + 1}`}
                    className="gallery-image"
                  />
                  <div className="gallery-controls">
                    <button 
                      onClick={() => changeImage(project.id, 'prev')}
                      className="gallery-button"
                    >
                      ←
                    </button>
                    <span className="image-counter">
                      {currentImageIndex[project.id] + 1}/{projectImages[project.id].length}
                    </span>
                    <button 
                      onClick={() => changeImage(project.id, 'next')}
                      className="gallery-button"
                    >
                      →
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      
    </section>
  );
}

export default Projects;