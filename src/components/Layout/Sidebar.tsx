import { Layout, Menu } from "antd";
import { useState } from "react";
import
{
    SettingOutlined,
    WindowsOutlined, UserOutlined
} from "@ant-design/icons";
import Link from "next/link";
import Image from "next/image";
const { Sider } = Layout;

const Sidebar = () =>
{

    const [collapsed, setCollapsed] = useState(false);

    return (
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
            <div className="demo-logo-vertical" />
            <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={['1']}
                items={[
                    {
                        key: '0',
                        icon: <Image src={'https://img.icons8.com/?size=256&id=68733&format=png'} alt="logo" className=" absolute w-[40px] h-[40px] left-[1.1rem]" height={50} width={50} />,
                        label: <Link href={'/'} className="text-xs font-bold uppercase ml-6">Admin Panel</Link>
                    },
                    {
                        key: '1',
                        icon: <WindowsOutlined />,
                        label: <Link href={'/'}>Dashboard</Link>,
                    },
                    {
                        key: '2',
                        icon: <UserOutlined />,
                        label: <Link href={'/Users'}>Users</Link>,
                    },
                    {
                        key: '3',
                        icon: <SettingOutlined />,
                        label: 'Settings',
                    },
                ]}
            />
        </Sider>
    );
};

export default Sidebar;