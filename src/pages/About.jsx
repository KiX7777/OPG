import { useState, useRef, useEffect } from 'react'
import classes from './About.module.css'
import { ScaleLoader } from 'react-spinners'
import DocumentMeta from 'react-document-meta'
import { CSSTransition } from 'react-transition-group'

const About = ({ setIsHome }) => {
  const [loadMap, setLoadMap] = useState(true)
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
      <div ref={href} className={classes.aboutContainer}>
        <h1>O nama</h1>
        <div className={classes.mapContainer}>
          <div
            className={classes.map}
            style={{ width: '100%', height: '50dvh' }}
          >
            {loadMap && (
              <ScaleLoader
                color='white'
                style={{
                  position: 'absolute',
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
              />
            )}
            <iframe
              width='100%'
              height='100%'
              onLoad={() => {
                setLoadMap((prev) => !prev)
              }}
              style={{
                borderRadius: '10px',
                boxShadow: '0 2px 10px 5px rgba(0,0,0,0.2)',
              }}
              frameBorder='0'
              scrolling='no'
              marginHeight='0'
              marginWidth='0'
              src='https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Josipa%20Martinca%2027,%20Vo%C4%87in,%20Croatia+(OPG)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'
            >
              <a href='https://www.maps.ie/distance-area-calculator.html'>
                measure area map
              </a>
            </iframe>
          </div>
        </div>
      </div>
    </CSSTransition>
  )
}

export default About
