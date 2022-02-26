import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { changeMetadata } from "../../../store/sectionsSlice";
import TextAreaAutoHeight from "../../common/TextAreaAutoHeight";

function EditorContent({ data }) {
  const dispatch = useDispatch();
  if (!data) {
    return (
      <div
        className={`flex h-full w-full flex-col items-center  bg-slate-200 p-4`}
      ></div>
    );
  }
  console.log(data);
  if (data.type === "welcome") {
    // console.log(data.config.display.fontSize);
    return (
      <div
        className={`flex h-full w-full flex-col items-center ${data.config.position} bg-slate-200 p-4`}
      >
        {data.metadata.title && (
          <TextAreaAutoHeight
            fontSize={data.config.display.fontSize}
            fontWeight={data.config.display.fontWeight}
            maxRows={2}
            value={data.metadata.title}
            onChange={(value) =>
              dispatch(
                changeMetadata({
                  type: "title",
                  data: value,
                })
              )
            }
          />
        )}
      </div>
    );
  }

  return (
    <div
      className={`flex h-full w-full flex-col items-center  bg-slate-200 p-4`}
    >
      {/* {data.metadata.attribute1 && (
        <TextAreaAutoHeight
          fontSize={config.body.fontSize}
          fontWeight={config.body.fontWeight}
          maxRows={1}
          value={data.metadata.attribute1}
          onChange={(e) => console.log(e)}
        />
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
