import classes from './MainNav.module.css';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '/imgs/logo.webp';
import { BrowserView, MobileView } from 'react-device-detect';
import { useState } from 'react';
import burger from '/imgs/burger.svg';

const MainNav = ({ isHome, setIsHome }) => {
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
              setIsHome(true);
            }}
          >
            <img src={logo} alt='logo' />
          </div>
          <ul>
            {!isHome && (
              <li>
                <NavLink
                  to='/home'
                  onClick={() => {
                    setIsHome(true);
                  }}
                  className={(navData) =>
                    navData.isActive ? classes.active : ''
                  }
                >
                  Početna
                </NavLink>
              </li>
            )}
            <li>
              <NavLink
                onClick={() => setIsHome(false)}
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
                to='/products'
                onClick={() => setIsHome(false)}
                className={(navData) =>
                  navData.isActive ? classes.active : ''
                }
              >
                Proizvodi
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/gallery'
                onClick={() => setIsHome(false)}
                className={(navData) =>
                  navData.isActive ? classes.active : ''
                }
              >
                Galerija
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/contact'
                onClick={() => setIsHome(false)}
                className={(navData) =>
                  navData.isActive ? classes.active : ''
                }
              >
                Kontakt
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
                setIsHome(true);
              }}
            />
          </div>
          {/* <button
            type='button'
            className={classes.toggleMenu}
            style={{
              backgroundImage: !openMenu
                ? `url('/imgs/burger.svg')`
                : `url('/imgs/close.png')`,
              backgroundSize: 'cover',
            }}
            onClick={() => {
              setopenMenu((prev) => !prev);
            }}
          >
            {/* <img src={burger} /> */}
          {/* </button> */}

          <div
            onClick={() => {
              setopenMenu((prev) => !prev);
            }}
            className={`${classes.hamburger} ${
              openMenu ? `${classes.open}` : ''
            }`}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          {
            <ul
              className={`${classes.mobileNav} ${
                !openMenu ? `${classes.closed}` : ''
              }`}
            >
              {!isHome && (
                <li>
                  <NavLink
                    onClick={() => {
                      setopenMenu((prev) => !prev);
                      setIsHome(true);
                    }}
                    to='/home'
                    className={(navData) =>
                      navData.isActive ? classes.active : ''
                    }
                  >
                    Početna
                  </NavLink>
                </li>
              )}
              <li>
                <NavLink
                  onClick={() => {
                    setopenMenu((prev) => !prev);
                    setIsHome(false);
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
                    setIsHome(false);
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
                    setIsHome(false);
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
                    setIsHome(false);
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
