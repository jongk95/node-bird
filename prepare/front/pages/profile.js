import React from "react";
import Head from "next/head";

import AppLayout from "../components/AppLayout";
import NicknameEditForm from "../components/NicknameEditForm";
import FollowList from "../components/FollowList";


const Profile = () => {
    const followerList = [{ nickname: "JONG" }, { nickname: "BABO" }, { nickname: "YAKING" }];
    const followingList = [{ nickname: "JONG" }, { nickname: "BABO" }, { nickname: "YAKING" }];
    return (
        <>
            <Head>
                <title>Node Bird | 인덱스</title>
            </Head>
            <AppLayout>
                <NicknameEditForm />
                <FollowList header="팔로잉 목록" data={followingList} />
                <FollowList header="팔로워 목록" data={followerList} />
            </AppLayout>;
        </>
    );
};

export default Profile;