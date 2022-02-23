import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import MainLayout from "../../../components/Layout/MainLayout";

import EditorLeftSidebar from "../../../components/parts/EditorLeftSidebar";
import EditorOptions from "../../../components/parts/EditorOptions";
import EditorView from "../../../components/parts/EditorView";
import { fetchScreenByCollectionId } from "../../../store/screensSlice";

export default function Design() {
  const router = useRouter();
  const screens = useSelector((state) => state.screens);
  const dispatch = useDispatch();
  const [cId, setCId] = useState("");

  useEffect(() => {
    router.query.collectionId && setCId(router.query.collectionId);
    console.log(router.query.collectionId);
    return () => {
      setCId("");
    };
  }, [router.query.collectionId]);

  useEffect(() => {
    if (cId) {
      dispatch(fetchScreenByCollectionId(cId));
      console.log("ok");
    }
  }, [dispatch, cId]);


  return (
    <>
      <div className="max-h-full w-72 border-r bg-zinc-50">
        <EditorLeftSidebar screens={screens} />
      </div>
      <div className="w-72 border-l bg-zinc-50">

        <EditorOptions />
      </div>
      <div className="relative  max-h-full max-w-full flex-1 overflow-y-auto   bg-zinc-100  pt-8">
        <EditorView />
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
