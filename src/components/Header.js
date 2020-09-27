import React from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from '../context/StateProvider';

const Header = () => {
  const [{ basket }] = useStateValue();
  return (
    <nav className='header'>
      <Link to='/'>
        <img
          className='header_logo'
          src='https://pngimg.com/uploads/amazon/amazon_PNG11.png'
          alt='Amazon logo'
        />
      </Link>

      <div className='header_search'>
        <input type='text' className='header_search-input' />
        <SearchIcon className='header_search-icon' />
      </div>

      <div className='header_nav'>
        <Link to='/login' className='header_link'>
          <div className='header_options'>
            <span>Hello Sebastien</span>
            <span>Sign In</span>
          </div>
        </Link>

        <Link to='/' className='header_link'>
          <div className='header_options'>
            <span>Returns</span>
            <span>& Orders</span>
          </div>
        </Link>

        <Link to='/' className='header_link'>
          <div className='header_options'>
            <span>Your</span>
            <span>Prime</span>
          </div>
        </Link>

        <Link to='/checkout'>
          <div className='header_option-basket'>
            <ShoppingBasketIcon />
            <span>{basket?.length}</span>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
