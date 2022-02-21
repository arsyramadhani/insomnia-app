import Input from "../../common/Input";

export default function EditorOptions() {
  return (
    <div className="flex h-full w-full flex-col p-4">
      <p className="mb-2">Settings</p>
      <hr />
      <label htmlFor="test">Title</label>
      <input
        type="text"
        name="test"
        id="test"
        className="h-8 rounded-md bg-zinc-50 text-sm"
      />
    </div>
  );
}
