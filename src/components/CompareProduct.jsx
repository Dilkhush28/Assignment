import React, { useState } from 'react';
import { Table, Button, Modal } from 'antd';
import { useLocation } from 'react-router-dom';

function CompareProducts() {
  const location = useLocation();
  const [compareList, setCompareList] = useState(location.state?.compareList || []);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const columns = [
    { title: 'Title', dataIndex: 'title' },
    { title: 'Brand', dataIndex: 'brand' },
    { title: 'Price', dataIndex: 'price' },
    { title: 'Category', dataIndex: 'category' },
    {
      title: 'Remove',
      render: (_, record) => (
        <Button onClick={() => removeProduct(record.id)}>Remove</Button>
      )
    }
  ];

  const removeProduct = (id) => {
    setCompareList(compareList.filter(product => product.id !== id));
  };

  const showAddMoreModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Table
        dataSource={compareList}
        columns={columns}
        rowKey="id"
        pagination={false}
      />
      <Button onClick={showAddMoreModal} disabled={compareList.length >= 4}>
        Add More
      </Button>

      <Modal title="Add More Products" visible={isModalVisible} onOk={handleOk} onCancel={handleOk}>
        
      </Modal>
    </>
  );
}

export default CompareProducts;
