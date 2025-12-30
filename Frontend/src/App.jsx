import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import AddSnippet from "./pages/AddSnippet";
import EditSnippet from "./pages/EditSnippet";

import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
     <Navbar />

<Routes>
  {/* Public Routes */}
  {/* Change the Login path to /login */}
  <Route path="/login" element={<Login />} /> 
  <Route path="/register" element={<Register />} />

  {/* Protected Routes */}
  {/* Change the Dashboard path to / (The Main Page) */}
  <Route
    path="/" 
    element={
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    }
  />

  <Route
    path="/add"
    element={
      <ProtectedRoute>
        <AddSnippet />
      </ProtectedRoute>
    }
  />

  <Route
    path="/edit/:id"
    element={
      <ProtectedRoute>
        <EditSnippet />
      </ProtectedRoute>
    }
  />
</Routes>
    </>
  );
}

export default App;
