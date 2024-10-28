"use client";

import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";

import useUser from "@/hooks/use-user";
import useEditModal from "@/hooks/use-edit-modal";
import Modal from "../modal";
import Input from "../input";
import UploadImage from "../upload-image";

const EditModal = () => {
  const { data: session } = useSession();
  const userId = session?.user?.id;
  const { data, mutate: mutateFetchUser } = useUser(userId as string);
  const editModal = useEditModal();

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [coverImage, setCoverImage] = useState("");

  useEffect(() => {
    setName(data?.name);
    setUsername(data?.username);
    setBio(data?.bio);
    setProfileImage(data?.profileImage);
    setCoverImage(data?.coverImage);
  }, [data, userId]);

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);

      await axios.patch(`/api/edit?userId=${userId}`, {
        name,
        username,
        bio,
        profileImage,
        coverImage,
      });

      mutateFetchUser();

      toast.success("Updated your data");

      editModal.onClose();
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  }, [
    name,
    username,
    bio,
    profileImage,
    coverImage,
    editModal,
    mutateFetchUser,
    userId,
  ]);

  const bodyContent = (
    <div className="flex flex-col gap-y-4">
      <UploadImage
        label="Uploading Profile Image"
        value={profileImage}
        onChange={(image) => setProfileImage(image)}
        disabled={isLoading}
      />
      <UploadImage
        label="Uploading Cover Image"
        value={coverImage}
        onChange={(image) => setCoverImage(image)}
        disabled={isLoading}
      />
      <Input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        disabled={isLoading}
      />
      <Input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        disabled={isLoading}
      />
      <Input
        type="text"
        value={bio}
        onChange={(e) => setBio(e.target.value)}
        placeholder="Bio"
        disabled={isLoading}
      />
    </div>
  );

  return (
    <Modal
      onSubmit={onSubmit}
      isOpen={editModal.isOpen}
      onClose={editModal.onClose}
      title="Edit your profile"
      actionLabel="Save"
      disabled={isLoading}
      body={bodyContent}
    />
  );
};

export default EditModal;
