import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import AnimalScreen from "./screens/AnimalScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import AnimalDetailsScreen from "./screens/AnimalDetailsScreen";
import MyRequestsScreen from "./screens/MyRequestsScreen";
import AdminDashboard from "./admin/AdminDashboard";
import AdminAnimals from "./admin/AdminAnimals";
import AddAnimal from "./admin/AddAnimal";
import { Routes, Route } from "react-router-dom";
import AdminUsers from "./admin/AdminUsers";
import AdminRequests from "./admin/AdminRequests";
import EditAnimal from "./admin/EditAnimal";
import ProfileScreen from "./screens/ProfileScreen";

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
          <Route path="/animals/:id" element={<AnimalDetailsScreen />}/>
          <Route path="/myrequests" element={<MyRequestsScreen />}/>
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/animals" element={<AdminAnimals />} />
          <Route path="/admin/add-animal" element={<AddAnimal />} />
          <Route path="/admin/users" element={<AdminUsers />} />
          <Route path="/admin/requests" element={<AdminRequests />} />
          <Route path="/admin/animals/:id/edit" element={<EditAnimal />}/>
          <Route path="/profile" element={<ProfileScreen />}/>
        </Routes>
      </main>
    </>
  );
}

export default App;