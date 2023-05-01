import MainNav from '../Components/MainNav';

const Layout = (props) => {
  return (
    <div>
      <MainNav />
      {props.children}
    </div>
  );
};

export default Layout;
