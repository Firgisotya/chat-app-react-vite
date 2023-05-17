import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import { AuthProvider } from "./Context/AuthContext";
import ChatRoom from "./Pages/ChatRoom";
import Login from "./Pages/Login";
import { PrivateRoute } from "./Routes/PrivateRoute";

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/chat"
          element={
            <PrivateRoute>
              <ChatRoom />
            </PrivateRoute>
          }
        />
      </Routes>
    </AuthProvider>
  );
}

export default App;
