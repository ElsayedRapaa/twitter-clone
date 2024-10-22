interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="col-span-3 lg:col-span-2 border-x-[1px] border-neutral-800">
      {children}
    </div>
  );
};

export default Container;
