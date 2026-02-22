import {
    ExclamationOutlined,
    CheckSquareOutlined,
    UnorderedListOutlined,
    SettingOutlined,
    QuestionCircleOutlined,
    FormOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
    { key: '1', icon: <FormOutlined />, label: 'Dashboard' },
    { key: '2', icon: <ExclamationOutlined />, label: 'Vital task' },
    { key: '3', icon: <CheckSquareOutlined />, label: 'My Task' },
    { key: '4', icon: <UnorderedListOutlined />, label: 'Task Caregories' },
    { key: '5', icon: <SettingOutlined />, label: 'Settings' },
    { key: '6', icon: <QuestionCircleOutlined />, label: 'Help' },
];

export const Navigation = () => {
    return (
        <div style={{ width: 256, marginLeft: '10px'}}>
    <Menu
        items={items}
        style={{ borderRadius: '6px' }}
    />
        </div >
    );
};
