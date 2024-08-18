import React from 'react';
import { IoIosClose } from "react-icons/io";
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import ProductDetails from './ProductDetail';
import CompareProducts from './CompareProduct';
function Sidebar({ closeSidebar }) {
  return (
    <div className={clsx('fixed inset-0 z-50 flex', closeSidebar && 'translate-x-0')}>
      <div className="w-64 h-full p-5 bg-white shadow-lg">
        <IoIosClose 
          className="mb-6 text-3xl cursor-pointer"
          onClick={closeSidebar} 
        />
        <Menu mode="inline" className="font-bold">
          <Menu.Item key="1">
            <Link to="/ProductDetail" onClick={ProductDetails}>Product Details</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/CompareProduct" onClick={CompareProducts}>Compare Products</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/add" onClick={closeSidebar}>Add Product</Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="/brand" onClick={closeSidebar}>Brand</Link>
          </Menu.Item>
        </Menu>
      </div>
      <div
        className="flex-grow bg-black opacity-50"
        onClick={closeSidebar}
      />
    </div>
  );
}

export default Sidebar;
