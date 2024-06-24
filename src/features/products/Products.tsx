import { FC } from "react"
import { useGetProductsQuery } from "./productsApiSlice"
import Paper from '@mui/material/Paper';
import { Grid } from "@mui/material";
import { ProductTable } from "./ProductTable";
import { ProductGraph } from "./ProductGraph";

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
        console.log(data)

        return (
            <>
                {
                    data.map(product => {
                        return (
                            <Grid container px={3} py={10} spacing={1}>
                                <Grid item xs={3}>
                                    <Paper key={product.id}>
                                        <div>
                                            <img src={product.image}  alt={product.subtitle}/>
                                            <h3>{product.title}</h3>
                                            <span>{product.subtitle}</span>
                                        </div>
                                    </Paper>        
                                </Grid>
                                <Grid item xs={9}>
                                    <ProductTable sales={product.sales}/>
                                    <ProductGraph sales ={product.sales}/>
                                </Grid>
                            </Grid>
                        )
                    })
                }
            </>
        )
    }
}