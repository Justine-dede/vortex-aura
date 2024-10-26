import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './register.css'; // Assurez-vous que le fichier CSS est dans le même dossier
import logo from './logo.png'; // Assurez-vous d'importer correctement l'image du logo

const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [notification, setNotification] = useState(''); // État pour la notification
  const navigate = useNavigate(); // Pour rediriger l'utilisateur

  const handleSubmit = async (e) => {
    e.preventDefault();
    setNotification(''); // Réinitialiser la notification

    try {
      const payload = { username, email, password };
      const response = await axios.post('http://127.0.0.1:8000/register', payload, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setNotification('Inscription réussie ! Connectez-vous pour commencer.');

      // Rediriger vers la page de connexion après un délai de 2 secondes
      setTimeout(() => {
        navigate('/login');
      }, 1200);
    } catch (error) {
      // Afficher la notification d'erreur
      const errorMsg = error.response?.data.detail || "Erreur lors de l'inscription. Veuillez réessayer.";
      setNotification(errorMsg);
    }
  };

  return (
    <div className='register-container'>
      <div className="register-wrapper">
        <div className="Logo">
          <img src={logo} alt="logo d'IVAN" />
        </div>
        <div className="container">
          <h2>Inscription</h2>
          {notification && <div className="notification">{notification}</div>} {/* Affichage de la notification */}
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Nom d'utilisateur :</label>
            <input
              type="username"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />

            <label htmlFor="email">Email :</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label htmlFor="password">Mot de passe :</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button type="submit" className='submitAuth'>S'inscrire</button>
          </form>
          <p>Déjà un compte? <a href="/login">Se connecter</a></p>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
