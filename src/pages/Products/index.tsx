import { Input, Tooltip } from 'antd';
import dynamic from 'next/dynamic';
import React, { ReactNode } from 'react';
import { InfoCircleOutlined, UserOutlined } from '@ant-design/icons';
import { useForm, SubmitHandler } from 'react-hook-form';  // Ensure correct import

const SideBar = dynamic(() => import('@/components/Layout/Sidebar'));

type InputsData = {
    productName: string;
    catagory: string;
};

const Index = () =>
{
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<InputsData>();  // Correct type parameter

    const onSubmit: SubmitHandler<InputsData> = (data) => console.log(data);

    return (
        <div className='text-start p-3 uppercase text-slate-900 font-medium'>
            All products <hr className='w-44 relative bottom-[0.6rem] right-[-122px]'></hr>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    {...register('productName')}
                    placeholder='Enter Product name'
                    prefix={<UserOutlined className='site-form-item-icon' />}
                    suffix={
                        <Tooltip title='Product name'>
                            <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                        </Tooltip>
                    }
                />
                <input type='submit' />
            </form>
        </div>
    );
};

export default Index;  // Correct component name

Index.getLayout = function getLayout(page: ReactNode)
{
    return <SideBar>{page}</SideBar>;
};