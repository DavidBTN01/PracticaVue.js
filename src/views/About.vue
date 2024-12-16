<template>
  <v-container>
    <v-card class="mx-auto" max-width="800" outlined>
      <v-card-title class="text-h5 font-weight-bold deep-red--text">
        Acerca del Proyecto Vue.js
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        <p>
          Este proyecto es un ejercicio demostrativo diseñado para explorar y entender
          los principales elementos y funcionalidades del framework
          <strong>Vue.js</strong>. La aplicación está orientada a ofrecer una
          experiencia práctica en el desarrollo de interfaces dinámicas y reactivas.
        </p>
        <p>
          A través de este proyecto, se abordan conceptos fundamentales de Vue.js,
          incluyendo:
        </p>
        <ul>
          <li>Creación y reutilización de <strong>componentes</strong>.</li>
          <li>Gestión de datos con la directiva <code>v-model</code>.</li>
          <li>Comunicación entre componentes mediante <strong>props</strong> y <strong>eventos</strong>.</li>
          <li>Implementación de navegación utilizando <strong>Vue Router</strong>.</li>
        </ul>
        <p>
          Este proyecto tiene como objetivo proporcionar un ejemplo funcional y
          práctico que sirva como base para el desarrollo de aplicaciones más
          complejas con Vue.js.
        </p>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'About_View',
};
</script>

<style scoped>
.deep-red--text {
  color: #6F2B45; /* Color rojo oscuro */
}

p {
  line-height: 1.6;
  font-size: 1.1rem;
  color: #333;
}

ul {
  margin-left: 20px;
}

li {
  margin: 8px 0;
}
</style>
