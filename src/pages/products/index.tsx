import { useState } from 'react'
import Card from '../../components/Card2Component'
import ProductData from '../../db/ProductsData'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
const data = ProductData

function ProductIndex() {

  return (
    <Box sx={{ width: '100%' }}>
      <Grid container spacing={{ xs: 1, md: 1 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Card slug={data[0].slug} image={data[0].image} 
          title={data[0].title} description={data[0].description}/>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
        <Card slug={data[1].slug} image={data[1].image} 
          title={data[1].title} description={data[1].description}/>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
        <Card slug={data[2].slug} image={data[2].image} 
          title={data[2].title} description={data[2].description}/>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
        <Card slug={data[3].slug} image={data[3].image} 
          title={data[3].title} description={data[3].description}/>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ProductIndex
