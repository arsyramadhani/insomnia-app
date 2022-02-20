import dynamic from "next/dynamic";
import MainLayout from "../../../components/Layout/MainLayout";
import LoadingScreen from "../../../components/parts/LoadingScreen";

const EditorView = dynamic(
  () => import("../../../components/parts/EditorView"),
  { loading: () => <LoadingScreen /> }
);
const EditorLeftSidebar = dynamic(
  () => import("../../../components/parts/EditorLeftSidebar"),
  { loading: () => <LoadingScreen /> }
);

export default function Edit() {
  return (
    <>
      <div className="max-h-full w-72 border-r bg-zinc-50">
        <EditorLeftSidebar />
      </div>
      <div className="w-96 border-l bg-zinc-50"></div>
      <div className="relative  max-h-full max-w-full flex-1 overflow-y-auto   bg-zinc-100  pt-8">
        <EditorView />
      </div>
    </>
  );
}

Edit.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
