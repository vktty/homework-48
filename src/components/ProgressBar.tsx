import { Flex, Progress, Typography } from 'antd';
const { Text } = Typography;

export const ProgressBar = () => (
    <Flex wrap gap="large" justify='space-evenly'>
        <div>
        <Progress type="circle" percent={30} size={80} /><Text>To do</Text>
        </div>
        <div>
        <Progress type="circle" percent={70} size={80} /><Text>In progress</Text>
        </div>
        <div>
        <Progress type="circle" percent={100} size={80} /><Text>Completed</Text>
        </div>
        <div>
        <Progress type="circle" percent={60} size={80} status="exception" /><Text>Closed</Text>
        </div>

    </Flex>
);