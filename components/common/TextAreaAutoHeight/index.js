import React, { useEffect, useRef, useState } from "react";

function TextAreaAutoHeight({
  placeholder = "Type some Text here",
  value,
  disabled = false,
  onChange,
  fontSize,
  fontWeight,
  maxRows = 1,
  config = {},
}) {
  const textAreaRef = useRef(null);
  const [currentValue, setCurrentValue] = useState(value ? value : placeholder);
  const [fixScrollHeight, setFixScrollHeight] = useState(0);

  useEffect(() => {
    textAreaRef.current.style.height = "0px";
    const scrollHeight = textAreaRef.current.scrollHeight;
    if (fixScrollHeight === 0) {
      setFixScrollHeight(scrollHeight);
    }
    textAreaRef.current.style.height =
      scrollHeight < fixScrollHeight * maxRows
        ? scrollHeight + 4 + "px"
        : fixScrollHeight * maxRows + 4 + "px";
  }, [currentValue, fixScrollHeight, maxRows]);

  const changeHandler = (e) => {
    const scrollHeight = textAreaRef.current.scrollHeight;
    if (scrollHeight <= fixScrollHeight * maxRows) {
      setCurrentValue(e.target.value.trimStart());
      onChange(e.target.value.trimStart());
    }
  };

  return (
    <>
      <textarea
        ref={textAreaRef}
        className={`block w-full  ${fontWeight}  ${fontSize} resize-none appearance-none overflow-hidden rounded-md  border-2  border-solid border-transparent bg-transparent text-center    outline-none  focus:border-dashed   focus:border-gray-700`}
        value={currentValue}
        disabled={disabled}
        onChange={(e) => changeHandler(e)}
      ></textarea>
    </>
  );
}

export default TextAreaAutoHeight;
