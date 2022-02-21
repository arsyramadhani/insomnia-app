import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import MainLayout from "../../../components/Layout/MainLayout";
import EditorOptions from "../../../components/parts/EditorOptions";
import LoadingScreen from "../../../components/parts/LoadingScreen";
import { fetchScreenByCollectionId } from "../../../store/screensSlice";

const EditorView = dynamic(
  () => import("../../../components/parts/EditorView"),
  { loading: () => <LoadingScreen /> }
);
const EditorLeftSidebar = dynamic(
  () => import("../../../components/parts/EditorLeftSidebar"),
  { loading: () => <LoadingScreen /> }
);

export default function Design() {
  const { data, status } = useSelector((state) => state.screens);
  const [cId, setCId] = useState("");
  const [currentPath, setCurrentPath] = useState("");
  const [currentScreen, setCurrentScreen] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();
  useEffect(() => {
    const { query, route } = router;

    cId !== query.collectionId && setCId(query.collectionId);
    currentPath !== route && setCurrentPath(route);

    query.collectionId &&
      cId !== query.collectionId &&
      dispatch(fetchScreenByCollectionId(query.collectionId));
  }, [router.query]);

  useEffect(() => {
    data.length > 0 &&
      cId &&
      router.push(
        router.pathname.replace("[collectionId]", cId) + "?p=" + data[0].id
      );
  }, [data, cId]);

  useEffect(() => {
    currentScreen !== router.query.p && setCurrentScreen(router.query.p);
  }, [router.query.p]);

  const clickHandler = (path) => {
    router.push(path);
  };

  return (
    <>
      <div className="max-h-full w-72 border-r bg-zinc-50">
        <EditorLeftSidebar
          screens={data}
          clickHandler={clickHandler}
          currentScreen={currentScreen}
        />
      </div>
      <div className="w-72   border-r bg-zinc-50">
        <EditorOptions />
      </div>
      <div className="relative  max-h-full max-w-full flex-1 overflow-y-auto   bg-zinc-100  pt-8">
        {data.length > 0 ? <EditorView /> : <BlankEditorView />}
      </div>
    </>
  );
}

function BlankEditorView() {
  return (
    <div className="  -mt-4 flex h-full w-full  flex-col items-center justify-center  ">
      <p>Please add some screen to start</p>
    </div>
  );
}

Design.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
