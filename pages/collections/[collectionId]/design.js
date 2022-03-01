import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MainLayout from "../../../components/Layout/MainLayout";
import EditorViewBox from "../../../components/parts/EditorViewBox";
import EditorLeftSidebar from "../../../components/parts/EditorLeftSidebar";
import EditorContent from "../../../components/parts/EditorContent";
import EditorOptions from "../../../components/parts/EditorOptions";

export default function Design() {
  const router = useRouter();
  const screens = useSelector((state) => state.screens);
  const [collectionId, setCollectionId] = useState("");

  const clickHandler = (param) => {
    router.push(param);
  };

  return (
    <>
      <div className="max-h-full w-72 border-r bg-zinc-50">
        {screens.data ? (
          <EditorLeftSidebar screens={screens} clickHandler={clickHandler} />
        ) : (
          <div></div>
        )}
      </div>
      <div className="  relative flex h-full min-h-full  flex-1  flex-col overflow-y-auto">
        {screens.data ? (
          <EditorViewBox height={800} width={414} scale={80}>
            <EditorContent />
          </EditorViewBox>
        ) : (
          <BlankEditorView />
        )}
      </div>
      {screens.data && (
        <div className="w-72 border-l bg-zinc-50">
          <EditorOptions />
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
