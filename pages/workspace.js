import { useRouter } from "next/router";
import MainLayout from "../components/Layout/MainLayout";

export default function Workspace() {
  const router = useRouter();

  const clickHandler = () => {
    router.push("/editor/1292edsd/edit");
  };

  return (
    <div className="flex w-full">
      <div className="w-2/12 border-r-2 py-6 px-0 text-sm">
        <ul>
          <li className="cursor-pointer   bg-zinc-600 px-4 py-3 text-zinc-50">
            <a>Workspace</a>
          </li>
        </ul>
      </div>
      <div className="flex h-full w-full flex-1 flex-col gap-4 bg-zinc-100 p-6">
        <div>My Workspace</div>
        <div
          onClick={clickHandler}
          className="flex w-full cursor-pointer items-center justify-between rounded-md border bg-zinc-50 px-6 py-4 shadow-sm shadow-zinc-200 transition-all hover:shadow-md"
        >
          <div>
            <p className="font-medium text-zinc-800">
              Undangan Pernikahan Abla & Able
            </p>
            <p className="text-sm font-normal text-zinc-600">
              Created on: 19 Feb 2022
            </p>
          </div>
          <div>x</div>
        </div>
      </div>
    </div>
  );
}

Workspace.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
