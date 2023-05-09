import { useLocation } from 'react-router-dom'
import classes from './Home.module.css'
import HexagonMenu from '../Components/HexagonMenu'
import logo from '/imgs/logo.webp'
import { memo } from 'react'
import { CSSTransition } from 'react-transition-group'
import { useRef, useEffect } from 'react'

const Home = memo(({ setIsHome }) => {
  const location = useLocation()
  const href = useRef(null)
  useEffect(() => {
    setIsHome()
  }, [])

  return (
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
          <img className={classes.logo} src={logo} alt='OPG Božić logo' />
        </div>
        <HexagonMenu setIsHome={setIsHome} />
      </div>
    </CSSTransition>
  )
})

export default Home
