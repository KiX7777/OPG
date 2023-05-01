import MainNav from '../Components/MainNav';

const Layout = (props) => {
  return (
    <div className='page'>
      <MainNav />
      {props.children}
    </div>
  );
};

export default Layout;
