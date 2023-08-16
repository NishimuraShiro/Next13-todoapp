import AddTask from "./components/AddTask";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center py-2 min-h-screen">
      <h1 className="text-4xl font-bold">Hello nextjs</h1>
      <div>
        <AddTask />
      </div>
    </main>
  );
}
