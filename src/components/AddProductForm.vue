<template>
  <v-form @submit.prevent="handleSubmit">
    <v-text-field
      v-model="product.name"
      label="Nombre del producto"
      :rules="[rules.required]"
      required
    />
    <v-textarea
      v-model="product.description"
      label="Descripción"
      :rules="[rules.required]"
      required
    />
    <v-text-field
      v-model="product.price"
      label="Precio"
      type="number"
      :rules="[rules.required]"
      required
    />
    <v-text-field
      v-model="product.stock_quantity"
      label="Cantidad en inventario"
      type="number"
      :rules="[rules.required]"
      required
    />
    <v-select
      v-model="product.category"  
      :items="categories.map(category => category.name)" 
      label="Categoría"
      :rules="[rules.required]"
      required
    />

    <v-btn type="submit" color="primary">
      {{ isEditMode ? 'Actualizar Producto' : 'Agregar Producto' }}
    </v-btn>
    <v-btn text @click="$emit('closeForm')">Cancelar</v-btn>
  </v-form>
</template>

<script>
import { fetchCategories, addProduct, updateProduct } from '../api/inventoryApi'; // Importa las funciones necesarias

export default {
  props: {
    productToEdit: {
      type: Object,
      default: null,
    },
    categories: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      product: {
        id: null,
        name: '',
        description: '',
        price: 0,
        stock_quantity: 0,
        category_name: '',  // Cambiar a category_name
      },
      localCategories: [],  // Copia local para las categorías
      rules: {
        required: value => !!value || 'Este campo es obligatorio',
      },
    };
  },
  computed: {
    isEditMode() {
      return !!this.productToEdit;
    },
  },
  watch: {
    productToEdit: {
      immediate: true,
      handler(newProduct) {
        if (newProduct) {
          this.product = { ...newProduct };
        }
      },
    },
  },
  methods: {
    // Cargar categorías de manera asincrónica
    async loadCategories() {
      try {
        const response = await fetchCategories();  // Asume que fetchCategories es la función para obtener las categorías
        
        this.localCategories = response.map(category => ({
          name: category.name,
        }));
        console.log('Categorias: ', this.localCategories);
      } catch (error) {
        console.error('Error al cargar categorías:', error);
      }
    },

    async handleSubmit() {
      if (this.isEditMode) {
        try {
          await updateProduct(this.product.id, this.product);
          this.$emit('productUpdated', this.product);
          this.$emit('closeForm');
        } catch (error) {
          console.error('Error actualizando el producto:', error);
        }
      } else {
        try {
          await addProduct(this.product); this.$emit('productAdded', this.product); this.$emit('closeForm');
        } catch (error) {
          console.error('Error agregando el producto:', error);
        }
      }
    },
  },

  // Cargar categorías cuando se monta el componente
  mounted() {
    this.loadCategories();
  },
};
</script>

<style scoped>
.v-form {
  background-color: white; /* Asegura que el formulario tenga un fondo sólido */
  padding: 20px;
  border-radius: 8px;
}
</style>
