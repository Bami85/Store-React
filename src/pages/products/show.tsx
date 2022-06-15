import { useState } from 'react'
import {useSearchParams} from 'react-router-dom'
import Card from '../../components/CardComponent'
import products from '../../data/ProductsData'
import ProductData from '../../data/ProductsData'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Button from '@mui/material/Button';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const data = ProductData

function ProductShow() {
  // const [searchParams , setSearchParams] = useSearchParams();
  // const param = searchParams.get('id');
  // let product;
  // for(const x in ProductData){
  //   if(ProductData[x].id == parseInt(param)){
  //        product = ProductData[x]

  //   }
  // }
  const product = data[0]
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Item>
          <img src={data[0].image[0]} alt="" style={{width:"100%"}}/>
          <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
          </Item>
        </Grid>
        <Grid item xs={8}>
          <Item>
            <h1>Product Title</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse eum illum cum impedit ab! Voluptatem, explicabo culpa? Labore quibusdam temporibus veritatis, exercitationem sed architecto ex nulla fugit cumque optio natus totam illo aliquid, recusandae quia vitae praesentium aut in veniam tempora accusamus omnis! Facere et officiis enim qui iste rerum perspiciatis debitis facilis sequi magnam quo illum minus natus ipsam reiciendis amet dolorum distinctio laudantium error, deleniti rem saepe. Excepturi aperiam ducimus adipisci omnis. Ut nemo necessitatibus non cumque repellat aspernatur sequi, molestiae temporibus libero rerum atque quidem doloribus quos, deleniti tenetur adipisci a eius officia iusto rem. Quo, tenetur?</p>
            <Button variant="outlined" href="#outlined-buttons">
  Add to cart
</Button>
          </Item>
        </Grid>

      </Grid>
    </Box>
  );
}
const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
  },
];
export default ProductShow
