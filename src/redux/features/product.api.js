import { baseApi } from '../api/baseApi';

export const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({ 
      query: () => 'product.json'
    })
  }),
});

export const { useGetProductsQuery } = productApi;