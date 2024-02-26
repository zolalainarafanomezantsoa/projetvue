<template>
  <div id="nav">

    <router-link to="/login">Se Connecter</router-link>

    |
  
    <router-link to="/list">Liste des élément</router-link>


    <router-view/>

  </div>


</template>

<style>
#app {
  font-family: Arial, sans-serif;
  text-align: center;
  color:rgb(10, 10, 10);
 
}
header {
  background-color: #333;
  padding: 20px;
  color: white;
}
main {
  padding: 20px;
}
</style>
