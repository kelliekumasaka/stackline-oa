import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

interface Review {
    customer: string
    review: string 
    score: number 
}

interface Sale {
    weekEnding: string
    retailSales: number
    wholesaleSales: number
    unitsSold: number 
    retailerMargin: number 
}

interface Product {
    id: string
    title: string 
    image: string 
    subtitle: string 
    brand: string 
    reviews: Review[]
    retailer: string 
    details: string[]
    tags: string[]
    sales: Sale[]
}

interface ProductApiRes {
    default: Product[]
}

export const productsApiSlice = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'https://stackline.com/api/v1' }), 
    reducerPath: "productsApi",
    tagTypes: ["Products"],
    endpoints: build => ({
        getProducts: build.query<Product[], void>({
            query: () => '/',
            transformResponse: (res: ProductApiRes) => res.default
        })
    })
})

export const { useGetProductsQuery } = productsApiSlice
