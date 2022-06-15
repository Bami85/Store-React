
import { useState } from 'react'
import {useSearchParams} from 'react-router-dom'
import ProductData from '../../data/ProductsData'

import {FC}from 'react'
import { Link, useParams} from 'react-router-dom';
import { Button } from '@mui/material';

import {CSSProperties} from 'react'





  
const SingleProduct = ( )=> {
  const {id}= useParams();
  let  ID = Number(id);

  const product = ProductData[ID-1]
  
  return (
    <>

    <section style={sectionStyle} key={ID} className='section product'>
  
    <img style={singleProductStyle} src={product?.image} alt={"/"}  />  
    <div style={divStyle}> 
      <h5 style={h5Style}> {product?.title}</h5>
      <p style={pStyle}>{product?.description} </p>
      <div style={priceStyle}>{product?.price}</div>
      <div>
      <button style={buttonStyle}>Add to cart</button>
      </div>
      <Link to="/Home" ><Button style={linkStyle}  color="inherit">Go to Store</Button></Link>
      </div>
    </section>
   </>
  );
};

const sectionStyle: CSSProperties = {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent:"space-around",
    marginTop:"40px"
  };

  const divStyle: CSSProperties = {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    marginLeft:"-150px"
  };
  const h5Style: CSSProperties = {
  fontSize:"3rem",
  };
  const pStyle: CSSProperties = {
    fontSize:"1.5rem",
  };
  const priceStyle: CSSProperties = {
    fontSize:"2rem",
  };

  const linkStyle: CSSProperties = {
    fontSize:"1rem",
    marginTop:"5rem"
  };


const buttonStyle: CSSProperties = {
    height: "2rem",
    width: "7rem",
    fontSize: "1rem",
    marginTop: "35px"
  };

const singleProductStyle: CSSProperties = {
    display: "flex",
    minHeight: "20em",
    minWidth: "15em"
  };
  

export default SingleProduct;




