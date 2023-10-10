import logo from "./logo.svg";
import "./App.css";
import useAuth from "./hooks/app/useAuth";
import { useEffect } from "react";

function App() {
  const isAuthenticated = useAuth().isAuthenticated;
  const fetchProfile = useAuth().fetchProfile;
  const { user } = useAuth();
  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit {!isAuthenticated ? "hii" : "hello"}
          <code> {user?.name}</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
