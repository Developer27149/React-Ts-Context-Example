import { useRootContext } from "../contexts/root/context";

export default function CountBtn() {
  const { dispatch } = useRootContext();
  return (
    <div>
      <button
        onClick={() => {
          dispatch({
            type: "add_count",
            payload: 2,
          });
        }}
      >
        +2
      </button>
      <button
        onClick={() => {
          dispatch({
            type: "sub_count",
            payload: 1,
          });
        }}
      >
        -1
      </button>
    </div>
  );
}
