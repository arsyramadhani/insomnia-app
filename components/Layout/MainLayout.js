import { useRouter } from "next/router";
import { useEffect } from "react";
import { Provider } from "react-redux";
import supabase from "../../services/supabaseClient";
import { store } from "../../store/rootReducer";
import Navbar from "../parts/Navbar";
import Container from "./Container";

const MainLayout = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    const session = supabase.auth.session();
    !session && router.push("/auth/login");
  }, [router]);

  return (
    <Provider store={store}>
      <div className="flex h-screen  min-h-screen w-full flex-col antialiased">
        <Navbar />
        <Container>{children}</Container>
      </div>
    </Provider>
  );
};

export default MainLayout;
