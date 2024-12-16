<template>
  <v-app>
    <v-app-bar app color="#6F2B45" dark>
      <v-img
        src="./assets/logo.png" 
        alt="Logo"
        max-width="40"
        class="mr-3"
      ></v-img>
      <v-toolbar-title>Proyecto de ejemplo</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text to="/" router>Home</v-btn>
      <v-btn text to="/inventory" router>Inventario</v-btn>
      <v-btn text to="/Reactive" router>Reactivo</v-btn>
      <v-btn text to="/list" router>Lista de Tareas</v-btn>
      <v-btn text to="/shopping" router>Compras</v-btn>
      <v-btn text to="/about" router>Acerca de</v-btn>
    </v-app-bar>

    <v-main>
      <v-container class="mt-5" style="background-color: #f4f4f4; padding: 20px; border-radius: 10px;">
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
body {
  margin: 0;
  font-family: 'Roboto', sans-serif;
  background-color: #FBE8E4; 
}

.v-btn {
  font-weight: bold;
  text-transform: uppercase;
}
</style>
