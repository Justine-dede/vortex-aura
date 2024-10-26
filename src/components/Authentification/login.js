import React, { useState } from 'react';
import axios from 'axios';
import './login.css';
import logo from './../../images/logo.png';
import { useNavigate } from 'react-router-dom'; // Importez useNavigate pour la redirection

const LoginForm = () => {
  const [username, setUsername] = useState(''); // Changement ici pour utiliser username
  const [notification, setNotification] = useState(''); // État pour la notification
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // État pour gérer les messages d'erreur
  const navigate = useNavigate(); // Hook pour la redirection
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(''); // Réinitialiser le message d'erreur
    
    try {
      const response = await axios.post('http://localhost:8000/token', {
        username, // Utiliser le champ username
        password,
      });
      setNotification('Connexion réussie !');

      // Sauvegarder le token JWT et les identifiants dans le stockage local pour les futures requêtes
      localStorage.setItem('token', response.data.access_token);
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);


      console.log('Username:', username);
      console.log('Password:', password);

      // Rediriger l'utilisateur vers la page principale après la connexion
      setTimeout(() => {
        navigate('/chatbot');
      }, 1200);
    } catch (error) {
      console.error('Erreur de connexion :', error.response?.data.detail || error.message); // Afficher l'erreur
      setErrorMessage('Nom d\'utilisateur ou mot de passe incorrect'); // Mettre à jour le message d'erreur
    }

  };

  return (
    <div className='login-container'>
      <div className="login-wrapper">
        <div className="Logo">
          <img src={logo} alt="logo d'IVAN" />
        </div>
        <div className="container">
          <h2>Connexion</h2>
          {notification && <div className="notification">{notification}</div>} {/* Affichage de la notification */}
          {errorMessage && <p className="error-message">{errorMessage}</p>} {/* Afficher le message d'erreur */}
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

            <label htmlFor="password">Mot de passe :</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button type="submit" className='submitAuth'>Se connecter</button>
          </form>
          <p>
            Pas encore inscrit? <a href="/register">S'inscrire</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
