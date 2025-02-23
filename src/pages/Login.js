import React from 'react'
import {Form, Input} from 'antd';
import FormItem from 'antd/es/form/FormItem';
import { Link } from 'react-router-dom';

const Login = () => {
    const submitHandler = (values) => {
        console.log(values);
    }

  return (
    <>
        <div className="register-page">
            <Form layout='vertical' onFinish={submitHandler}>
                <h1>Login</h1>
                <FormItem label="Email" name="email">
                    <Input type='email'/>
                </FormItem>
                <FormItem label="Password" name="password">
                    <Input type='password'/>
                </FormItem>
                <div className='d-flex'>
                    <Link to="/register">Not a user ? Click here to register</Link>
                    <button className='btn btn-primary'>Login</button>
                </div>
            </Form>
        </div>
    </>
  )
}

export default Login