import { useState} from "react";
import { Dropdown, Menu } from "antd";
import { IconDots, IconEdit } from "icons";
import PopUpCanvas from "components/PopupCanvas/PopupCanvas";

const MainPopOver = ({ imageUrl }) => {

  const [isOpenPopUpCanvas,setIsOpenPopUpCanvas] = useState(false);

  const onClosePopup = () =>{
    setIsOpenPopUpCanvas(false);
}

  const items = [
    {
      label: 'Chỉnh Sửa',
      key: '1',
      icon: <IconEdit />,
      onClick: () => {
        setIsOpenPopUpCanvas(!isOpenPopUpCanvas);
      },
    }
  ];

  return (
    <>
    <Dropdown overlay={<Menu items={items} />} trigger={['click']}>
      <a onClick={(e) => e.preventDefault()}>
        <IconDots className="cursor-pointer" />
      </a>
    </Dropdown>
    <PopUpCanvas isOpen={isOpenPopUpCanvas} imageUrl={imageUrl} onClose={onClosePopup}/>
    </>
  );
};

export default MainPopOver;
