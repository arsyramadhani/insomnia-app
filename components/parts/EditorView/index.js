import { useState } from "react";

const scaleConstant = [
  "scale-[30%]",
  "scale-[40%]",
  "scale-[50%]",
  "scale-[60%]",
  "scale-[70%]",
  "scale-[80%]",
  "scale-[90%]",
  "scale-[100%]",
];

function EditorView() {
  const [viewScale, setViewScale] = useState(4);

  const scaleUp = () => {
    setViewScale((state) => (state < 7 ? state + 1 : 7));
  };
  const scaleDown = () => {
    setViewScale((state) => (state > 0 ? state - 1 : 0));
  };

  return (
    <>
      <div className="top-0 mx-auto h-[914px] w-[412px]  ">
        <div
          className={`h-full w-full origin-top ${scaleConstant[viewScale]}	rounded-lg    border border-zinc-300 bg-zinc-300`}
        >
          asdasddaksljsa {viewScale}
        </div>
      </div>
      <div className="sticky bottom-4   right-4 ml-auto flex w-fit items-center rounded-md bg-zinc-800 font-normal text-white  ">
        <button onClick={scaleDown} className="h-10 w-10 ">
          -
        </button>
        <div className="w-12 text-center">
          {scaleConstant[viewScale]
            .substring(6)
            .replace("[", "")
            .replace("]", "")}
        </div>
        <button onClick={scaleUp} className="h-10 w-10">
          +
        </button>
      </div>
    </>
  );
}

export default EditorView;
