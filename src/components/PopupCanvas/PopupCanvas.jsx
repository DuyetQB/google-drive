import { useEffect, useState } from "react";
import { fabric } from "fabric";
import ToolOptions from "components/ToolOptions/ToolOptions";
import { FabricJSCanvas, useFabricJSEditor } from "fabricjs-react";

const PopUp = ({ isOpen, imageInfor, onClose }) => {
  const { editor, onReady } = useFabricJSEditor();
  const [color, setColor] = useState("#35363a");

  useEffect(() => {
    if (!editor || !fabric) {
      return;
    }

    if (!editor.canvas.__eventListeners["mouse:wheel"]) {
      editor.canvas.on("mouse:wheel", function (opt) {
        const event = opt.e;
        event.preventDefault();
        editor.canvas.setZoom(1);
        editor.canvas.setViewportTransform(editor.canvas.viewportTransform);
        editor.canvas.renderAll();
      });
    }

    if (!editor.canvas.__eventListeners["mouse:down"]) {
      editor.canvas.on("mouse:down", function (opt) {
        var evt = opt.e;
        if (evt.ctrlKey === true) {
          this.isDragging = true;
          this.selection = false;
          this.lastPosX = evt.clientX;
          this.lastPosY = evt.clientY;
        }
      });
    }

    if (!editor.canvas.__eventListeners["mouse:move"]) {
      editor.canvas.on("mouse:move", function (opt) {
        if (this.isDragging) {
          var e = opt.e;
          var vpt = this.viewportTransform;
          vpt[4] += e.clientX - this.lastPosX;
          vpt[5] += e.clientY - this.lastPosY;
          this.requestRenderAll();
          this.lastPosX = e.clientX;
          this.lastPosY = e.clientY;
        }
      });
    }

    if (!editor.canvas.__eventListeners["mouse:up"]) {
      editor.canvas.on("mouse:up", function (opt) {
        // on mouse up we want to recalculate new interaction
        // for all objects, so we call setViewportTransform
        this.setViewportTransform(this.viewportTransform);
        this.isDragging = false;
        this.selection = true;
      });
    }

    editor.canvas.renderAll();
  }, [editor]);

  const addBackground = () => {
    if (!editor || !fabric) {
      return;
    }

    fabric.Image.fromURL(
      imageInfor?.imageUrl ||
        "https://images.unsplash.com/photo-1505934333218-8fe21ff87e69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Zmxhc2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      (image) => {
        editor.canvas.setBackgroundImage(
          image,
          editor.canvas.renderAll.bind(editor.canvas)
        );
      }
    );
  };

  useEffect(() => {
    if (!editor || !fabric) {
      return;
    }
    editor.canvas.setHeight(editor.canvas.backgroundImage?.height);
    editor.canvas.setWidth(editor.canvas.backgroundImage?.width);
    addBackground();
    editor.canvas.renderAll();
  }, [editor?.canvas.backgroundImage]);

  useEffect(() => {
    if (!editor || !fabric) {
      return;
    }
    editor.canvas.freeDrawingBrush.color = color;
    editor.setStrokeColor(color);
  }, [color]);

  const toggleDraw = () => {
    editor.canvas.isDrawingMode = !editor.canvas.isDrawingMode;
  };

  const addText = () => {
    editor.addText("inset text");
  };

  const handleSaveImage = async () => {
    const svg = editor.canvas.toSVG();
    console.info(svg);
  };
  return (
    <div className={isOpen ? "block" : "hidden"}>
      <div
        className="backdrop fixed inset-0 z-[1] h-full w-full bg-[#1e1e1e] opacity-90"
        onClick={() => onClose()}
      ></div>
      <ToolOptions
        onHandleAddText={addText}
        onHandleDraw={toggleDraw}
        onHandleSaveImage={handleSaveImage}
      />
      <div className="model fixed left-1/2 top-1/2 z-10 h-[80%] -translate-x-1/2 -translate-y-1/2 transform">
        <FabricJSCanvas className="sample-canvas" onReady={onReady} />
      </div>
    </div>
  );
};

export default PopUp;
