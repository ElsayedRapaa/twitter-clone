"use client";

interface ButtonProps {
  label: string;
  secondary?: boolean;
  fullWidth?: boolean;
  large?: boolean;
  disabled?: boolean;
  outline?: boolean;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({
  label,
  secondary,
  fullWidth,
  large,
  disabled,
  outline,
  onClick,
}) => {
  return (
    <button
      className={`
        rounded-full
        font-semibold
        hover:opacity-80
        transition
        border-2
        disabled:opacity-70
        disabled:cursor-not-allowed
        ${large ? "text-xl" : "text-base"}
        ${large ? "py-2 px-4" : "py-1 px-3"}
        ${fullWidth ? "w-full" : "w-fit"}
        ${secondary ? "bg-white" : "bg-sky-500"}
        ${secondary ? "text-black" : "text-white"}
        ${secondary ? "border-white" : "border-sky-500"}
        ${outline ? "bg-transparent" : ""}
        ${outline ? "text-white" : ""}
        ${outline ? "border-white" : ""}
      `}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
