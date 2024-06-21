import { auth, signOut } from "@/auth";

const SettingsPage = async () => {
  const session = await auth();
  
  return (
    <main className="h-screen w-screen text-primary">
      <h1>Settings Page</h1>
      {JSON.stringify(session)}
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button type="submit">Sign out</button>
      </form>
    </main>
  );
};

export default SettingsPage;