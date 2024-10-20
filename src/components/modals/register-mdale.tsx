"use client";

import { useCallback, useState } from "react";

import useRegisterModal from "@/hooks/use-register-modal";
import useLoginModal from "@/hooks/use-login-modal";

import Input from "../input";
import Modal from "../modal";
import axios from "axios";
import toast from "react-hot-toast";
import { signIn } from "next-auth/react";

const RegisterModal = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();

  // Handle Submit Function
  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);

      await axios.post("/api/register", {
        email,
        name,
        username,
        password,
      });

      toast.success("Account created.");

      signIn("credentials", {
        email,
        password,
      });

      registerModal.onClose();
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong.");
    } finally {
      setIsLoading(false);
    }
  }, [registerModal, email, name, username, password]);

  // Toggle Modal Login & Register
  const toggleModal = useCallback(() => {
    if (isLoading) {
      return;
    }

    registerModal.onClose();
    loginModal.onOpen();
  }, [isLoading, loginModal, registerModal]);

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
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your Name"
        disabled={isLoading}
      />
      <Input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Your Username"
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

  // Footer Content In Footer Interface
  const footerContent = (
    <div className="mt-4 w-fit mx-auto">
      <p className=" text-neutral-400">
        Already have an account?{" "}
        <span
          className="text-white hover:underline cursor-pointer"
          onClick={toggleModal}
        >
          Sign in
        </span>
      </p>
    </div>
  );

  return (
    <Modal
      title="Create an account"
      body={bodyContent}
      actionLabel="Register"
      disabled={isLoading}
      onSubmit={onSubmit}
      onClose={registerModal.onClose}
      isOpen={registerModal.isOpen}
      footer={footerContent}
    />
  );
};

export default RegisterModal;
