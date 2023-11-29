import React from 'react';
import { DatePicker, Space } from 'antd';

const { RangePicker } = DatePicker;

const Date_Picker: React.FC = () => (
    <Space direction="vertical" size={10}>
        <RangePicker />
    </Space>
);

export default Date_Picker;