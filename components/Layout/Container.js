import { useSelector } from "react-redux";
import LoadingScreen from "../parts/LoadingScreen";

const Container = ({ children }) => {
  const isLoading = useSelector((state) => state.loadingui.value);

  return (
    <div className="flex h-full max-h-full w-full overflow-y-hidden  bg-zinc-100">
      {isLoading ? <LoadingScreen /> : children}
    </div>
  );
};

export default Container;
