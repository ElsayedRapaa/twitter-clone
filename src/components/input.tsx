interface InputProps {
  type?: string;
  value?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  disabled?: boolean;
}

const Input: React.FC<InputProps> = ({
  type = "text",
  value,
  onChange,
  placeholder,
  disabled,
}) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
      className="
        w-full
        px-4
        py-2
        disabled:bg-neutral-800
        disabled:bg-opacity-70
        disabled:cursor-not-allowed
        transition
        outline-none
        focus:outline-none
        focus:placeholder:opacity-0
        placeholder:duration-200
        focus:border-sky-500
        border-2
        border-neutral-800
        bg-black
        text-lg
        text-white
        rounded-md
      "
    />
  );
};

export default Input;
