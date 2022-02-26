import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MainLayout from "../../../components/Layout/MainLayout";
import EditorContent from "../../../components/parts/EditorContent";
import EditorLeftSidebar from "../../../components/parts/EditorLeftSidebar";
import EditorOptions from "../../../components/parts/EditorOptions";
import EditorViewBox from "../../../components/parts/EditorViewBox";
import { fetchScreenByCollectionId } from "../../../store/screensSlice";
import { filterSection } from "../../../store/sectionsSlice";

export default function Design() {
  const router = useRouter();
  const screens = useSelector((state) => state.screens);
  const dispatch = useDispatch();
  const [collectionId, setCollectionId] = useState("");
  const [currentScreen, setCurrentScreen] = useState("");
  const sections = useSelector((state) => state.sections.data);
  const currentData = useSelector((state) => state.sections.data);

  useEffect(() => {
    if (router.query.collectionId) {
      setCollectionId(router.query.collectionId);
    }
    if (router.query.p) {
      setCurrentScreen(router.query.p);
    }
    return () => {
      setCollectionId("");
      setCurrentScreen("");
    };
  }, [router.query]);

  useEffect(() => {
    if (collectionId !== "") {
      dispatch(fetchScreenByCollectionId(collectionId));
      console.log("dispatched");
    }
  }, [dispatch, collectionId]);

  const clickHandler = (param) => {
    router.push(param);
  };

  const theme = {};

  useEffect(() => {
    currentScreen && dispatch(filterSection(currentScreen));
  }, [dispatch, currentScreen]);

  return (
    <>
      <div className="max-h-full w-72 border-r bg-zinc-50">
        <EditorLeftSidebar screens={screens} clickHandler={clickHandler} />
      </div>
      <div className="  relative flex h-full min-h-full  flex-1  flex-col overflow-y-auto">
        {currentData ? (
          <EditorViewBox height={800} width={414} scale={80}>
            <EditorContent data={currentData} />
          </EditorViewBox>
        ) : (
          <BlankEditorView />
        )}
      </div>
      {currentData && (
        <div className="w-72 border-l bg-zinc-50">
          <EditorOptions data={currentData} />
        </div>
      )}
    </>
  );
}

function BlankEditorView() {
  return (
    <div className="  -mt-4 flex h-full w-full  flex-col items-center justify-center  ">
      <p>Please add or select some screen</p>
    </div>
  );
}

Design.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
