import { isLoggedIn } from "../AuthSignals";

export default function Home() {
  return (
    <div>
      <span>
        {isLoggedIn.value ? "You are logged in" : "You are not logged in"}
      </span>
    </div>
  );
}
