import React, { useCallback } from "react";
import Head from 'next/head'
import { Form } from 'antd';
import AppLayout from "../components/AppLayout";

const Signup = () => {

    const onSubmit = useCallback(() => {

    }, [])

    return (
        <AppLayout>
            <Head>
                <title>회원가입 | NodeBird</title>
            </Head>
            <Form onFinish={onsubmit}>

            </Form>
        </AppLayout>
    )
    
};

export default Signup;