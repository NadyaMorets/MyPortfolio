import { useTheme } from '../components/ThemeContext';
import ContactForm from './ContactForm';

function Contact() {
  const { isDarkMode } = useTheme();

  return (
    <section id="contact" className={isDarkMode ? 'dark' : 'light'}>
      <div className="section-content">
        <h2>Контакты</h2>
        <div className="contact-container">
          <div className="contact-info">
            <p>Email: Morets_N@gmail.com</p>
            <p>GitHub: <a href="https://github.com/NadyaMorets">https://github.com/NadyaMorets</a></p>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default Contact;



