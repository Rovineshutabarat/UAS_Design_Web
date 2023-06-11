import React from 'react'
import CrudBanner from "./CrudBanner";
import CrudNavbar from './CrudNavbar';
import Product from './Product';

const CrudHomepage = () => {
  return (
    <div className='pb-20 bg-slate-200'>
      <CrudNavbar /> 
      <CrudBanner />
      <Product />
    </div>
  );
};



export default CrudHomepage;