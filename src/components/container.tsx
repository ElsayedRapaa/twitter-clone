import FollowBar from "./follow-bar";
import Sidebar from "./sidebar/sidebar";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="h-full mx-auto xl:px-30 max-w-6xl">
      <div className="grid grid-cols-4 h-full">
        <Sidebar />
        <div className="col-span-3 lg:col-span-2 border-x-[1px] border-neutral-800">
          {children}
        </div>
        <FollowBar />
      </div>
    </div>
  );
};

export default Container;
