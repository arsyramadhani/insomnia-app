import React, { useEffect, useRef, useState } from "react";

function EditorContent() {
  return (
    <div className=" flex h-full w-full flex-col items-center justify-center bg-slate-200 p-4">
      {/* <h1 className="text-2xl">Testing</h1> */}
      <TextAreaAutoHeight fontSize={"text-2xl"} />
    </div>
  );
}

function TextAreaAutoHeight({
  value = "Type some Text here",
  fontSize = "text-lg",
}) {
  const textAreaRef = useRef(null);
  const hiddenRef = useRef(null);
  const [currentValue, setCurrentValue] = useState(value);
  const [fixScrollHeight, setFixScrollHeight] = useState(0);

  useEffect(() => {
    textAreaRef.current.style.height = "0px";
    const scrollHeight = textAreaRef.current.scrollHeight;

    if (scrollHeight % fixScrollHeight !== 0) {
      setFixScrollHeight(scrollHeight);
    }

    textAreaRef.current.style.height =
      scrollHeight <= fixScrollHeight * 2
        ? scrollHeight + 0 + "px"
        : fixScrollHeight * 2 + 0 + "px";
  }, [currentValue, fixScrollHeight]);

  const changeHandler = (e) => {
    const scrollHeight = textAreaRef.current.scrollHeight;
    if (scrollHeight <= fixScrollHeight * 2) {
      setCurrentValue(e.target.value.trimStart());
    }
  };

  return (
    <>
      <textarea
        ref={textAreaRef}
        className={`block w-full   resize-none appearance-none overflow-hidden rounded-md  border-2  border-solid border-transparent bg-transparent text-center ${fontSize}    outline-none  focus:border-dashed   focus:border-gray-700`}
        value={currentValue}
        onChange={(e) => changeHandler(e)}
      ></textarea>
    </>
  );
}

export default EditorContent;
