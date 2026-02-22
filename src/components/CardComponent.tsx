import { Card } from 'antd';

interface ICardomponents {
    title: string,
    content: string,
    img: string
}

export const CardComponent = ({ title, content, img }: ICardomponents) => (
    <Card title={title} variant="borderless" style={{ maxWidth: 300 }}>
        <p>{content}</p>
        <img
            draggable={false}
            src={img}
        />
    </Card>
);

