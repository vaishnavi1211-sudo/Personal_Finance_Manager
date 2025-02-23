import React from 'react'
import {Form, Input} from 'antd';
import FormItem from 'antd/es/form/FormItem';
import { Link } from 'react-router-dom';

const Register = () => {

    const submitHandler = (values) => {
        console.log(values);
    }
  return (
    <>
        <div className="register-page">
            <Form layout='vertical' onFinish={submitHandler}>
                <h1>Register Form</h1>
                <FormItem label="Name" name="name">
                    <Input/>
                </FormItem>
                <FormItem label="Email" name="email">
                    <Input type='email'/>
                </FormItem>
                <FormItem label="Password" name="password">
                    <Input type='password'/>
                </FormItem>
                <div className='d-flex'>
                    <Link to="/login">Already Register ? Click here to login</Link>
                    <button className='btn btn-primary'>Register</button>
                </div>
            </Form>
        </div>
    </>
  )
}

export default Register