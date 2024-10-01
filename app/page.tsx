import dynamic from "next/dynamic";
const Counter = dynamic(() => import("@/components/Counter"), {
  loading: () => <p>Loading...</p>,
});

export default function Home() {
  return (
    <div>
      <Counter />
    </div>
  );
}
