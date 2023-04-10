import React from 'react';
import "./FeaturedProducts.scss";
import Card from '../Card/Card';

const FeaturedProducts = ({type}) => {

    const data = [
        {
            id: 1,
            img:"https://images.pexels.com/photos/5119862/pexels-photo-5119862.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img2:"https://images.pexels.com/photos/797519/pexels-photo-797519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title:"T-shirt",
            isNew:true,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 2,
            img:"https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title:"Coat",
            isNew:true,
            oldPrice: 19,
            price: 12, 
        },
        {
            id: 3,
            img:"https://images.pexels.com/photos/5054537/pexels-photo-5054537.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title:"Skirt",
            isNew:true,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 4,
            img:"https://images.pexels.com/photos/694424/pexels-photo-694424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title:"Hat",
            isNew:true,
            oldPrice: 19,
            price: 12,
        },

    ];


  return (
    <div className='featuredProducts'>
        <div className="top">
            <h1>{type} products</h1>
            <p>
                It is a device mainly used for a voice call. Presently technological advancements 
                have made our life easy. Today, with the help of a mobile phone wecan easily talk
                or video chat with anyone across the globe by just moving our fingers.
            </p>
        </div>
        <div className="bottom">
            {data.map(item=>(
                <Card item={item} key={item.id}/>
            ))}
        </div>
    </div>
  )
}

export default FeaturedProducts