import axiosInstance from './axiosConfig';

export const fetchProducts = async () => {
  try {
    const response = await axiosInstance.get('/?api=products'); // Ruta para obtener productos
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export const fetchCategories = async () => {
  try {
    const response = await axiosInstance.get('/?api=categories'); // Ruta para obtener productos
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export const addProduct = async (product) => {
  try {
    const response = await axiosInstance.post('/?api=products', product); // Ruta para agregar producto
    return response.data;
  } catch (error) {
    console.error('Error adding product:', error);
    throw error;
  }
};


export const updateProduct = async (productId, updatedProduct) => {
    try {
      const response = await axiosInstance.put(`/?api=products&id=${productId}`, updatedProduct); // Función para actualizar un producto
      return response.data;
    } catch (error) {
      console.error('Error updating product:', error);
      throw error;
    }
  };

export const deleteProduct = async (productId) => {
  try {
    const response = await axiosInstance.delete(`/?api=products/${productId}`); // Ruta para eliminar producto
    return response.data;
  } catch (error) {
    console.error('Error deleting product:', error);
    throw error;
  }
};
