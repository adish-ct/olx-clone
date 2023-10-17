import React, { useContext } from 'react';

import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { Link, useNavigate } from 'react-router-dom';
import { BiUserCircle } from 'react-icons/bi';
import { AuthContext } from '../../store/Context';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase-config';


function Header() {

  const navigate = useNavigate()
  const { user, setUser } = useContext(AuthContext)
  console.log();

  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null)
      navigate('/')
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage ">
          {
            user ? <div className='d-flex gap-2'> <span> {user.reloadUserInfo.displayName} </span> <span onClick={logout}> Logout </span></div>
              :
              <Link to='/login' className='link-item' > <span><BiUserCircle className='user-logo' /></span> <span>Login</span></Link>
          }

        </div>

        <div className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span>SELL</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
