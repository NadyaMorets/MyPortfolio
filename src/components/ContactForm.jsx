import { useState } from 'react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Простая валидация
    if (!name || !email || !message) {
      setError('Все поля обязательны');
      return;
    }
    
    if (!email.includes('@')) {
      setError('Введите правильный email');
      return;
    }

    setError('');
    console.log('Отправлено:', { name, email, message });
    
    // Очистка формы
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit} className="simple-form">
      <h3>Напишите мне</h3>
      
      {error && <p className="error">{error}</p>}
      
      <div>
        <label>Имя:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      
      <div>
        <label>Email:</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      
      <div>
        <label>Сообщение:</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows="4"
        />
      </div>
      
      <button type="submit">Отправить</button>
    </form>
  );
}