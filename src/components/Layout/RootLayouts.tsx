import { Layout } from "antd";
import dynamic from "next/dynamic";
const Sidebar = dynamic(() => import("@/components/Layout/Sidebar"));
const Contents = dynamic(() => import("@/components/Layout/Contents"));

const DashbordLayouts = ({ children }: { children: React.ReactNode }) =>
{
    return (
        <>
            <Layout hasSider>
                <Sidebar />
                <Contents>{children}</Contents>
            </Layout>
        </>
    );
};

export default DashbordLayouts;