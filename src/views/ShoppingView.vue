<template>
    <div id="app">
      <h1>Lista de Compras</h1>
      
      <v-form @submit.prevent="addItem">
        <v-text-field
          v-model="newItem"
          label="Nuevo Artículo"
          :rules="[rules.required]"
          required
        ></v-text-field>
        <v-btn type="submit" color="primary">Agregar Artículo</v-btn>
      </v-form>
  
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          class="shopping-item"
        >
          <v-list-item-content>
            {{ item }}
          </v-list-item-content>
          <v-list-item-action>
            <v-btn icon @click="removeItem(index)">
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
      </v-list>
      
      <!-- Renderizado condicional -->
      <p v-if="items.length === 0">No hay artículos en la lista.</p>
      <p v-else>Hay {{ items.length }} artículo(s) en la lista.</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        newItem: '',
        items: [],
        rules: {
          required: value => !!value || 'Este campo es obligatorio',
        }
      };
    },
    methods: {
      addItem() {
        if (this.newItem.trim() !== '') {
          this.items.push(this.newItem);
          this.newItem = '';
        }
      },
      removeItem(index) {
        this.items.splice(index, 1);
      }
    }
  };
  </script>
  
  <style scoped>
  .shopping-item {
    display: flex;
    justify-content: space-between;
  }
  </style>
  