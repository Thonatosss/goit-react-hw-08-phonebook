import { ContactsPage } from "pages/ContactsPage";
import { LoginPage } from "pages/LoginPage";
import { RegisterPage } from "pages/RegisterPage";
import { Route, Routes } from "react-router-dom";

function App() {
 

  return (
    <Routes>
      <Route path="/contacts" element={<ContactsPage/>}></Route>
      <Route path="/register" element={<RegisterPage/>}></Route>
      <Route path="/login" element={<LoginPage/>}></Route>
    </Routes>
  );
}

export { App };
