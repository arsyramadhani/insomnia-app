import { useEffect, useState } from "react";

function EditorViewBox({ height, width, scale, children }) {
  const [viewBox, setViewBox] = useState({ height: 0, width: 0 });
  const [originSize, setOriginSize] = useState({
    height: height,
    width: width,
  });
  const [viewScale, setViewScale] = useState(scale);
  const [isViewBoxShow, setisViewBoxShow] = useState(false);

  function scaleUp() {
    setViewScale((state) => (state < 150 ? state + 10 : 150));
  }
  function scaleDown() {
    setViewScale((state) => (state > 10 ? state - 10 : 10));
  }

  //   console.log({
  //     viewScale: viewScale,
  //     originSize: originSize,
  //     viewBox: viewBox,
  //   });

  useEffect(() => {
    setOriginSize({
      height: height,
      width: width,
    });
    console.log("originsize");
  }, [height, width]);

  useEffect(() => {
    setViewScale(scale);
    console.log("scale");
  }, [scale]);

  useEffect(() => {
    setViewBox({
      height: originSize.height * (viewScale / 100),
      width: originSize.width * (viewScale / 100),
    });
    console.log("viewscale");
  }, [viewScale]);

  //   useEffect(() => {
  //     if (viewBox.height > 0 && !isViewBoxShow) {
  //       setisViewBoxShow(true);
  //       console.log("viewBox");
  //     }
  //   }, [viewBox]);

  return (
    <>
      {viewBox.height > 0 && (
        <>
          {/* <div
            style={{
              backgroundColor: "green",
              height: "20px",
              width: "100%",
              zIndex: "10",
            }}
          ></div> */}
          <div
            className="origin-top-left transform transition-all  "
            style={{
              height: viewBox.height + "px",
              width: viewBox.width + "px",
              alignSelf: "center",
              margin: "auto",
            }}
          >
            <div
              className="origin-top-left  transform transition-all "
              style={{
                height: originSize.height + "px",
                width: originSize.width + "px",
                display: "block",
                transform: "scale(" + viewScale / 100 + ")",
              }}
            >
              {children}
            </div>
          </div>
        </>
      )}
      <div className="absolute   bottom-4  right-4 ml-auto flex h-10 w-fit items-center rounded-md bg-zinc-800 font-normal text-white  ">
        <button onClick={scaleDown} className="h-10 w-10 ">
          -
        </button>
        <div className="w-12 text-center">{viewScale}</div>
        <button onClick={scaleUp} className="h-10 w-10">
          +
        </button>
      </div>
    </>
  );
}

export default EditorViewBox;

// Things are good for us and the rest of me is tring
