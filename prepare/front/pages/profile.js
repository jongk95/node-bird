import React from "react";
import AppLayout from "../components/AppLayout";
import Head from "next/head";


const Profile = () => {
    return (
        <>
            <Head>
                <title>Node Bird | 인덱스</title>
            </Head>
            <AppLayout>
                내 프로필
            </AppLayout>;
        </>
    );
};

export default Profile;