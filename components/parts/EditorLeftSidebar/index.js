function EditorLeftSidebar({ screens, clickHandler, currentScreen }) {
  //   console.log(screens);
  return (
    <div className="flex h-full w-full flex-col bg-zinc-50">
      <div className="mb-4 flex items-center justify-between border-b bg-zinc-50 px-4 py-2">
        <h6 className="font-semibold">Section</h6>
        <button className="h-8 w-8 rounded-sm bg-zinc-200 text-center text-white">
          +
        </button>
      </div>
      {screens.data.length > 0 &&
        screens.data.map((val, i) => (
          <div
            key={val.id}
            className={`flex cursor-pointer items-center justify-between border-b transition-all	 duration-75 ${
              val.id === currentScreen
                ? "bg-zinc-200 hover:bg-zinc-300"
                : "bg-zinc-50 hover:bg-zinc-100"
            }  px-4 py-4`}
            onClick={(e) =>
              clickHandler(
                `/collections/${val.collections_id}/design?p=${val.id}`
              )
            }
          >
            <a className="text-sm font-semibold text-zinc-700 ">{val.name}</a>
          </div>
        ))}
    </div>
  );
}

export default EditorLeftSidebar;
