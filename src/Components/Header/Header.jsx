import React, { useContext, useState } from 'react';

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

  const [isOpen, setIsOpen] = useState(false)
  const handleLanguage = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <Link to='/'><OlxLogo /></Link>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow />
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
        <div className="language" onClick={handleLanguage}>
          <span> ENGLISH </span>
          <div className="language-control" style={{ position: 'relative' }}>
            <Arrow />
            {isOpen && (
              <ul className="dropdown-menu" style={{
                position: 'absolute',

              }}>
                <li>Hindi</li>
                <li>Malayalam</li>
                <li>Tamil</li>
              </ul>
            )}
          </div>
        </div>
        <div className="loginPage ">
          {
            user ? <div className='d-flex gap-3'> <span> {user.reloadUserInfo.displayName} </span> <span className='link-item logout-button' onClick={logout}> Logout </span></div>
              :
              <Link to='/login' className='link-item' > <span><BiUserCircle className='user-logo' /></span> <span>Login</span></Link>
          }

        </div>

        <Link to='/create'>
          <div className="sellMenu" >
            <SellButton></SellButton>
            <div className="sellMenuContent">
              <SellButtonPlus></SellButtonPlus>
              <span>SELL</span>
            </div>
          </div>
        </Link>

      </div>
    </div>
  );
}

export default Header;
