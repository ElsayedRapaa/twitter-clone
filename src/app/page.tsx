import Container from "@/components/container";
import Header from "@/components/header";

import LoginModal from "@/components/modals/login-mdale";
import RegisterModal from "@/components/modals/register-mdale";

export default function Home() {
  return (
    <main
      className="
        h-screen
        bg-black
      "
    >
      <LoginModal />
      <RegisterModal />
      <Container>
        <Header label="Home" />
      </Container>
    </main>
  );
}
