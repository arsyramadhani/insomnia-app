import { useSelector } from "@reduxjs/toolkit";

function EditorLeftSidebar({ screens, clickHandler, currentScreen }) {
  return (
    <div className="flex h-full w-full flex-col bg-zinc-50">
      <div className=" flex items-center justify-between border-b bg-zinc-50 px-4 py-2">
        <h6 className="font-semibold">Section</h6>
        <button className="h-8 w-8 rounded-sm bg-zinc-200 text-center text-white">
          +
        </button>
      </div>
      {screens.data.map((val, i) => (
        <div
          key={val.id}
          className={`flex cursor-pointer items-center justify-between border-b px-4 py-4  
           transition-all duration-75`}
          onClick={(e) =>
            clickHandler(
              `/collections/${val.collections_id}/design?p=${val.id}`
            )
          }
        >
          <a className="text-sm font-semibold text-zinc-700 ">{val.title}</a>
        </div>
      ))}
    </div>
  );
}

export default EditorLeftSidebar;
