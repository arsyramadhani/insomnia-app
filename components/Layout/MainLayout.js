import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import supabase from "../../services/supabaseClient";
import { store } from "../../store/rootReducer";
import Navbar from "../parts/Navbar";
import Container from "./Container";
const editorMenu = [
  {
    title: "Overview",
  },
  {
    title: "Design",
  },
  {
    title: "Guests",
  },
  {
    title: "Privacy",
  },
  {
    title: "Integration",
  },
  {
    title: "Settings",
  },
];
const MainLayout = ({ children }) => {
  const router = useRouter();
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    const session = supabase.auth.session();
    !session && router.push("/auth/login");
  }, [router]);

  return (
    <Provider store={store}>
      <div className="flex h-screen  min-h-screen w-full flex-col antialiased">
        <Navbar
          editorMenu={router.query && router.query.collectionId && editorMenu}
          currentPath={router.query && router.pathname}
          query={router.query && router.query.collectionId}
        />
        <Container>{children}</Container>
      </div>
    </Provider>
  );
};

export default MainLayout;
