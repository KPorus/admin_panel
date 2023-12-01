import dynamic from 'next/dynamic';
import React, { ReactNode } from 'react';
const SideBar = dynamic(() => import("@/components/Layout/Sidebar"));
const index = () => {
    return (
        <div>
           All products 
        </div>
    );
};

export default index;

index.getLayout = function getLayout(page: ReactNode)
{
    return <SideBar>{page}</SideBar>;
};