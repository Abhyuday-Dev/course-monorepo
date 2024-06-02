import { useSession } from "next-auth/react";
import AppBar from "./components/AppBar";

export default function HomePage() {
  const { data: session } = useSession();

  return (
    <>
      <AppBar />
      <div style={{ padding: "2rem" }}>
        {session ? (
          <h1>Welcome</h1>
        ) : (
          <h1>Please sign in to continue.</h1>
        )}
      </div>
    </>
  );
}
