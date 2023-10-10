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
    </div>
  );
}

export default App;
