import Header from "@/components/header";
import useUser from "@/hooks/use-user";
import { User } from "@/types/user-types";

const UserPage = ({ params }: { params: { userId: string } }) => {
  const userId = params.userId;
  const { data, isLoading } = useUser(`?userId=${userId}`);

  if (isLoading) {
    return (
      <div className="h-full w-full flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-white border-r-gray-500 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <>
      {data.data.map((item: User) => (
        <div key={item.id}>
          <Header label={item.username || "User Profile"} showBackArrow />
          <h1 className="text-2xl font-bold text-white"></h1>
        </div>
      ))}
    </>
  );
};

export default UserPage;
