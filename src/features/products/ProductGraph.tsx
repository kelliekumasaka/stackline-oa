import { LineChart } from '@mui/x-charts/LineChart';
import { FC } from 'react';
import { Sale } from './productsApiSlice';
import dayjs from "dayjs";


type ProductGraphProps = {
    sales: Sale[]
}

export const ProductGraph: FC<ProductGraphProps> = ({ sales }) => {
    const retailSales = sales.map(p => p.retailSales)
    const wholesaleSales = sales.map(p => p.wholesaleSales) 
    const salesDates = sales.map(p => new Date(p.weekEnding.replace(/-/g, '\/')))

    return (
        <LineChart 
            xAxis={[{
                // dataKey: 'weekEnding',
                label: 'Month',
                data: salesDates,
                scaleType: "time",
                valueFormatter: (value) => dayjs(value).format('MMM D YYYY')
            }]}
            series={[
                {
                    data: retailSales,
                    label: 'Retail Sales'
                },{
                    data: wholesaleSales,
                    label: 'Wholesale Sales'
                }
            ]}
            height={400}
            // dataset={sales}
        />
    )
}
