import React from 'react';
import { Order } from '../DashBoard/Chart/Order';
import dynamic from 'next/dynamic';
import { User_login } from '../DashBoard/Chart/User_login';
import User from '../DashBoard/User_Table/User';
const Total_product = dynamic(() => import('@/components/DashBoard/Total_product'));
const Total_user = dynamic(() => import('@/components/DashBoard/Total_user'));
const Last_login = dynamic(() => import('@/components/DashBoard/Last_login'));
const ActionLog = dynamic(() => import('@/components/DashBoard/ActionLog'));
const Homepage = () => {
    return (
        <div>
            <div className='flex justify-around gap-2 pl-3'>
                <div className='flex flex-col'>
                    <div className='flex justify-start items-center gap-2 pl-2'>
                        <Total_product />
                        <Total_user />
                        <Last_login />
                    </div>
                    <div >
                        <User/>
                    </div>
                </div>
                <ActionLog />
            </div>
            <div className='ml-10 mt-7 '>
                <div className='flex justify-start items-center gap-10'>
                    <Order></Order>
                    <User_login></User_login>
                </div>
            </div>
        </div>
    );
};

export default Homepage;