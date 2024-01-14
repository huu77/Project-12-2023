import instance from "./axios";
interface Sort {
  sortBy: "name" | "price" | "createdAt";
  sortType: "asc" | "desc";
}
interface InitSort extends Sort {
  searchTerm: string;
  page: number;
  active: boolean;
}

const getAllProduct = async (data: InitSort) => {
  try {
    const response = await instance.get('/products', { params: data });
      
      return response.data;
  } catch (error) {
    console.log(error);
  }
};

const getOneProduct = async (id: number | string) => {
  try {
    const response = await instance.get(`/products/${id}`);
    return response.data;
  } catch (error) {
    console.log();
  }
};

export interface CreateNew {
  name: string;
  price: number;
  description: string;
  ProductImage: string[];
}
const createProduct = async (data: CreateNew) => {
 
  instance
  .post('/products',data)
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error);
 
  });
};

export interface UpdateProduct extends Omit<CreateNew, "ProductImage"> {
  active: boolean;
}
const updateProduct = async (data: UpdateProduct, id: any) => {
 

  instance
    .put(`/products/${id}`,data)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    });

 
};

const deteleProduct = async (id:any)=>{
  console.log("id product ",id);
  
  instance
  .delete(`/products/${id}`)
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error);
 
  });
}

export { getAllProduct, getOneProduct, createProduct, updateProduct ,deteleProduct };
