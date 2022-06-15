
import { useState } from 'react'
import Card from '../components/products/Card'
import ProductData from '../data/ProductsData'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
const products = ProductData

function Home() {

  return (
    <>
     <Box  sx={{ width: '100%'}}>
      <Grid container>
        <Grid item xs={12}>
          <img src="https://www.amgad.com/images/love-perfect-banner.jpg"  style={{width:"100%"}}/>
        </Grid>
      </Grid>
    </Box>
    
  
   <Box  sx={{ width: '90%', margin: '2px'}}>
      <Grid container spacing={{ xs: 1, md: 1 }}>
        <Grid item xs={12} sm={4}>
          <img src="https://s1.1zoom.me/big0/957/Jewelry_Face_Glance_Hands_Manicure_Glamour_567437_779x1024.jpg" style={{width: "100%"}} />
        </Grid>
        <Grid item xs={12} sm={8} >
          <div style={{textAlign: "center", margin: '30px'}}>
           
            <h1 style={{fontFamily: "Arial, Helvetica, sans-serif", fontSize: "5rem"}}>Snow White</h1>
            <p>We're honored to have earned the trust of hundreds of thousands of over 2,000,000 happy customers (and growing) who chose Snow White to celebrate their engagements, once-in-a lifetime occasions, milestone moments and personal achievements with close to 5,000,000 unique pieces of jewelry. From the first sketch to the final touch, every piece Jewelry is proudly designed and handmade. Each piece you purchase supports our team of artisans who love making jewelry. We only use tarnish-resistant skin-friendly metals, and handpick every gemstone for quality, so you can wear your pieces everyday without worrying about fading colors!</p>
          </div>
        </Grid>
      </Grid>

   
    </Box>
    <Box  sx={{ width: '100%', marginTop: '30px' }}>
      <h2 style={{textAlign: "left"}}>New Products</h2>
      <Grid container rowSpacing={2} spacing={{ xs: 1, md: 1 }}>
      {
          products.map((product) => {

            return <Grid item xs={12} md={3}><Card
              key={product.id}
              id={product.id}
              price={product.price}
              discountPrice={product.discountPrice}
              slug={product.slug}
              image={product.image}
              title={product.title}
              description={product.description}
            /></Grid>

          })

        }
      </Grid>
    </Box>
    </>
  )
}


export default Home
