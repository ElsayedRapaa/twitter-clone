import Header from "@/components/header";
import LoginModal from "@/components/modals/login-mdale";
import RegisterModal from "@/components/modals/register-mdale";

export default function Home() {
  return (
    <main>
      <LoginModal />
      <RegisterModal />
      <Header label="Home" />
    </main>
  );
}
