import React from 'react';
import "./FeaturedProducts.scss";
import Card from '../Card/Card';


const FeaturedProducts = ({type}) => {

   const data = [

        {
            id: 1,
            img: "https://images.pexels.com/photos/4132651/pexels-photo-4132651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img2: "https://images.pexels.com/photos/4355702/pexels-photo-4355702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Tshirts",
            isNew:true,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 2,
            img: "https://images.pexels.com/photos/1113554/pexels-photo-1113554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Coat",
            isNew:true,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 3,
            img: "https://images.pexels.com/photos/3263460/pexels-photo-3263460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Pant",
            oldPrice: 19,
            price: 12,
        },
        {
            id: 4,
            img: "https://images.pexels.com/photos/3050943/pexels-photo-3050943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Hat",
            oldPrice: 19,
            price: 12,
        },

   ]


  return (
    <div className='featuredProducts'>
        <div className="top">
            <h1>{type} products</h1>
            <p>
                It is a device mainly used for a voice call. 
                Presently technological advancements have made our life easy.
                Today, with the help of a mobile phone
                we can easily talk or video chat with 
                anyone across the globe by just moving our fingers.
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