import { Col, Row } from "antd";
import Data from "data/ImagesData.json";
import { IconPhoto } from "icons";
import MainPopOver from "components/PopOver/PopOver";

const Card = () => {
  return (
    <>
      <Row gutter={24}>
        {Data.map((item) => (
          <Col
            xs={{ span: 12 }}
            md={{ span: 8 }}
            lg={{ span: 5 }}
            className="relative m-3 rounded-2xl bg-[#F7F9FC] p-3"
            key={item?.id}
          >
            <div className="flex justify-end">
              <div className="flex h-[24px] w-[24px] items-center justify-center rounded-full hover:bg-[#E1E5EA]">
                <MainPopOver imageUrl={item?.imageUrl} />
              </div>
            </div>
            <img
              src={item?.imageUrl}
              alt={item?.title}
              className="mt-3 mb-3 h-[180px] w-full rounded object-cover"
            />
            <div className="flex items-center">
              <IconPhoto className="mr-4 cursor-pointer" />
              <h3>{item?.title}</h3>
            </div>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Card;
