import Header from "./components/Header";

import HomeScreen from "./screens/HomeScreen";
import AnimalScreen from "./screens/AnimalScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/animals" element={<AnimalScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
        </Routes>
      </main>
    </>
  );
}

export default App;