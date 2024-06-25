import { FC } from "react"
import { useGetProductsQuery } from "./productsApiSlice"
import Paper from '@mui/material/Paper';
import { Box, Chip, Grid } from "@mui/material";
import { ProductTable } from "./ProductTable";
import { ProductGraph } from "./ProductGraph";
import styles from "./Products.module.css"

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
        return (
            <>
                {
                    data.map(product => {
                        return (
                            <Grid container px={3} py={10} spacing={2} key={product.id} >
                                <Grid item xs={3} height="900px">
                                    <Paper className={styles.paper}>
                                        <Box className= {styles.box} py={2}>
                                            <img src={product.image}  alt={product.subtitle} className={styles.image}/>
                                            <h3>{product.title}</h3>
                                            <span>{product.subtitle}</span>
                                        </Box>
                                        <Box className= {styles.box} py={2}>
                                            {product.tags.map((tag) => {
                                                return (
                                                    <Chip label={tag.toUpperCase()} className={styles.tag} />
                                                )
                                            }
                                            )}
                                        </Box>
                                    </Paper>        
                                </Grid>
                                <Grid item xs={9}>
                                    <ProductGraph sales ={product.sales}/>
                                    <ProductTable sales={product.sales}/>
                                </Grid>
                            </Grid>
                        )
                    })
                }
            </>
        )
    }
}