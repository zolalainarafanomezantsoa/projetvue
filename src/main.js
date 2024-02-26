import { createApp } from 'vue'; // Importez createApp à partir de vue
import App from './App.vue'; // Importez votre composant App
import router from './router'; // Si vous utilisez vue-router, importez le router ici

// Configurer Vue.config.productionTip si nécessaire
const app = createApp(App); // Créez votre application en utilisant createApp et votre composant App

// Utilisez app.use() pour installer des plugins ou des fonctionnalités supplémentaires si nécessaire
// Si vous utilisez vue-router, vous pouvez l'installer avec app.use() ici
app.use(router);

// Montez votre application à l'élément avec l'ID 'app' dans votre fichier HTML
app.mount('#app');
