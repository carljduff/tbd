import { useEffect } from "react";
import { Routes, Route, Navigate, } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";


import { Loader } from "lucide-react";
import { Toaster } from "react-hot-toast";

import { useAuthStore } from "./store/useAuthStore.js";

function App() {
  const { authUser, checkAuth, isCheckingAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

   if (isCheckingAuth && !authUser) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader className="size-10 animate-spin" />
      </div>
    );
  }
  return (
    <div>
      

      <Routes>
        <Route
          path="/"
          element={authUser ? <Homepage /> : <Navigate to="/login" />}
        />
        <Route
          path="/signup"
          element={!authUser ? <Signup /> : <Navigate to="/" />}
        />
        <Route
          path="/login"
          element={!authUser ? <Login /> : <Navigate to="/" />}
        />
        
      </Routes>
    </div>
  );
}

export default App;