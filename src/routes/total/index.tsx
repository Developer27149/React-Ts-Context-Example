import CountBtn from "components/CountBtn";
import { useRootContext } from "../../contexts/root/context";
import Profile from "./Profile";

export default function Total() {
  const { state } = useRootContext();
  const { profile } = state;

  return (
    <div
      style={{
        margin: "2rem",
      }}
    >
      <p>total page!</p>
      <p>count is: {state.count}</p>
      <CountBtn />
      <p>
        I am {profile?.name}, {profile?.age} years old.
      </p>
      <Profile profile={profile as any} />
    </div>
  );
}
