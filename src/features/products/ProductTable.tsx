import { FC } from 'react'
import {Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@mui/material'
import type { Sale } from './productsApiSlice'

type ProductTableProps = {
    sales: Sale[]
}

export const ProductTable: FC<ProductTableProps> = ({ sales }) => {
    return (
        <Box my={2}>
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>WEEK ENDING</TableCell>
                        <TableCell>RETAIL SALES</TableCell>
                        <TableCell>WHOLESALE SALES</TableCell>
                        <TableCell>UNITS SOLD</TableCell>
                        <TableCell>RETAILER MARGIN</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {sales.map( el => (
                        <TableRow key={el.weekEnding+el.retailSales}>
                            <TableCell>{el.weekEnding}</TableCell>
                            <TableCell>{el.retailSales}</TableCell>
                            <TableCell>{el.wholesaleSales}</TableCell>
                            <TableCell>{el.unitsSold}</TableCell>
                            <TableCell>{el.retailerMargin}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        </Box>
    )
}
