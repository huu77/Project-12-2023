import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { InitSort } from "./Main/Body";
import {
  CreateNew,
  createProduct,
  deteleProduct,
  updateProduct,
} from "../../../database/product";
import { v4 as uuidv4 } from "uuid";

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  active: boolean;
  createdAt: string;
  updatedAt: string;
  ProductImage: [];
}

interface ProductsType {
  products: Product[];
  isLoading: boolean;
  error: any;
}

const initialState: ProductsType = {
  products: [],
  isLoading: false,
  error: null,
};

// createThunk
export const deleteItem = createAsyncThunk(
  "products/deleteProduct",
  async (id) => {
    try {
      const response = await deteleProduct(id);
      return id;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);
interface UpdateItemPayload {
  id: string | number;
  data: Pick<Product, "name" | "price" | "description" | "active">;
}
// update
export const updateItem = createAsyncThunk(
  "products/updateProduct",
  async (payload: UpdateItemPayload) => {
    try {
      const { data, id } = payload;
      const response = await updateProduct(data, id);
      return payload;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);
// create product

export const createItem = createAsyncThunk(
  "products/createProduct",
  async (data: CreateNew) => {
    try {
      const response = await createProduct(data);

      const covertData: Product = {
        id: Math.floor(Math.random() * 10000),
        name: data.name,
        price: data.price,
        description: data.description,
        active: true,
        createdAt: new Date().toString(),
        updatedAt: new Date().toString(),
        ProductImage: [],
      };
      // console.log("convertData",covertData);

      return covertData;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);
// end createThunk
// slice
const ProductsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getAllProductsStart: (state) => {
      state.isLoading = true;
    },
    getAllProductsSuccess: (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
    },
    getAllProductsFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(deleteItem.fulfilled, (state, action) => {
        // Handle the state changes after the successful completion of deleteItem
        console.log("Delete item fulfilled:", action.payload);
        const itemIdToRemove = action.payload;
        if (itemIdToRemove !== undefined) {
          state.products = state.products.filter(
            (item) => item.id !== itemIdToRemove
          );
        }
      })
      
      .addCase(createItem.fulfilled, (state, action) => {
        state.products = [action.payload, ...state.products];
      })      
      .addCase(updateItem.fulfilled, (state:ProductsType, action:PayloadAction<UpdateItemPayload>) => {
        const { data, id } = action.payload;
        console.log(data);
        
        state.products = state.products.map((item:Product) => {
          if (item.id === id) {
            const isDifferent = item.active !== data.active;
            item = { ...item, ...data };
            if (isDifferent) {
              return null;
            }
          }
      
          return item;
        });
      
        state.products = state.products.filter((item)=> item !== null)
      });
      
  },
});

export const getAllProducts = (data: any) => async (dispatch: any) => {
  try {
    dispatch(ProductsSlice.actions.getAllProductsStart());

    dispatch(ProductsSlice.actions.getAllProductsSuccess(data));
  } catch (error) {
    dispatch(ProductsSlice.actions.getAllProductsFailure(error));
  }
};

export default ProductsSlice.reducer;
