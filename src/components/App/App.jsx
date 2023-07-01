import { AppBar } from "components/AppBar/AppBar";

import { ContactsPage } from "pages/ContactsPage";
import { LoginPage } from "pages/LoginPage";
import { RegisterPage } from "pages/RegisterPage";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { getCurrentUser } from "redux/auth/authOperations";

function App() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <div>
      <AppBar/>
    <Routes>
      <Route path="/contacts" element={<ContactsPage/>}></Route>
      <Route path="/register" element={<RegisterPage/>}></Route>
      <Route path="/login" element={<LoginPage/>}></Route>
    </Routes>
    </div>
  );
}

export { App };
