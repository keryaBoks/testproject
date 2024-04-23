import React from "react";
import "./App.css";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { Header } from "./components/Header/Header";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Example />
      </QueryClientProvider>
    </div>
  );
}

function Example() {
  const { isLoading, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: async () => {
      const response = await fetch("https://api.github.com/users/keryaBoks");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
  });

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      <Header />
      <h1>User Profile</h1>
      <img src={data.avatar_url} alt="Avatar" />
      <p>Name: {data.name}</p>
      <p>Username: {data.login}</p>
      <p>Followers: {data.followers}</p>
      {/* Add more details as needed */}
    </div>
  );
}

export default App;
