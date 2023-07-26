import { Button } from "antd";
import { useState } from "react";
import { IconPen, IconText } from "icons";

const ToolOptions = ({ onHandleAddText, onHandleDraw, onHandleSaveImage }) => {
  const [colorPen, setColorPen] = useState(false);
  const [colorText, setColorText] = useState(false);

  return (
    <>
      <div className="fixed top-1 left-1/2 z-10 p-3 text-white">
        <IconPen
          title="icon pencil"
          className="mr-4 cursor-pointer"
          fill={colorPen ? "#1890ff" : "none"}
          onClick={() => {
            onHandleDraw();
            setColorPen(!colorPen);
          }}
        />
        <IconText
          title="icon add text"
          className="cursor-pointer"
          stroke={colorText ? "#1890ff" : "#fff"}
          onClick={() => onHandleAddText()}
        />
      </div>
      <div className="fixed top-1 right-2 z-10 p-3 text-white">
        <Button type="primary" className="ml-4" onClick={onHandleSaveImage}>
          Save
        </Button>
      </div>
    </>
  );
};

export default ToolOptions;
