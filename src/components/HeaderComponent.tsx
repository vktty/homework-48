import {
    HomeOutlined,
    MenuOutlined,
    SearchOutlined,
    MenuUnfoldOutlined
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { volcano } from '@ant-design/colors'

const { Header } = Layout;

const headerStyle = {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: volcano[5]
};

const items = [
    {
        label: 'Profile',
        key: 'profile',
        icon: <HomeOutlined />,
    },
    {
        label: 'Menu',
        key: 'menu',
        icon: <MenuOutlined />,
    },
    {
        label: 'Explore',
        key: 'explore',
        icon: <SearchOutlined />,
    },
];


export const HeaderComponent = () => {
    return (
        <Layout>
            <Header
                style={headerStyle}
            >
                <Menu
                    theme="light"
                    mode="horizontal"
                    items={items}
                    style={{ flex: 1, backgroundColor: volcano[5]}}
                    className='myMenu'
                    overflowedIndicator={<MenuUnfoldOutlined />}
                />
            </Header>
        </Layout>
    );
};