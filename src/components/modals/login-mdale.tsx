"use client";

import { useCallback, useState } from "react";

import useLoginModal from "@/hooks/use-login-modal";
import useRegisterModal from "@/hooks/use-register-modal";

import Input from "../input";
import Modal from "../modal";

const LoginModal = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();

  // Handle Submit Function
  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);

      // TODO ADD LOGIN

      loginModal.onClose();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [loginModal]);

  // Toggle Modal Login & Register
  const toggleModal = useCallback(() => {
    if (isLoading) {
      return;
    }

    loginModal.onClose();
    registerModal.onOpen();
  }, [loginModal, registerModal, isLoading]);

  // Body Content In Modal Interface
  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your Email"
        disabled={isLoading}
      />
      <Input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Your Password"
        disabled={isLoading}
      />
    </div>
  );

  // Footer Content In Modal Interface
  const footerContent = (
    <div className="mt-4 w-fit mx-auto">
      <p className=" text-neutral-400">
        First time useing twitter?{" "}
        <span
          className="text-white hover:underline cursor-pointer"
          onClick={toggleModal}
        >
          Create an account
        </span>
      </p>
    </div>
  );

  return (
    <Modal
      title="Login"
      body={bodyContent}
      actionLabel="Sign in"
      disabled={isLoading}
      onSubmit={onSubmit}
      onClose={loginModal.onClose}
      isOpen={loginModal.isOpen}
      footer={footerContent}
    />
  );
};

export default LoginModal;
