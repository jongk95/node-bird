import React from "react";
import AppLayout from "../components/AppLayout";
import Head from "next/head";

const Home = () => {
    return (
        <>
            <Head>
                <title>Node Bird | 인덱스</title>
            </Head>
            <AppLayout>
                <div>Hello, Next!</div>
            </AppLayout>
        </>
    );
};

export default Home;