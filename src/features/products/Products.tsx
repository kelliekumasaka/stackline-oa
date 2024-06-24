import { FC } from "react"
import { useGetProductsQuery } from "./productsApiSlice"
import Paper from '@mui/material/Paper';
import { Grid } from "@mui/material";

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
            <Grid container>
                <Grid item>

                    <Paper>
                        {
                            data.map(product => {
                                return (
                                    <div key={product.id}>
                                        <img src={product.image}  alt={product.subtitle} />
                                        <h3>{product.title}</h3>
                                        <span>{product.subtitle}</span>
                                    </div>
                                )
                            })
                        }
                    </Paper>        
                </Grid>
            </Grid>
        )
    }
}