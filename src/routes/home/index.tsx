import React from "react";
import { useRootContext } from "../../contexts/root/context";

export default function Home() {
  const context = useRootContext();
  return (
    <div>
      <p>home page!</p>
      <p>count is:{context.state.count}</p>
      <button
        onClick={() => {
          context.dispatch({
            type: "add_count",
            payload: 2,
          });
        }}
      >
        +2
      </button>
    </div>
  );
}
