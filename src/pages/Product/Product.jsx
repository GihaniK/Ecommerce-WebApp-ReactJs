import React from 'react';
import { useState } from 'react';
import "./Product.scss";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';

const Product = () => {

  const [selectedImg,setSelectedImg] = useState(0)
  const [quantity,setQuantity] = useState(1)


  const images =[
    "https://images.pexels.com/photos/4645502/pexels-photo-4645502.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/13367286/pexels-photo-13367286.jpeg?auto=compress&cs=tinysrgb&w=600",
  ];


  return (
    <div className='product'>
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={e=>setSelectedImg(0)}/>
          <img src={images[1]} alt="" onClick={e=>setSelectedImg(1)}/>
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>Title</h1>
        <span className='price'>$199</span>
        <p>This space is a great opportunity to give a full background on who you are, 
            what you do and what your site has to offer. Your users are genuinely interested in 
            learning more about you, so don't be afraid to share personal anecdotes to create a
             more friendly quality.
        </p>
        <div className="quantity">
          <button onClick={()=>setQuantity((prev)=>prev === 1 ? 1 : prev - 1)}>-</button>
        {quantity}
          <button onClick={()=>setQuantity((prev)=>prev+1)}>+</button>
        </div>
        <button className='add'>
            <AddShoppingCartIcon/> ADD TO CART
        </button>
        <div className="links">
          <div className="item">
            <FavoriteBorderIcon/>ADD TO WISH LIST
          </div>
          <div className="item">
            <BalanceIcon/>ADD TO COMPARE
          </div>
        </div>
        <div className="info">
          <span>Ram: 8GB</span>
          <span>Product Type: iPhone</span>
          <span>Tag: Tshirt, Women, Top</span>
        </div>
        <hr />
        <div className="info">
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAL INFORMATION</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
    </div>
  );
};

export default Product