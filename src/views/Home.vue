<template>
  <v-container class="text-center mt-10">
    <v-row justify="center">
      <v-col cols="12" md="8">
        <h1 class="font-weight-bold">Bienvenido a Vue.js</h1>
        <p class="mt-4">
          Vue.js es un framework progresivo para la construcción de interfaces de usuario. Es altamente adaptable, lo que permite integrarlo en proyectos existentes de forma gradual.
        </p>
        <p>
          En esta aplicación, aprenderás a utilizar las propiedades más importantes de Vue.js, como el manejo de datos reactivos, componentes reutilizables, y su potente sistema de enrutamiento.
        </p>
        <v-divider class="my-6"></v-divider>
        <!-- Imágenes ilustrativas -->
        <v-row>
          <v-col cols="12" md="6">
            <v-img 
              src="https://vuejs.org/images/logo.png" 
              max-height="200" 
              contain 
              alt="Logo Vue.js"
            ></v-img>
            <p class="mt-2">Logo oficial de Vue.js</p>
          </v-col>
          <v-col cols="12" md="6">
            <v-img 
              src="../assets/vue_components.png" 
              max-height="1000" 
              contain 
              alt="Componentes Vue.js"
            ></v-img>
            <p class="mt-2">Diagrama representativo de los componentes</p>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: 'Home_View',
};
</script>

<style scoped>
h1 {
  color: #500924;
}

ul {
  list-style-type: disc;
  margin-left: 20px;
}
</style>
