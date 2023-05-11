import { useLocation } from 'react-router-dom'
import classes from './Home.module.css'
import HexagonMenu from '../Components/HexagonMenu'
import logo from '/imgs/logo.webp'
import React from 'react'
import { memo, useRef, useEffect, useState } from 'react'
import { CSSTransition } from 'react-transition-group'

const Home = memo(({ setIsHome }) => {
  const location = useLocation()
  const href = useRef(null)
  useEffect(() => {
    setIsHome()
  }, [])

  //Pre-load the logo image
  const [loaded, setloaded] = useState(false)
  useEffect(() => {
    const loadImg = () => {
      return new Promise((resolve, reject) => {
        const loadImg = new Image()
        loadImg.src = '/imgs/logo.webp'

        loadImg.onload = resolve()
        //resolve promise after it loads
        loadImg.onerror = reject()
      })
    }
    //update the state to loaded
    loadImg().then((res) => setloaded(true))
  }, [])

  //load component only when image loads
  return (
    <>
      {loaded && (
        <CSSTransition
          timeout={1400}
          in={true}
          appear={true}
          nodeRef={href}
          classNames={{
            appear: 'Appear',
            appearActive: 'AppearActive',
            appearDone: 'AppearActive',
          }}
        >
          <div className={classes.homeContainer} ref={href}>
            {location.state && (
              <h1 className={classes.submitMsg}>{location.state}</h1>
            )}

            <div className={classes.homeTitle}>
              <p>Pčelarstvo</p>
              <img
                src='/imgs/logo.webp'
                alt='OPG logo'
                className={classes.logo}
              />
            </div>

            <HexagonMenu setIsHome={setIsHome} />
          </div>
        </CSSTransition>
      )}
    </>
  )
})

export default Home
