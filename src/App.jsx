import React from 'react';
import { Layout } from 'antd';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductDetail from './components/ProductDetail';
import CompareProduct from './components/CompareProduct';

const { Content } = Layout;

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout>
                <Navbar />
                <Content>
                  <ProductDetail /> 
                </Content>
              </Layout>,
    children: [
      {
        path: '/compareProduct', 
        element: <CompareProduct />,
      },{
        path:'/ProductDetail',
        element:<ProductDetail/>
      }
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router} />

  );
}

export default App;
