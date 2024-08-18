import React, { useState, useEffect } from 'react';
import { Table, Button } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function ProductDetails() {
  const [products, setProducts] = useState([]);
  const [compareList, setCompareList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(response => setProducts(response.data.products));
  }, []);

  const addToCompare = (product) => {
    if (compareList.length < 4 && !compareList.some(item => item.id === product.id)) {
      setCompareList([...compareList, product]);
    }
  };

  const columns = [
    { title: 'Title', dataIndex: 'title', sorter: true },
    { title: 'Description', dataIndex: 'description' },
    { title: 'Price', dataIndex: 'price', sorter: true },
    { title: 'Discount Percentage', dataIndex: 'discountPercentage', sorter: true },
    { title: 'Brand', dataIndex: 'brand' },
    { title: 'Category', dataIndex: 'category' },
    { 
      title: 'Image', 
      dataIndex: 'thumbnail', 
      render: (image) => <img src={image} alt="Product Thumbnail" style={{ width: 50, height: 50 }} /> 
    },
    {
      title: 'Action',
      render: (_, record) => (
        <Button
          disabled={compareList.some(item => item.id === record.id)}
          onClick={() => addToCompare(record)}
        >
          Compare
        </Button>
      )
    }
  ];

  return (
    <>
      <Table
        dataSource={products}
        columns={columns}
        rowKey="id"
        pagination={{ pageSize: 5 }}
      />
      <Button
        type="primary"
        onClick={() => navigate('/compare', { state: { compareList } })}
        disabled={compareList.length === 0}
      >
        Go to Compare Page
      </Button>
    </>
  );
}

export default ProductDetails;
