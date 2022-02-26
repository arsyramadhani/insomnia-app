import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import MainLayout from "../../../components/Layout/MainLayout";
import EditorContent from "../../../components/parts/EditorContent";

import EditorLeftSidebar from "../../../components/parts/EditorLeftSidebar";
import EditorOptions from "../../../components/parts/EditorOptions";
import EditorView from "../../../components/parts/EditorView";
import EditorViewBox from "../../../components/parts/EditorViewBox";
import { fetchScreenByCollectionId } from "../../../store/screensSlice";

export default function Design() {
  const router = useRouter();
  const screens = useSelector((state) => state.screens);
  const dispatch = useDispatch();
  const [collectionId, setCollectionId] = useState("");
  const [currentScreen, setCurrentScreen] = useState("");

  useEffect(() => {
    if (router.query.collectionId) {
      setCollectionId(router.query.collectionId);
      console.log(router.query.collectionId);
    }
    if (router.query.p) {
      setCurrentScreen(router.query.p);
      console.log("currentScreen");
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

  return (
    <>
      <div className="max-h-full w-72 border-r bg-zinc-50">
        <EditorLeftSidebar screens={screens} clickHandler={clickHandler} />
      </div>
      {currentScreen && (
        <div className="w-72 border-l bg-zinc-50">
          <EditorOptions />
        </div>
      )}
      <div className="   flex  min-h-full  flex-1  flex-col overflow-y-auto">
        {currentScreen ? (
          <EditorViewBox height={900} width={400} scale={60}>
            <EditorContent />
          </EditorViewBox>
        ) : (
          <BlankEditorView />
        )}
      </div>
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
