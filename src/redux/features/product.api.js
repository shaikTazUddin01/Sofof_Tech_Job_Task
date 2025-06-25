import { baseApi } from "../api/baseApi";

export const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "product.json",
    }),
    getSingleProduct: builder.query({
      async queryFn(id, _, __, baseQuery) {
        const res = await baseQuery("product.json");
        if (res.error) return { error: res.error };

        const product = res.data.find((item) => item.id === id);
        return { data: product || null };
      },
    }),
  }),
});

export const { useGetProductsQuery, useGetSingleProductQuery } = productApi;
