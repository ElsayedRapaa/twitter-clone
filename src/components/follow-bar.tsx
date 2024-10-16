const FollowBar = () => {
  return (
    <div
      className="
        mx-6
        hidden
        lg:block
        py-4
      "
    >
      <div className="bg-neutral-800 rounded-xl p-4">
        <h2 className="text-white font-semibold text-xl">Who to follow</h2>
        <div className="flex flex-col gap-6 mt-4">{/* TODO USER LIST */}</div>
      </div>
    </div>
  );
};

export default FollowBar;
