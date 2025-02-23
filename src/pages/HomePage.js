import React, { useState} from 'react';
import {Form, Input, message} from 'antd';
import FormItem from 'antd/es/form/FormItem';
import { Modal, Select } from 'antd';
import Layout from '../components/Layout/Layout';
import axios from 'axios';

const HomePage = () => {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false)

  //form handling
  const handleSubmit = (values) => {
    // try{
    //   const user = JSON.parse(localStorage.getItem('user'))
    //   setLoading(true)
    //   await axios.post('/transactions/add-transaction', {...values, userid:user._id})
    //   setLoading(false)
    //   message.success("Transaction Added Successfully")
    //   setShowModal(false)
    // }catch{
    //   setLoading(false)
    //   message.error("falied to add transaction")
    // }
  };
  return (
    <Layout>
        <div className='filters'>
        <div>range filters</div>
        <div>
          <button className='btn btn-primary'
          onClick={() => setShowModal(true)}>
            Add New</button>
        </div>
        </div>
        <div className='content'></div>
        <Modal
        title= "Add Transection"
        open={showModal}
        onCancel={() => setShowModal(false)}
        footer={false}>
        <Form layout= "vertical" onFinish={handleSubmit}>
          <FormItem label="Amount" name="amount">
            <Input type="text" />
          </FormItem>
          <FormItem label="type" name="type">
              <Select>
                <Select.Option value ="income">Income</Select.Option>
                <Select.Option value ="expense">Expense</Select.Option>
              </Select>
            </FormItem>
            <FormItem label="Category" name="category">
              <Select>
                <Select.Option value ="salary">Salary</Select.Option>
                <Select.Option value ="tip">Tip</Select.Option>
                <Select.Option value ="food">Food</Select.Option>
                <Select.Option value ="movie">Movie</Select.Option>
                <Select.Option value ="projects">Projects</Select.Option>
                <Select.Option value ="bills">Bills</Select.Option>
                <Select.Option value ="Fees">Fees</Select.Option>
                <Select.Option value ="trip">trip</Select.Option>
                <Select.Option value ="medical">Medical</Select.Option>
              </Select>
            </FormItem>
          <FormItem label="Date" name="date">
              <Input type="date" />
          </FormItem>
          <FormItem label="Refrence" name="refrence">
              <Input type="text" />
          </FormItem>
          <FormItem label="Description" name="description">
              <Input type="text" />
          </FormItem>
          <div className="d-flex justify-content-end">
            <button type="submit" className="btn btn-primary">
              {" "}
              SAVE
            </button>
          </div>

        </Form>
        </Modal>
    </Layout>
  )
}

export default HomePage