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


