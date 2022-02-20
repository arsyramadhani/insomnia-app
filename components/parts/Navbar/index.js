import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import supabase from "../../../services/supabaseClient";

const EditorMenu = [
  {
    title: "Overview",
    path: "/collections/[collectionId]/overview",
  },
  {
    title: "Design",
    path: "/collections/[collectionId]/design",
  },
  {
    title: "Guests",
    path: "/collections/[collectionId]/guests",
  },
  {
    title: "Privacy",
    path: "/collections/[collectionId]/privacy",
  },
  {
    title: "Integration",
    path: "/collections/[collectionId]/integration",
  },
  {
    title: "Settings",
    path: "/collections/[collectionId]/settings",
  },
];
export default function Navbar() {
  const router = useRouter();
  const [currentPath, setCurrentPath] = useState("");
  const [collectionId, setCollectionId] = useState("");
  const logoutUser = async (e) => {
    e.preventDefault();
    const { error } = await supabase.auth.signOut();
    !error && router.push("/auth/login");
  };

  useEffect(() => {
    setCurrentPath(router.pathname);
    setCollectionId(router.query.collectionId);
  }, [router.pathname, router.query.collectionId]);

  console.log(collectionId);

  return (
    <div className=" sticky top-0 flex h-14 items-center justify-between gap-4 border-b bg-neutral-50 px-4">
      {/* Logo */}
      <div>
        <Link href="/collections">
          <a className="font-['Playfair_Display'] text-xl font-bold text-zinc-800">
            <span>Haridinanti.</span>
          </a>
        </Link>
      </div>
      {collectionId ? (
        <EditorNavigation collectionId={collectionId} pathName={currentPath} />
      ) : (
        <div>
          <button
            className="cursor-pointer rounded-md bg-zinc-200 px-4 py-2"
            onClick={(e) => logoutUser(e)}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

function EditorNavigation({ collectionId, pathName }) {
  return (
    <ul className="flex h-full w-full flex-1 justify-end justify-items-center gap-1 text-sm font-semibold text-zinc-700  ">
      {EditorMenu.map((val, i) => (
        <li
          key={i}
          className="relative my-auto flex h-full w-fit cursor-pointer flex-col items-center justify-center   px-2   text-center"
        >
          <Link
            href={
              "/collections/" + collectionId + "/" + val.title.toLowerCase()
            }
          >
            <a>{val.title}</a>
          </Link>
          {val.path === pathName && (
            <div className="absolute bottom-0 h-[3px] w-full bg-zinc-600" />
          )}
        </li>
      ))}
    </ul>
  );
}
