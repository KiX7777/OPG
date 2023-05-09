import classes from '../pages/Home.module.css'
import { useEffect, useState } from 'react'

const Logo = () => {
  const [loaded, setloaded] = useState(false)
  useEffect(() => {
    const loadImg = () => {
      return new Promise((resolve, reject) => {
        const loadImg = new Image()
        loadImg.src = '/imgs/logo.webp'

        loadImg.onload = resolve()
        loadImg.onerror = reject()
      })
    }

    loadImg().then((res) => setloaded(true))
  }, [])

  return (
    <>
      {loaded && (
        <img src='/imgs/logo.webp' className={classes.logo} alt='OPG Logo' />
      )}
    </>
  )
}

export default Logo
