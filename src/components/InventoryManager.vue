<template>
  <v-container>
    <!-- Notificación -->
    <v-snackbar v-model="snackbar.show" :color="snackbar.color" timeout="3000">
      {{ snackbar.message }}
    </v-snackbar>

    <!-- Botón para mostrar el formulario de agregar productos -->
    <v-row>
      <v-col cols="12">
        <v-btn @click="showAddProductForm = !showAddProductForm" color="primary">
          {{ showAddProductForm ? 'Ocultar Formulario' : 'Agregar Producto' }}
        </v-btn>
      </v-col>
    </v-row>

    <!-- Formulario para agregar productos (visible sólo cuando showAddProductForm es true) -->
    <v-row v-if="showAddProductForm">
      <v-col cols="12">
        <AddProductForm 
          @productAdded="handleProductAdded" 
          @productUpdated="handleProductUpdated"
          :productToEdit="productToEdit"
        />
      </v-col>
    </v-row>

    <!-- Tabla de inventario -->
    <v-row>
      <v-col cols="12">
        <InventoryTable
          :products="products"
          @deleteProduct="handleDeleteProduct"
          @editProduct="handleEditProduct"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

  
  <script>
import { ref, reactive, onMounted } from 'vue';
import AddProductForm from '@/components/AddProductForm.vue';
import InventoryTable from '@/components/InventoryTable.vue';
import { fetchProducts, addProduct, deleteProduct, updateProduct } from '../api/inventoryApi';

export default {
  name: 'DashboardLayout',
  components: {
    AddProductForm,
    InventoryTable,
  },
  setup() {
    const products = ref([]);
    const productToEdit = ref(null);  // Producto a editar
    const showAddProductForm = ref(false);  // Controla la visibilidad del formulario de agregar productos
    const snackbar = reactive({
      show: false,
      message: '',
      color: 'success',
    });

    const showSnackbar = (message, color = 'success') => {
      snackbar.message = message;
      snackbar.color = color;
      snackbar.show = true;
    };

    const loadProducts = async () => {
      try {
        const response = await fetchProducts();
        console.log(response);  // Verifica la respuesta de la API
        products.value = response;
        showSnackbar('Productos cargados correctamente');
      } catch (error) {
        console.log(error);  // Verifica el error en la consola
        showSnackbar('Error al cargar productos', 'error');
      }
    };

    const handleProductAdded = async (product) => {
      try {
        const newProduct = await addProduct(product);
        products.value.push(newProduct);
        showAddProductForm.value = false; // Oculta el formulario después de agregar el producto
        showSnackbar('Producto agregado correctamente');
      } catch (error) {
        showSnackbar('Error al agregar producto', 'error');
      }
    };

    const handleProductUpdated = async (updatedProduct) => {
      try {
        await updateProduct(updatedProduct.id, updatedProduct);
        const index = products.value.findIndex(product => product.id === updatedProduct.id);
        if (index !== -1) {
          products.value[index] = updatedProduct; // Actualiza el producto en el array
        }
        showSnackbar('Producto actualizado correctamente');
      } catch (error) {
        showSnackbar('Error al actualizar producto', 'error');
      }
    };

    const handleDeleteProduct = async (id) => {
      try {
        await deleteProduct(id);
        products.value = products.value.filter((product) => product.id !== id);
        showSnackbar('Producto eliminado correctamente');
      } catch (error) {
        showSnackbar('Error al eliminar producto', 'error');
      }
    };

    const handleEditProduct = (product) => {
      productToEdit.value = { ...product }; // Crea una copia del producto a editar
      showAddProductForm.value = true; // Muestra el formulario para editar el producto
    };

    onMounted(loadProducts);

    return {
      products,
      productToEdit,
      showAddProductForm,
      snackbar,
      handleProductAdded,
      handleProductUpdated,
      handleDeleteProduct,
      handleEditProduct,
    };
  },
};
</script>
