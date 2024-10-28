/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import useLoginModal from "@/hooks/use-login-modal";
import usePosts from "@/hooks/use-posts";
import useRegisterModal from "@/hooks/use-register-modal";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useCallback, useState } from "react";
import toast from "react-hot-toast";
import Button from "./button";
import Avatar from "./avatar";

interface FormProps {
  postId?: string;
  isComment?: boolean;
  placeholder: string;
}

const Form: React.FC<FormProps> = ({ postId, isComment, placeholder }) => {
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();
  const { data: session } = useSession();
  const userId = session?.user?.id;

  const { mutate: mutatePosts } = usePosts();

  const [body, setBody] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);

      await axios.post(`api/post?userId=${userId}`, { body });

      toast.success("Tweet created");
      setBody("");
      mutatePosts();
    } catch (error) {
      toast.error("Shomthing went wrong");
    } finally {
      setIsLoading(false);
    }
  }, [body, userId, mutatePosts]);

  return (
    <div className="border-b-[1px] border-neutral-800 px-5 py-2">
      {session ? (
        <div className="flex gap-4">
          <Avatar userId={userId as string} />
          <div className="w-full">
            <textarea
              disabled={isLoading}
              value={body}
              onChange={(e) => setBody(e.target.value)}
              placeholder={placeholder}
              className="
                text-white
                bg-black
                disabled:opacity-80
                resize-none
                mt-3
                ring-0
                outline-none
                placeholder-neutral-500
                w-full
                peer
              "
            ></textarea>
            <hr className="opacity-0 peer-focus:opacity-100 h-[1px] w-full border-sky-500 transition" />
            <div className="flex justify-end mt-2">
              <Button
                label="Tweet"
                onClick={onSubmit}
                disabled={isLoading || !body}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="py-8">
          <h1 className="text-center text-2xl font-bold mb-4">
            Welcome To Twitter
          </h1>
          <div className="flex items-center justify-center gap-x-4">
            <Button label="Login" onClick={loginModal.onOpen} />
            <Button secondary label="Register" onClick={registerModal.onOpen} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Form;
