<template>
    <v-container>
      <h1>Lista de Tareas</h1>
      <v-form @submit.prevent="addTask">
        <v-text-field
          v-model="newTask"
          label="Nueva Tarea"
          :rules="[rules.required]"
          required
        ></v-text-field>
        <v-btn type="submit" color="primary">Agregar Tarea</v-btn>
      </v-form>
      <v-list>
        <v-list-item
          v-for="(task, index) in tasks"
          :key="index"
          class="task-item"
        >
          <v-list-item-content>
            {{ task }}
          </v-list-item-content>
          <v-list-item-action>
            <v-btn icon @click="removeTask(index)">
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
      </v-list>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        newTask: '',
        tasks: [],
        rules: {
          required: value => !!value || 'Este campo es obligatorio',
        }
      };
    },
    methods: {
      addTask() {
        if (this.newTask.trim() !== '') {
          this.tasks.push(this.newTask);
          this.newTask = '';
        }
      },
      removeTask(index) {
        this.tasks.splice(index, 1);
      }
    }
  };
  </script>
  
  <style scoped>
  .task-item {
    display: flex;
    justify-content: space-between;
  }
  </style>
  