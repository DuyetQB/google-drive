import { Col, Row, Spin } from "antd";
import { IconPhoto } from "icons";
import MainPopOver from "components/PopOver/PopOver";
import { useFetch } from "hooks/useFetch";
import { getListProduct } from "services/ProductItems";

const Card = () => {
  const { data, loading } = useFetch(async () => getListProduct(), []);

  return (
    <>
      {!loading ? (
        <Row gutter={24}>
          <>
            {data?.map((item) => (
              <Col
                xs={{ span: 12 }}
                md={{ span: 8 }}
                lg={{ span: 5 }}
                className="relative m-3 rounded-2xl bg-[#F7F9FC] p-3"
                key={item?.id}
              >
                <div className="flex justify-end">
                  <div className="flex h-[24px] w-[24px] items-center justify-center rounded-full hover:bg-[#E1E5EA]">
                    <MainPopOver imageInfor={item} />
                  </div>
                </div>
                <img
                  src={item?.imageUrl}
                  alt={item?.title}
                  className="imageElement mt-3 mb-3 h-[180px] w-full rounded object-cover"
                />
                <div className="flex items-center">
                  <IconPhoto className="mr-4 cursor-pointer" />
                  <h3>{item?.title}</h3>
                </div>
              </Col>
            ))}
          </>
        </Row>
      ) : (
        <div className="spiner my-5 mx-0 mb-20 rounded-md bg-white bg-opacity-5 bg-opacity-5 p-5 text-center">
          <Spin />
        </div>
      )}
    </>
  );
};

export default Card;
