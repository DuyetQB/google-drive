import { IconDots } from "../../icons"
import Card from "components/Card/Card";
import { Row ,Col } from "antd"

const Content = () =>{
    return (
        <div className="p-4">
            <Row gutter={24}>
            <Card />
            </Row>
        </div>
    )
}

export default Content;