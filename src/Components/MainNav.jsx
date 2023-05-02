import classes from './MainNav.module.css';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../imgs/logo.png';
import { BrowserView, MobileView } from 'react-device-detect';
import { useState } from 'react';
import burger from '../imgs/burger.svg';

const MainNav = () => {
  const [openMenu, setopenMenu] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <BrowserView>
        <nav>
          <div
            className={classes.logo}
            onClick={() => {
              navigate('/home');
            }}
          >
            <img src={logo} alt='logo' />
          </div>
          <ul>
            <li>
              <NavLink
                to='/home'
                className={(navData) =>
                  navData.isActive ? classes.active : ''
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/about'
                className={(navData) =>
                  navData.isActive ? classes.active : ''
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/products'
                className={(navData) =>
                  navData.isActive ? classes.active : ''
                }
              >
                Products
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/gallery'
                className={(navData) =>
                  navData.isActive ? classes.active : ''
                }
              >
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/contact'
                className={(navData) =>
                  navData.isActive ? classes.active : ''
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </BrowserView>
      <MobileView>
        <nav>
          <div className={classes.logo}>
            <img
              src={logo}
              alt='logo'
              onClick={() => {
                navigate('/home');
              }}
            />
          </div>
          <button
            type='button'
            className={classes.toggleMenu}
            style={{
              backgroundImage: !openMenu
                ? `url('/src/imgs/burger.svg')`
                : `url('/src/imgs/close.png')`,
              backgroundSize: 'cover',
            }}
            onClick={() => {
              setopenMenu((prev) => !prev);
            }}
          >
            {/* <img src={burger} /> */}
          </button>
          {
            <ul
              className={`${classes.mobileNav} ${
                !openMenu ? `${classes.closed}` : ''
              }`}
            >
              <li>
                <NavLink
                  onClick={() => {
                    setopenMenu((prev) => !prev);
                  }}
                  to='/home'
                  className={(navData) =>
                    navData.isActive ? classes.active : ''
                  }
                >
                  Početna
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={() => {
                    setopenMenu((prev) => !prev);
                  }}
                  to='/about'
                  className={(navData) =>
                    navData.isActive ? classes.active : ''
                  }
                >
                  O nama
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={() => {
                    setopenMenu((prev) => !prev);
                  }}
                  to='/products'
                  className={(navData) =>
                    navData.isActive ? classes.active : ''
                  }
                >
                  Proizvodi
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={() => {
                    setopenMenu((prev) => !prev);
                  }}
                  to='/gallery'
                  className={(navData) =>
                    navData.isActive ? classes.active : ''
                  }
                >
                  Galerija
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={() => {
                    setopenMenu((prev) => !prev);
                  }}
                  to='/contact'
                  className={(navData) =>
                    navData.isActive ? classes.active : ''
                  }
                >
                  Kontakt
                </NavLink>
              </li>
            </ul>
          }
        </nav>
      </MobileView>
    </>
  );
};

export default MainNav;
