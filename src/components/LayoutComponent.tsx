import { Layout } from "antd"
import { Cards } from "./Cards";
import { Navigation } from "./Navigation";
import { HeaderComponent } from "./HeaderComponent";
import { volcano } from '@ant-design/colors'

const { Sider } = Layout;

const siderStyle = {
    backgroundColor: volcano[4],
    justifyContent: 'space-between',
};


export const LayoutComponent = () => {
    return (

        <Layout>
            <HeaderComponent />
            <Layout style={siderStyle}>
                <Sider width="250px"
                    style={{ backgroundColor: volcano[4] }}
                    breakpoint="md"
                    collapsedWidth={0}>
                    <Navigation />
                </Sider>
                <Cards />
            </Layout>
        </Layout>

    )
}