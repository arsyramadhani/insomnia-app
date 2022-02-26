import { useEffect, useState } from "react";

function EditorViewBox() {
  const [viewPort, setViewport] = useState({
    screenH: 600,
    screenW: 300,
    modH: 300,
    modW: 150,
    scale: 50,
  });
  console.log(viewPort);

  const resizeUp = () => {
    setViewport((prevState) => ({
      ...prevState,
      scale: prevState.scale < 100 ? prevState.scale + 10 : 100,
      modW: (prevState.scale / 100) * prevState.screenW,
      modH: (prevState.scale / 100) * prevState.screenH,
    }));
  };
  const resizeDown = () => {
    setViewport((prevState) => ({
      ...prevState,
      scale: prevState.scale > 30 ? prevState.scale - 10 : 30,
      modW: (prevState.scale / 100) * prevState.screenW,
      modH: (prevState.scale / 100) * prevState.screenH,
    }));
  };

  return (
    <div className="flex h-full w-full  ">
      <div
        className="relative z-0 flex flex-1 scale-100"
        style={{ gridArea: "canvas" }}
      >
        <div className="b m-auto flex shrink-0 justify-center  ">
          <div className="block">
            <div className="relative block">
              <div className="relative flex flex-col">
                <div className="block overflow-hidden shadow-lg">
                  {/* Size Berubah */}
                  <div
                    className={`m-0 block   `}
                    style={{ height: viewPort.modH, width: viewPort.modW }}
                  >
                    {/* Size Canvas */}
                    <div
                      style={{
                        height: viewPort.screenH,
                        width: viewPort.screenW,
                        scale: 1,
                      }}
                      className={`block   bg-cyan-400`}
                    >
                      {/* Size Canvas */}
                      <div
                        style={{
                          transformOrigin: (0, 0),
                          direction: "ltr",
                          height: viewPort.modH,
                          width: viewPort.modW,
                        }}
                        className={`relative block  bg-cyan-600`}
                      >
                        {/* <div className="absolute top-0 right-0 bottom-0 left-0 block overflow-hidden outline-none">
                          <div className="flex h-full w-full flex-col items-center justify-center bg-yellow-400">
                            xczdsaaaslpdsadlad
                          </div>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-4 right-4 ml-auto flex items-center rounded-md bg-zinc-800 font-normal text-white">
        <button onClick={resizeDown} className="h-10 w-10 ">
          -
        </button>
        <div className="w-12 text-center">{viewPort.scale}</div>
        <button onClick={resizeUp} className="h-10 w-10">
          +
        </button>
      </div>
    </div>
  );
}

export default EditorViewBox;
