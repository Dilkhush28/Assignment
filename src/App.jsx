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
                  <ProductDetail /> {/* Landing Page */}
                </Content>
              </Layout>,
    children: [
      {
        path: 'compare', 
        element: <CompareProduct />,
      },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
