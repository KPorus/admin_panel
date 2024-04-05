import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
const SideBar = ({ children }: { children: React.ReactNode }) =>
{
    const [toggle, setToggle] = useState(false);
    return (
        <div className='relative flex'>
            <div
                className={`flex transition-all bg-[#001529] ${toggle ? "w-[8%]" : "w-[8%] md:w-[15%]"
                    } min-h-[100vh] justify-center`}>
                {/* <div className='flex flex-col justify-between items-center'> */}
                    <div className='fixed flex justify-center items-center flex-col py-5'>
                        <Link
                            href={"/"}
                            className={`link link-body py-[0.6rem] text-center ${toggle ? "w-[3rem]" : "w-[3rem] md:w-[9rem]"
                                } rounded-md flex items-center justify-center gap-2`}>
                            <Image
                                src={
                                    "https://img.icons8.com/?size=512&id=d0J4Xl8jnuC7&format=png"
                                }
                                width={30}
                                height={30}
                                priority={true}
                                alt='Dashboard'
                            />
                            <h4 className={`${toggle ? "hidden" : "hidden md:block"}`}>
                                Dashoard
                            </h4>
                        </Link>
                        <Link
                            href={"/Users"}
                            className={`link link-body py-[0.6rem] text-center ${toggle ? " w-[3rem]" : "w-[3rem] md:w-[9rem]"
                                } rounded-md flex items-center justify-center gap-2`}>
                            <Image
                                src={"https://img.icons8.com/?size=512&id=108652&format=png"}
                                width={40}
                                height={40}
                                priority={true}
                                alt='user'
                            />
                            <h4 className={`${toggle ? "hidden" : "hidden md:block"}`}>
                                All Users
                            </h4>
                        </Link>
                        <Link
                            href={"/Products"}
                            className={`link link-body py-[0.6rem] text-center ${toggle ? " w-[3rem]" : "w-[3rem] md:w-[9rem]"
                                } rounded-md flex items-center justify-center gap-2`}>
                            <Image
                                src={"https://img.icons8.com/?size=512&id=K4RcAnCFFM6G&format=png"}
                                width={40}
                                height={40}
                                priority={true}
                                alt='user'
                            />
                            <h4 className={`${toggle ? "hidden" : "hidden md:block"}`}>
                                Products
                            </h4>
                        </Link>
                    </div>
                    <button
                        className={`fixed bottom-0 text-center ${toggle ? "w-[3rem]" : "w-[3rem] md:w-[9rem]"
                            } p-2 flex items-center justify-center text-2xl font-bold bg-[#1f3f5c]`}
                        onClick={() => setToggle(!toggle)}>
                        {toggle ? ">" : "<"}
                    </button>
                {/* </div> */}
            </div>
            <div className='bg-white w-full'>{children}</div>
        </div>
    );
};

export default SideBar;

// import { Layout, Menu } from "antd";
// import { useState } from "react";
// import
// {
//     SettingOutlined,
//     WindowsOutlined, UserOutlined
// } from "@ant-design/icons";
// import Link from "next/link";
// import Image from "next/image";
// const { Sider } = Layout;

// const Sidebar = () =>
// {

//     const [collapsed, setCollapsed] = useState(false);

//     return (
//         <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
//             <div className="demo-logo-vertical" />
//             <Menu
//                 theme="dark"
//                 mode="inline"
//                 defaultSelectedKeys={['1']}
//                 items={[
//                     {
//                         key: '0',
//                         icon: <Image src={'https://img.icons8.com/?size=256&id=68733&format=png'} alt="logo" className=" absolute w-[40px] h-[40px] left-[1.1rem]" height={50} width={50} />,
//                         label: <Link href={'/'} className="text-xs font-bold uppercase ml-6">Admin Panel</Link>
//                     },
//                     {
//                         key: '1',
//                         icon: <WindowsOutlined />,
//                         label: <Link href={'/'}>Dashboard</Link>,
//                     },
//                     {
//                         key: '2',
//                         icon: <UserOutlined />,
//                         label: <Link href={'/Users'}>Users</Link>,
//                     },
//                     {
//                         key: '3',
//                         icon: <SettingOutlined />,
//                         label: 'Settings',
//                     },
//                 ]}
//             />
//         </Sider>
//     );
// };

// export default Sidebar;
