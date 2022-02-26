import React, { useEffect, useRef, useState } from "react";

function EditorContent() {
  return (
    <div className=" flex h-full w-full flex-col items-center justify-center bg-slate-200 p-4">
      {/* <h1 className="text-2xl">Testing</h1> */}
      <TextAreaAutoHeight />
    </div>
  );
}

function TextAreaAutoHeight({ value = "Type some Text here" }) {
  const textAreaRef = useRef(null);
  const [currentValue, setCurrentValue] = useState(value);

  useEffect(() => {
    textAreaRef.current.style.height = "0px";
    const scrollHeight = textAreaRef.current.scrollHeight;
    textAreaRef.current.style.height =
      scrollHeight < 64 ? scrollHeight + 4 + "px" : 64 + 4 + "px";
  }, [currentValue]);

  const changeHandler = (e) => {
    const scrollHeight = textAreaRef.current.scrollHeight;
    scrollHeight <= 64 && setCurrentValue(e.target.value.trimStart());
  };

  return (
    <textarea
      ref={textAreaRef}
      className="block w-full resize-none appearance-none overflow-hidden  rounded-md  border-2 border-solid border-transparent bg-transparent text-center  text-2xl outline-none  focus:border-dashed   focus:border-gray-700 "
      value={currentValue}
      onChange={(e) => changeHandler(e)}
    ></textarea>
  );
}

export default EditorContent;
