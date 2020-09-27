import React from 'react';
import StarRateIcon from '@material-ui/icons/StarRate';
import { useStateValue } from '../context/StateProvider';

const Product = ({ id, title, price, rating, image }) => {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    // Add item to basket
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id,
        title,
        image,
        price,
        rating,
      },
    });
  };
  return (
    <div className='product'>
      <div className='product_info'>
        <p>{title}</p>
        <p className='product_price'>
          <small>€</small>
          <strong>{price}</strong>
        </p>
        <div className='product_rating'>
          {Array(rating)
            .fill()
            .map((_) => (
              <StarRateIcon />
            ))}
        </div>
      </div>

      <img src={image} alt={title} />
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
};

export default Product;
