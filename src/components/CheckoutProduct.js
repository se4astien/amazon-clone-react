import React from 'react';
import StarRateIcon from '@material-ui/icons/StarRate';
import { useStateValue } from '../context/StateProvider';

const CheckoutProduct = ({ item }) => {
  const [{ basket }, dispatch] = useStateValue();

  console.log(item.id, item.title, item.image, item.rating, item.price);

  const removeProduct = (id) => {
    // remove item from basket
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: item.id,
    });
  };

  return (
    <div className='checkout-product'>
      <img className='checkout-product_image' src={item.image} alt='' />
      <div className='checkout-product_info'>
        <p className='checkout-product_title'>{item.title}</p>
        <p className='checkout-product_price'>
          <strong>{item.price}</strong>
          <small>€</small>
        </p>

        <div className='checkout-product_rating'>
          {Array(item.rating)
            .fill()
            .map((_) => (
              <StarRateIcon />
            ))}
        </div>

        <button onClick={removeProduct}>Remove from basket</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
