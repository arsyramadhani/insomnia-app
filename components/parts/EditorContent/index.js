import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import TextAreaAutoHeight from "../../common/TextAreaAutoHeight";

function EditorContent() {
  const dispatch = useDispatch();

  return (
    <div
      className={`flex h-full w-full flex-col items-center justify-center bg-slate-200 p-4`}
    >
      <TextAreaAutoHeight maxRows={2} onChange={(e) => console.log(e)} />
      {/* {data.metadata.attribute1 && (
       
      )}
      {data.metadata.title && (
        <TextAreaAutoHeight
          fontSize={config.display.fontSize}
          fontWeight={config.display.fontWeight}
          maxRows={2}
          value={data.metadata.title}
          onChange={(e) => console.log(e)}
        />
      )}
      {data.metadata.date && (
        <TextAreaAutoHeight
          fontSize={config.body.fontSize}
          fontWeight={config.body.fontWeight}
          maxRows={2}
          disabled
          value={data.metadata.date}
          onChange={(e) => console.log(e)}
        />
      )} */}
    </div>
  );
}

export default EditorContent;
