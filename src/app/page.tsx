import ButtonCounter from "@/src/components/ButtonCounter";

export default function Home() {
  return (
    <main className="flex">
      <div className="flex-1">
        <h1 className="text-4xl font-bold">Welcome to my blog</h1>
        <p className="text-lg">
          This is a blog where I write about things that interest me.
        </p>
      </div>
      <ButtonCounter />
      <div className="flex-1"></div>
    </main>
  );
}
