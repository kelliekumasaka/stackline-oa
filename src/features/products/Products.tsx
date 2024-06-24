import { FC } from "react"
import { useGetProductsQuery } from "./productsApiSlice"

export const Products: FC = () => {
    const { data, isError, isLoading, isSuccess } = useGetProductsQuery()

    if (isError) {
        return (
            <div>
            <h1>There was an error!!!</h1>
            </div>
        )
    }

    if (isLoading) {
        return (
            <div>
            <h1>Loading...</h1>
            </div>
        )
    }
    
    if (isSuccess) {
        console.log(data.default)

        return (
            <div>
                {data.default.map(product => {
                    return <div>{product.brand}</div>
                })}
            </div>
        )
    }
}