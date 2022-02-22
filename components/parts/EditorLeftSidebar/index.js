import Link from "next/link";
import { useEffect } from "react";
import { useSelector } from "react-redux";

function EditorLeftSidebar({ screens }) {
  //   useEffect(() => {
  //     console.log("Rerender");
  //   }, []);

  return (
    <div className="flex h-full w-full flex-col bg-zinc-100">
      <div className="mb-4 flex items-center justify-between border-b bg-zinc-50 px-4 py-2">
        <h6 className="font-semibold">Section</h6>
        <button className="h-8 w-8 rounded-sm bg-zinc-200 text-center text-white">
          +
        </button>
      </div>
      {screens.data.map((val, i) => (
        <div
          key={val.id}
          className="flex items-center justify-between border-b bg-white px-4 py-4 "
        >
          <Link
            href={"/collections/" + val.collections_id + "/design?p=" + val.id}
          >
            <a className="text-sm font-semibold text-zinc-700 ">{val.name}</a>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default EditorLeftSidebar;
