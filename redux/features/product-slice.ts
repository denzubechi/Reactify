import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

import backendUrl from '@/app/config/api';

// Define the type for a product
interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  // Add other properties if needed
}

// Define the type for the state managed by the product slice
interface ProductState {
  products: Product[];
  loading: boolean;
  error: string | null;
}

// Initial state
const initialState: ProductState = {
  products: [],
  loading: false,
  error: null,
};

// Fetch products asynchronously
export const fetchProducts = createAsyncThunk<Product[], void, { rejectValue: string }>(
  'products/fetchProducts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get<Product[]>(`${backendUrl}/reartify/products`);
      return response.data;
    } catch (error:any) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Product slice
export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    // Other reducers can be defined here if needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string; // Casting action.payload to string
      });
  },
});

// Export actions
export const { /* Other actions if needed */ } = productSlice.actions;

// Export reducer
export default productSlice.reducer;
