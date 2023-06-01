import React from 'react';
import "./Cart.scss";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const Cart = () => {

    const data =[
        {
            id: 1,
            img: "https://images.pexels.com/photos/1710481/pexels-photo-1710481.jpeg?auto=compress&cs=tinysrgb&w=600",
            img2: "https://images.pexels.com/photos/3026026/pexels-photo-3026026.jpeg?auto=compress&cs=tinysrgb&w=600",
            title: "iPhone",
            desc: "iPhone",
            isNew:true,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 2,
            img: "https://images.pexels.com/photos/3771084/pexels-photo-3771084.jpeg?auto=compress&cs=tinysrgb&w=600",
            title: "Tablet",
            desc: "Tablet",
            isNew:true,
            oldPrice: 19,
            price: 12,
        },
    ]

  return (
    <div className='cart'>
        <h1>Product in your cart</h1>
        {data?.map(item=>(
            <div className="item" key={item.id}>
                <img src={item.img} alt="" />
                <div className="details">
                    <h1>{item.title}</h1>
                    <p>{item.desc?.substring(0,100)}</p>
                    <div className="price"> 1 x ${item.price}</div>
                </div>
                <DeleteOutlineIcon className='delete'/>
            </div>
        ))}
        <div className="total">
            <span>SUBTOTAL</span>
            <span>$152</span>
        </div>  
        <button>PROCEED TO CHECKOUT</button>
        <span className="reset">Reset Cart</span>
    </div>
  );
};

export default Cart