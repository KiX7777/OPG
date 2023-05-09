import MainNav from '../Components/MainNav'

const Layout = (props) => {
  return (
    <div className='page'>
      <MainNav isHome={props.isHome} setIsHome={props.setIsHome} />
      {props.children}
    </div>
  )
}

export default Layout
