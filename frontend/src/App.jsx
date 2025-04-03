import Homepage from "./pages/homepage";
import Loginpage from "./pages/loginpage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Header from "./components/header";
import PrivateRoute from "./utils/privateroute";
import { AuthProvider } from "./context/AuthContext";
import Profilepage from './pages/profilepage'

const App = () => {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Header />
          <Routes>
            <Route path="/" element={<PrivateRoute element={<Homepage />} />} />
            <Route path="/login" element={<Loginpage />} />
            <Route path="/profile" element={<Profilepage />} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
};

export default App;
