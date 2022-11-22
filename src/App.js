import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserList from "./componnents/userList";
import AddCars from "./componnents/AddCars";
import EditCars from "./componnents/EditCars";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="add" element={<AddCars />} />
          <Route path="edit/:id" element={<EditCars />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
