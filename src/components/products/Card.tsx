import React , {useContext} from 'react';
import { CartContext } from '../../context/cart-context';


import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import {Link} from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';



export default function MUICard(props) {
  const [cartItems,setCartItems] = useContext(CartContext)
  // Add To Cart Event
  const addToCart = () => {
    const product = {
      id : props.id,
      image : props.image[0],
      title : props.title,
      quantity : 1,
      price : props.discountPrice
    }
    
    cartItems.map((item)=>{
      if(item.id == props.id){
        setCartItems((currentState) => {
          currentState.map((item)=>{
            if(item.id == props.id){
              console.log('item')
              item.quantity += 1;
              console.log(item)
            }
          })
          return [...currentState]
        })
      } else {
        setCartItems((currentState) => {
          return [...currentState,product]
        })
      }
    })

    if(cartItems.length == 0){
      setCartItems((currentState) => {
        return [...currentState,product]
      })
    }
  
  
  }
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={props.image[0]}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" className="card-title">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <del>${props.price}</del>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <span>${props.discountPrice}</span>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={'show?slug='+props.slug}>
          <Button size="small" color="primary">
            Show More...
          </Button>
        </Link>
        <ShoppingCartIcon onClick={addToCart}></ShoppingCartIcon>

      </CardActions>
    </Card>
  );
}
