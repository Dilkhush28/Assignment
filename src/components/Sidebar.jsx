import React, { useState } from 'react';
import { IoIosClose } from "react-icons/io";
import { Menu } from 'antd';
import clsx from 'clsx';
import{Link} from 'react-router-dom'
function Sidebar() {
  const [close, setClose] = useState(false);


  const toggleClose = () => {
    setClose(!close);
  };

  return (
    <div
      className={clsx(
        'fixed top-0 right-0 w-screen h-full lg:hidden backdrop-blur-sm ',
        close && "translate-x-0"
      )}
    >
      <section className='absolute left-0 z-50 h-screen text-black bg-white flex-cl p-9 gap-9'>
        <IoIosClose 
          onClick={toggleClose} 
          className='mt-0 mb-8 text-3xl cursor-pointer'
        />
        <Menu mode="inline" className='font-bold' defaultSelectedKeys={['']} style={{ height: '100%', borderRight: 0 }}>
          <Menu.Item key="1"> <Link to="/products"> Product Details</Link> </Menu.Item>
          <Menu.Item key="2"><Link to="/compares" > Compare Products</Link> </Menu.Item>
          <Menu.Item key="3"><Link to="/add" > Add Product</Link> </Menu.Item>
          <Menu.Item key="4"><Link to="/brand" >Brand</Link> </Menu.Item>
        </Menu>
      </section>
    </div>
  );
}

export default Sidebar;
