import React from 'react';
import Product from './Product';

const Home = () => {
  return (
    <div className='home'>
      <img
        className='home_image'
        src='https://images-eu.ssl-images-amazon.com/images/G/08/digital/video/gateway/placement/launch/MyleneFarmer/MYLEN_2020_GWBleedingHero_FT_COVIDUPDATE_XSite_3000X1200_PV_fr-FR._CB404469129_.jpg'
        alt=''
      />
      <div className='home_row'>
        <Product
          id={12345}
          title='AmazonBasics'
          price={11.86}
          rating={5}
          image='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_260x260._SY608_CB442725065_.jpg'
        />
        <Product
          id={23445}
          title='Shop by Category'
          price={11.86}
          rating={5}
          image='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_2x._SY608_CB432774322_.jpg'
        />
      </div>
      <div className='home_row'>
        <Product
          id={87678}
          title='Best Sellers in Kitchen'
          price={11.86}
          rating={5}
          image='https://m.media-amazon.com/images/I/71wvIZCRZ1L._AC_SY400_.jpg'
        />
        <Product
          id={90878}
          title='Best Sellers in Kitchen'
          price={11.86}
          rating={5}
          image='https://m.media-amazon.com/images/I/61UZTulTRgL._AC_SY400_.jpg'
        />
        <Product
          id={23418}
          title='Men Dress Shirts'
          price={11.86}
          rating={5}
          image='https://m.media-amazon.com/images/I/91rQEZWc8NL._AC_SY400_.jpg'
        />
      </div>
      <div className='home_row'>
        <Product
          id={87908}
          title='Amazon Top Sellers'
          price={11.86}
          rating={5}
          image='https://m.media-amazon.com/images/I/61z5oOk5fzL._AC_SY400_.jpg'
        />
      </div>
    </div>
  );
};

export default Home;
