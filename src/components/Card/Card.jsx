
import { Col } from 'antd';
import Data from "data/ImagesData.json";
import { IconDots, IconPhoto } from 'icons';

 const Card = () =>{
  return (
    <>
    {Data.map(item =>(
        <Col  xs={{ span: 12}} md={{ span: 8 }} lg={{ span: 5 }} className='bg-[#F7F9FC] m-3 p-3 rounded-2xl' key={item?.id}>
            <div className='flex justify-end'>
                <div className='w-[40px] h-[40px] flex items-center justify-center rounded-full hover:bg-[#E1E5EA]'>

                <IconDots className='cursor-pointer'/>
                </div>
            </div>
            <img src={item?.imageUrl} alt={item?.title} className='w-full h-[180px] object-cover rounded mt-3 mb-3'/>
            <div className='flex items-center'>

            <IconPhoto className='cursor-pointer mr-4'/>
            <h3>{item?.title}</h3>
            </div>
        </Col>
    ))}
    </>
  )
}

export default Card ;