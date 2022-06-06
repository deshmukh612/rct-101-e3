import "./App.css";
import { Routes, Route } from "react-router-dom";
import Products from "./components/Products/Products";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Navbar from "./components/Navbar/Navbar";
import RequiredAuth from "./hoc/RequiredAuth";

function App() {
  return (
    <div className="App">
      {
        // Code here
      }
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <RequiredAuth>
              <Home />
            </RequiredAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/products"
          element={
            <RequiredAuth>
              <Products />
            </RequiredAuth>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
