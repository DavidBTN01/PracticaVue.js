<template>
  <v-container>
    <!-- Table for displaying products -->
    <v-row>
      <v-col cols="12" class="text-right">
        <v-btn color="primary" @click="openDialog" small>
          <v-icon>mdi-plus</v-icon> Agregar Producto
        </v-btn>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-data-table
          :headers="headersProducts"
          :items="products"
          :items-per-page="10"
          item-key="name"
          class="elevation-1"
        >
          
          <template v-slot:[`item.actions`]="{ item }">
            <v-icon small @click="editProduct(item)">mdi-pencil</v-icon>
            <v-icon small @click="deleteProduct(item.id)">mdi-delete</v-icon>
          </template>
        </v-data-table>
      </v-col>
    </v-row>

    <!-- Product Form Dialog -->
    <v-dialog v-model="dialog" max-width="500px">
      <v-card>
        <v-card-title>{{
          isEdit ? "Editar Producto" : "Nuevo Producto"
        }}</v-card-title>
        <v-card-text>
          <AddProductForm
            :product-to-edit="isEdit ? form : null"
            :categories="categories"
            @productAdded="handleProductAdded"
            @productUpdated="handleProductUpdated"
            @closeForm="closeForm"
          />
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import {
  fetchProducts,
  fetchCategories,
  deleteProduct,
} from "../api/inventoryApi";
import AddProductForm from "./AddProductForm.vue"; // Importa AddProductForm

export default {
  data() {
    return {
      products: [],
      categories: [],
      headersProducts: [
        { title: "No.", value: "id", align: "start" },
        { title: "Nombre", value: "name", align: "start" },
        { title: "Descripción", value: "description", align: "start" },
        { title: "Precio", value: "price", align: "start" },
        {
          title: "Cantidad en inventario",
          value: "stock_quantity",
          align: "start",
        },
        { title: "Categoría", value: "category", align: "start" },
        {
          title: "Acciones",
          value: "actions",
          align: "center",
          sortable: false,
        },
      ],
      loading: true,
      dialog: false,
      isEdit: false,
      form: {
        id: null,
        name: "",
        description: "",
        price: "",
        stock_quantity: "",
        category_name: "",
      },
    };
  },
  created() {
    this.loadProducts();
    this.loadCategories();
  },
  methods: {
    async loadProducts() {
      try {
        this.loading = true;
        const data = await fetchProducts();
        this.products = data;
        console.log("ProductosTabla: ", this.products);
        console.log("Headers:", this.headersProducts);
      } catch (error) {
        console.error("Error loading products:", error);
      } finally {
        this.loading = false;
      }
    },
    async loadCategories() {
      try {
        const data = await fetchCategories();
        this.categories = data;
      } catch (error) {
        console.error("Error loading categories:", error);
      }
    },
    openDialog() {
      this.isEdit = false;
      this.form = {
        id: null,
        name: "",
        description: "",
        price: "",
        stock_quantity: "",
        category_name: "",
      };
      this.dialog = true;
    },
    editProduct(item) {
      this.isEdit = true;
      this.form = { ...item };
      this.dialog = true;
    },

    handleProductAdded() {
      this.dialog = false;
      this.loadProducts(); // Refresh the product list
    },
    handleProductUpdated() {
      this.dialog = false;
      this.loadProducts(); // Refresh the product list
    },

    closeForm() {
      this.dialog = false;
    },
    async deleteProduct(productId) {
      const confirm = window.confirm(
        "¿Estás seguro de eliminar este producto?"
      );
      if (confirm) {
        try {
          await deleteProduct(productId);
          this.loadProducts(); // Refresh the product list
        } catch (error) {
          console.error("Error deleting product:", error);
        }
      }
    },
  },
  components: {
    AddProductForm,
  },
};
</script>

<style scoped>
.v-data-table th {
  text-transform: uppercase;
}
</style>
