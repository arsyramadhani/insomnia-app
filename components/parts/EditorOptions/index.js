import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export default function EditorOptions({ data }) {
  return (
    <div className="flex h-full w-full flex-col p-4">
      <p className="mb-2">Settings</p>
      <hr />
      <label htmlFor="position">Position</label>
      <select
        name="position"
        id="position"
        className="rounded-md border-2 border-neutral-700 p-2"
        // value={currentData.position}
        onChange={(e) => console.log(e.target.value)}
      >
        <option value="justify-start">Top</option>
        <option value="justify-center">Center</option>
        <option value="justify-end">Bottom</option>
      </select>
    </div>
  );
}
