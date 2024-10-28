/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import useLoginModal from "@/hooks/use-login-modal";
import { formatDistanceToNowStrict } from "date-fns";
import { useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";
import Avatar from "../avatar";
import { AiOutlineHeart, AiOutlineMessage } from "react-icons/ai";

interface PostItemProps {
  userId?: string;
  data: Record<string, any>;
}

const PostItem: React.FC<PostItemProps> = ({ userId, data }) => {
  const loginModal = useLoginModal();
  const router = useRouter();

  const toUserPage = useCallback(
    (event: any) => {
      event.stopPropagation();

      router.push(`/user/${data.user.id}`);
    },
    [router, data.user.id]
  );

  const toPost = useCallback(() => {
    router.push(`/post/${data.id}`);
  }, [router, data.id]);

  const onLike = useCallback(
    (event: any) => {
      event.stopPropagation();

      loginModal.onOpen();
    },
    [loginModal]
  );

  const createdAt = useMemo(() => {
    if (!data?.createdAt) {
      return null;
    }

    return formatDistanceToNowStrict(new Date(data.createdAt));
  }, [data?.createdAt]);

  return (
    <div
      className="
      border-b-[1px]
      border-neutral-800
      p-5
      cursor-pointer
      hover:bg-neutral-900/50
      transition
     "
      onClick={toPost}
    >
      <div className="flex flex-row items-start gap-3">
        <Avatar userId={userId as string} />
        <div>
          <div className="flex items-center gap-x-2">
            <p className="text-white font-semibold cursor-default flex flex-col">
              {data.user.name}
              <span
                className="text-neutral-500 cursor-pointer hover:underline text-xs"
                onClick={toUserPage}
              >
                @{data.user.username}
              </span>
            </p>
            <span className="text-sm text-neutral-500 block -mt-4">
              {createdAt}
            </span>
          </div>
          <div className="text-white mt-4">{data.body}</div>
          <div className="flex flex-row items-center gap-10 mt-4">
            <div
              className="
                flex
                items-center
                gap-x-2
                text-neutral-500
                hover:text-sky-500
                transition
                cursor-pointer
              "
            >
              <AiOutlineMessage size={20} />
              {data.comments?.length || 0}
            </div>
            <div
              onClick={onLike}
              className="
                flex
                items-center
                gap-x-2
                text-neutral-500
                hover:text-red-500
                transition
                cursor-pointer
              "
            >
              <AiOutlineHeart size={20} />
              {data.comments?.length || 0}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
