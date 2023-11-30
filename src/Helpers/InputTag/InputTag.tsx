import { InfoCircleOutlined, UserOutlined } from '@ant-design/icons';
import { DatePicker, Input, Tooltip } from 'antd';
const InputTag = () =>
{
    return (
        <div className='m-3 flex justify-between'>
            <div className='w-20'>
                <Input
                    placeholder="Name"
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    suffix={
                        <Tooltip title="Search by user name">
                            <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                        </Tooltip>
                    }
                />
            </div>
            <div className='w-20'>
                <Input
                    placeholder="Email"
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    suffix={
                        <Tooltip title="Search by user Email">
                            <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                        </Tooltip>
                    }
                />
            </div>

            <div className='w-20'>
                <DatePicker/>
            </div>
        </div>
    );
};

export default InputTag;