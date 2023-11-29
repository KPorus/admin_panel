import React, { ReactNode } from 'react';
import dynamic from "next/dynamic";

const RootLayouts = dynamic(() => import("@/components/Layout/RootLayouts"));
const AllUsers = dynamic(() => import('@/components/AllUsers/AllUsers'));
const InputTag = dynamic(() => import('@/Helpers/InputTag/InputTag'));
const HeadTag = dynamic(() => import("@/Helpers/HeadTag/HeadTag"));
const index = () =>
{
    return (
        <main>
            <HeadTag
                title='All Users'
                descriptionContent='Welcome to all users page'></HeadTag>
            <InputTag></InputTag>
            <AllUsers></AllUsers>
        </main>
    );
};

export default index;


index.getLayout = function getLayout(page: ReactNode)
{
    return <RootLayouts>{page}</RootLayouts>;
};
