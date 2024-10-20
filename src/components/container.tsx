import Header from "./header";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="col-span-3 lg:col-span-2 border-x-[1px] border-neutral-800">
      <Header label="Home" />
      {children}
    </div>
  );
};

export default Container;
