<template>
    <div class="login-container">
      <h2>Connexion</h2>
      <form @submit.prevent="login" class="login-form">
        <input type="text" v-model="username" placeholder="Nom d'utilisateur" class="login-input" />
        <input type="password" v-model="password" placeholder="Mot de passe" class="login-input" />
        <div class="button">
          <div>
          <button type="submit" class="login-button">Se connecter</button>
        </div>
        <div>
          <button type="submit" class="login-button">Mot de passe oublié</button>
        </div>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
    return {
      username: '',
      password: '',
      error: false
    };
  },
    methods: {
    login() {
      // Vérification des informations de connexion (simulée pour cet exemple)
      if (this.username === 'utilisateur' && this.password === '10101010') {
        // Authentification réussie
        // Stockez les informations d'authentification dans le localStorage
        localStorage.setItem('loggedIn', true);
        // Redirigez l'utilisateur vers la page du tableau de bord ou toute autre page autorisée
        this.$router.push('/list');
      } else {
        // Authentification échouée, affichez un message d'erreur
        this.error = true;
      }
    }
  }
};

  </script>
  
  <style scoped>
  .login-container {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-top: 20px;
  }
  
  .login-form {
    display: flex;
    flex-direction: column;
  }
  
  .login-input {
    margin-bottom: 15px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    margin-bottom: 25px;
  }
  
  .login-button {
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
  }
  
  .login-button:hover {
    background-color: #5613e7;
  }
  .button{
    display: flex;
  }
  </style>
  