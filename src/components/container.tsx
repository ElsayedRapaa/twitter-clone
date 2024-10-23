import LoginModal from "./modals/login-mdale";
import RegisterModal from "./modals/register-mdale";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <section className="col-span-3 lg:col-span-2 border-x-[1px] border-neutral-800 h-full">
      <LoginModal />
      <RegisterModal />
      {children}
    </section>
  );
};

export default Container;
