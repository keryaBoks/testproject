import { useQuery } from "@tanstack/react-query";

export function useUserDataRepos(username) {
  const token = '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';

  return useQuery({
    queryKey: ["userDataRepos", username],
    queryFn: async () => {
      const response = await fetch(`https://api.github.com/users/${username}/repos`, {
        headers: {
          'Authorization': `token ${token}`,
          'Accept': 'application/json'
        }
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
  });
}
