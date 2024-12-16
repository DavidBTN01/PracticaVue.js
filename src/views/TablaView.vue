<template>
    <div id="app">
      <h1>Formulario Reactivo</h1>
      <v-form>
        <v-text-field
          label="Nombre"
          v-model="name"
          :rules="[rules.required]"
          required
        ></v-text-field>
        <v-text-field
          label="Edad"
          v-model="age"
          type="number"
          :rules="[rules.required, rules.age]"
          required
        ></v-text-field>
      </v-form>
      <div>
        <h2>Salida en Vivo:</h2>
        <p>Nombre: {{ name }}</p>
        <p>Edad: {{ age }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: '',
        age: null,
        rules: {
          required: value => !!value || 'Este campo es obligatorio',
          age: value => (value > 0 && value < 120) || 'Edad no válida'
        }
      };
    }
  };
  </script>
  
  <style scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    text-align: center;
    margin-top: 60px;
  }
  </style>
  