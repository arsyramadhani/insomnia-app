import { useSelector } from "react-redux";
import LoadingScreen from "../parts/LoadingScreen";

const Container = ({ children }) => {
  return (
    <div className="flex h-full max-h-full w-full overflow-y-hidden  bg-zinc-100">
      {children}
    </div>
  );
};

export default Container;
