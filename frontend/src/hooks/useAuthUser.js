import { useNavigate } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { getAuthUser } from "../lib/api";

const useAuthUser = () => {
  const navigate = useNavigate();

  const authUser = useQuery({
    queryKey: ["authUser"],
    queryFn: getAuthUser,
    retry: false,
    onError: (error) => {
      if (error.response?.status === 401) {
        navigate("/login"); // Redirect to login on 401 Unauthorized
      }
    },
  });

  return { isLoading: authUser.isLoading, authUser: authUser.data?.user };
};

export default useAuthUser;