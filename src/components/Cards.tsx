import { Card, Col, Row } from "antd";
import { CardComponent } from "./CardComponent";
import { ProgressBar } from "./ProgressBar";


export const Cards = () => {
    return (
        <>
            <Row gutter={[24, 24]} justify="center" style={{marginInline: 0}}>
                <Col xs={24} sm={24} md={12} lg={12} xl={10}>
                    <Card title="To-Do" style={{ height: "100%" }}>
                        <CardComponent
                            title="Attend Nischal’s Birthday Party"
                            content="Buy gifts on the way and pick up cake from the bakery. (6 PM | Fresh Elements)"
                            img="../images/party.png"
                        />
                        <CardComponent
                            title="Landing Page Design for TravelDays"
                            content="Get the work done by EOD and discuss with client before leaving. (4 PM | Meeting Room)"
                            img="../images/design.png"
                        />
                    </Card>
                </Col>

                <Col xs={24} sm={24} md={12} lg={12} xl={10}>
                    <Row gutter={[0, 24]}>
                        <Col span={24}>
                            <Card title="Task Status">
                                <ProgressBar />
                            </Card>
                        </Col>

                        <Col span={24}>
                            <Card title="Completed Task">
                                <CardComponent
                                    title="Walk the dog"
                                    content="Take the dog to the park and bring treats as well."
                                    img="../images/dog.png"
                                />

                                <CardComponent
                                    title="Conduct meeting"
                                    content="Meet with the client and finalize requirements."
                                    img="../images/meeting.png"
                                />
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    )
}