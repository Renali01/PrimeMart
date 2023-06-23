import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import LocationOnIcon from '@mui/icons-material/LocationOn';


function Header() {
  return (
    <div className='header'>

      <img
        className="header__logo"
        src='https://pngimg.com/uploads/amazon/amazon_PNG11.png'
      />

      <LocationOnIcon className="header__locationIcon"/>

      <div className="header__optionWithIcon">
        <span className='header__optionLineOne'>Hello</span>
          <span className='header__optionLineTwo'>Select your address</span>
      </div>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <img
        className="header__flag"
        src='https://pngimg.com/uploads/flags/flags_PNG14666.png'>
      </img>
      
      <div className="header__optionWithIcon">
        <div className="header__language">EN</div>
      </div>

      <div className="header__nav">

        <div className="header__option">
          <span className='header__optionLineOne'>Hello, sign in</span>
          <span className='header__optionLineTwo'>Accounts & Lists</span>
        </div>

        <div className="header__option">
          <span className='header__optionLineOne'>Returns</span>
          <span className='header__optionLineTwo'>& Orders</span>
        </div>

        <div className="header__optionBasket">
          <AddShoppingCartIcon />
          <span className="header__optionLineTwo header__basketCount">0</span>
        </div>

    </div>
  </div>


  );
}

export default Header;
