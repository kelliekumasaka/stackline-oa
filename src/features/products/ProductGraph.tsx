import { LineChart } from '@mui/x-charts/LineChart';
import { FC } from 'react';
import { Sale } from './productsApiSlice';
import dayjs from "dayjs";
import { Paper } from '@mui/material';
import styles from './Products.module.css'

type ProductGraphProps = {
    sales: Sale[]
}

export const ProductGraph: FC<ProductGraphProps> = ({ sales }) => {
    const retailSales = sales.map(p => p.retailSales)
    const wholesaleSales = sales.map(p => p.wholesaleSales) 
    const salesDates = sales.map(p => new Date(p.weekEnding.replace(/-/g, '\/')))

    return (
        <Paper>
            <h2 className={styles.lineH2}>Retail Sales</h2>
            <LineChart 
            
            title='Retail Sales'
                xAxis={[{
                    data: salesDates,
                    scaleType: "time",
                    valueFormatter: (value) => dayjs(value).format('MMM D'),
                }]}
                series={[
                    {
                        data: retailSales,
                        showMark:false
                    },{
                        data: wholesaleSales,
                        showMark: false
                    }
                ]}
                height={400}
                margin={{ left: 70, right: 70}}

                />
        </Paper>
    )
}
