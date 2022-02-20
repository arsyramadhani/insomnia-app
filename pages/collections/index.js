import Link from "next/link";
import { useSelector } from "react-redux";
import MainLayout from "../../components/Layout/MainLayout";

function Collections() {
  const listCollections = useSelector((state) => state.collections);
  console.log(listCollections);
  return (
    <div className="flex w-full">
      <div className="w-2/12 border-r-2 py-6 px-0 text-sm">
        <ul>
          <li className="cursor-pointer   bg-zinc-600 px-4 py-3 text-zinc-50">
            <a>Collections</a>
          </li>
        </ul>
      </div>
      <div className="flex h-full w-full flex-1 flex-col gap-2 bg-zinc-100 p-6">
        <div className="mb-4">My Collections</div>
        {listCollections.map((val, i) => (
          <div
            key={val.id}
            className="flex w-full   items-center justify-between rounded-md border bg-zinc-50 px-6 py-4 shadow-sm shadow-zinc-200 transition-all hover:shadow-md"
          >
            <div>
              <Link href={"/collections/" + val.id + "/design"}>
                <a className="font-medium text-zinc-800">{val.title}</a>
              </Link>
              <p className="text-sm font-normal text-zinc-600">
                Created on: {val.last_update}
              </p>
            </div>
            <div>x</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Collections;

Collections.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
