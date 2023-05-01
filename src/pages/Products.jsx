import { Link, Outlet } from 'react-router-dom';
import ProductList from '../Components/ProductList';

export const products = [
  {
    id: 1,
    name: 'Med',
    price: 8,
    img: 'https://images.unsplash.com/photo-1587049352851-8d4e89133924?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
  },
  {
    id: 2,
    name: 'Propolis',
    price: 4,
    img: 'https://radovanpetrovic.com/wp-content/uploads/2018/04/propolis-krupni-plan-870x580.jpg',
  },
  {
    id: 3,
    name: 'Matična mliječ',
    price: 20,
    img: 'https://www.adiva.hr/wp-content/uploads/2019/01/maticna_mlijec_je_zdrava_hranjiva_bomba.jpg',
  },
  {
    id: 4,
    name: 'Medica',
    price: 10,
    img: 'https://images.unsplash.com/photo-1615887625746-f3d2aa27e048?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
  {
    id: 5,
    name: 'Pelud',
    price: 10,
    img: 'https://pcelarstvo-veber.hr/cms/wp-content/uploads/2017/10/cvjetni-pelud.jpg.webp',
  },
];

const Products = () => {
  return (
    <>
      <ProductList products={products} />
      <Outlet />
    </>
  );
};

export default Products;
