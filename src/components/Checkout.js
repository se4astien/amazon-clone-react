import React from 'react';
import { useStateValue } from '../context/StateProvider';
import CheckoutProduct from './CheckoutProduct';
import SubTotal from './SubTotal';

const Checkout = () => {
  const [{ basket }] = useStateValue();
  return (
    <div className='checkout'>
      <div className='checkout_left'>
        <img
          className='checkout_ad'
          src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg'
          alt=''
        />
        {basket.length === 0 ? (
          <div>
            <h2 className='checkout_title'>Your shopping basket is empty</h2>
            <p>
              You have no item in your basket. Please click on "Add product" to
              fill your basket.
            </p>
          </div>
        ) : (
          <div>
            <h2 className='checkout_title'>Your shopping basket</h2>
            {basket.map((item) => (
              <CheckoutProduct key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
      {basket.length > 0 && (
        <div className='checkout_right'>
          <SubTotal />
        </div>
      )}
    </div>
  );
};

export default Checkout;
