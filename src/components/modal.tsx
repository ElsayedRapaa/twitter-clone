"use client";

import { useCallback } from "react";

import { MdClose } from "react-icons/md";
import Button from "./button";

interface ModalProps {
  isOpen?: boolean;
  onSubmit: () => void;
  onClose: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel: string;
  disabled?: boolean;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onSubmit,
  onClose,
  title,
  body,
  footer,
  actionLabel,
  disabled,
}) => {
  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }

    onClose();
  }, [disabled, onClose]);

  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }

    onSubmit();
  }, [disabled, onSubmit]);

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div
        className="
          fixed
          inset-0
          flex
          items-center
          justify-center
          overflow-x-hidden
          overflow-y-hidden
          bg-neutral-800
          bg-opacity-70
          z-50
        "
      >
        <div
          className="
            relative
            md:w-3/6
            w-full
            my-6
            mx-auto
            lg:max-w-3xl
            md:h-auto
            h-full
          "
        >
          {/* Content */}
          <div
            className="
              border-0
              rounded-lg
              relative
              flex
              flex-col
              bg-black
              h-full
              lg:h-auto
              shadow-lg
              w-full
              outline-none
              fovus:outline-none
            "
          >
            {/* Header */}
            <div
              className="
                flex
                items-center
                justify-between
                p-6
                rounded-t
              "
            >
              <h3 className="text-2xl font-semibold text-white">{title}</h3>
              <button
                className="w-8 h-8 rounded-full hover:bg-slate-300 hover:bg-opacity-10 transition flex items-center justify-center cursor-pointer"
                onClick={handleClose}
              >
                <MdClose size={24} color="white" />
              </button>
            </div>
            {/* Body */}
            <div
              className="
                relative
                p-6
              "
            >
              {body}
            </div>
            {/* Footer */}
            <div
              className="
                flex
                flex-col
                gap-2
                p-6
                rounded-b
              "
            >
              <Button
                fullWidth
                secondary
                large
                label={actionLabel}
                disabled={disabled}
                onClick={handleSubmit}
              />
              {footer}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
