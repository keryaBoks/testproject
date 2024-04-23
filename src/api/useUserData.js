import { useQuery } from "@tanstack/react-query";

export function useUserData(username, setIsNotFoundUser) {
  const token = "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";

  return useQuery({
    queryKey: ["userData", username],
    queryFn: async () => {
      const response = await fetch(`https://api.github.com/users/${username}`, {
        headers: {
          Authorization: `token ${token}`,
          Accept: "application/json",
        },
      });
      if (!response.ok) {
        if (response.status === 404) {
          setIsNotFoundUser(true);
        }
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
  });
}
