import { user } from "../AuthSignals";

const dummyUserData = {
  name: "John Doe",
  email: "john@doe.com"
};

export default function Header() {
  return (
    <header>
      <h1>A cool header</h1>

      <ul>
        {user.value && <li>{user.value.name}</li>}
        {!user.value ? (
          <li>
            <button
              onClick={() => {
                user.value = dummyUserData;
              }}
            >
              Login
            </button>
          </li>
        ) : (
          <li>
            <button
              onClick={() => {
                user.value = null;
              }}
            >
              Logout
            </button>
          </li>
        )}
      </ul>
    </header>
  );
}
