import { useRootContext } from "../../contexts/root/context";

export default function Home() {
  const context = useRootContext();
  return (
    <div
      style={{
        margin: "2rem",
      }}
    >
      <p>home page!</p>
      <p>count is:{context.state.count}</p>
    </div>
  );
}
