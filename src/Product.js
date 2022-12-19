import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, useParams} from "react-router-dom";

fuction Products() {
    const [data, setData] = useState([]);
    const params = useParams();
    useEffect (() =>{
        fetchProduct()
    }, []);

    fuction fetchProduct(){
        axios
        .get(
            'https://shoppingapiacme.herokuapp.com/shopping/?id=${params.id}'
        )
        .then((res) =>{
            setData(res.data);
        })
        .catch((err) => console.log(err));
    }

    return (
        <div>
            {data.map((item) => {
                return(
                    <div className='product-container' key={item.id}>
                        <div>
                            <img className='prod-image' src={item.image} alt=''/>
                        </div>
                        <div>
                            <h1 className='brand'>{item.brand}</h1>
                            <h2>{item.item}</h2>
                            <p>{item.descriptio}</p>
                            <p><strong>Price:</strong>{item.price}</p>
                            <p><strong>Color::</strong>{item.color}</p>
                            <link className='btn' to={'/'}>Back</link>
                        </div>
                        </div>
                );
            })}
        </div>
    );
}
export default Product;