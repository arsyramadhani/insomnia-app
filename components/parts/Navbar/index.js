import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import supabase from "../../../services/supabaseClient";

export default function Navbar({ editorMenu, query, currentPath }) {
  const router = useRouter();
  const logoutUser = async (e) => {
    e.preventDefault();
    const { error } = await supabase.auth.signOut();
    !error && router.push("/auth/login");
  };

  return (
    <div className=" sticky top-0 flex h-14 items-center justify-between gap-4 border-b bg-neutral-50 px-4">
      {/* Logo */}
      <div>
        <Link href="/collections">
          <a className="font-['Playfair_Display'] text-xl font-bold text-zinc-800">
            <span>Insomnia.app</span>
          </a>
        </Link>
      </div>
      <ul className="flex h-full w-full flex-1 justify-end justify-items-center gap-1 text-sm font-semibold text-zinc-700  ">
        {editorMenu &&
          editorMenu.map((val, i) => (
            <li
              key={i}
              className="relative my-auto flex h-full w-fit cursor-pointer flex-col items-center justify-center     text-center"
            >
              <Link
                // href={currentPath + "/" + query + "/" + val.title.toLowerCase()}
                href={{
                  pathname:
                    "/collections/[collectionId]/" + val.title.toLowerCase(),
                  query: { collectionId: query },
                }}
              >
                <a className="  px-3 py-3">{val.title}</a>
              </Link>
              {currentPath ===
                "/collections/[collectionId]/" + val.title.toLowerCase() && (
                <div className="absolute bottom-0 h-[3px] w-full bg-zinc-600" />
              )}
            </li>
          ))}
      </ul>
      <div>
        <button
          className="cursor-pointer rounded-md bg-zinc-200 px-4 py-2"
          onClick={(e) => logoutUser(e)}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

// function EditorNavigation( ) {
//   return (
//     <ul className="flex h-full w-full flex-1 justify-end justify-items-center gap-1 text-sm font-semibold text-zinc-700  ">
//       {EditorMenu.map((val, i) => (
//         <li
//           key={i}
//           className="relative my-auto flex h-full w-fit cursor-pointer flex-col items-center justify-center   px-2   text-center"
//         >
//           <Link
//             href={
//               "/collections/" + collectionId + "/" + val.title.toLowerCase()
//             }
//           >
//             <a>{val.title}</a>
//           </Link>
//           {val.path === pathName && (
//             <div className="absolute bottom-0 h-[3px] w-full bg-zinc-600" />
//           )}
//         </li>
//       ))}
//     </ul>
//   );
// }
