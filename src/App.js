import Auth from "./login/Auth";
import { useEffect, useState } from "react";
import { auth } from "./firebase";
import Body from "./body/Body";

function App() {
  const [user, setUser] = useState(null);
  const logout = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
      }
      setUser(user);
    });
    return () => unsubscribe();
  }, []);
  return (
    <div className="App">
      {user ? <Body user={user} logout={logout} /> : <Auth />}
    </div>
  );
}

export default App;
