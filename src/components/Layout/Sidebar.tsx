import { Layout, Menu } from "antd";
import { useState } from "react";
import
{
    SettingOutlined,
    WindowsOutlined, UserOutlined
} from "@ant-design/icons";
import Link from "next/link";
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
                        key: '1',
                        icon: <WindowsOutlined />,
                        label: <Link href={'/'}>Dashboard</Link>,
                    },
                    {
                        key: '2',
                        icon: <UserOutlined />,
                        label: 'Users',
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