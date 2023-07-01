import { AppBar } from 'components/AppBar/AppBar';
import { RestrictedRoute } from 'components/AuthNav/RestrictedRoute';
import { ContactsPage } from 'pages/ContactsPage';
import { LoginPage } from 'pages/LoginPage';
import { RegisterPage } from 'pages/RegisterPage';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { getCurrentUser } from 'redux/auth/authOperations';
import { getIsRefreshed } from 'redux/auth/authSelectors';
import { PrivateRoute } from 'components/AuthNav/PrivateRoute';
import { Container } from './App.styled';
function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(getIsRefreshed);
  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <div>
        <AppBar />
        <Container>
          <Routes>
            <Route
              path="/contacts"
              element={<PrivateRoute component={ContactsPage} redirectTo="/" />}
            ></Route>
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  component={RegisterPage}
                  redirectTo="/contacts"
                />
              }
            ></Route>
            <Route
              path="/"
              element={
                <RestrictedRoute component={LoginPage} redirectTo="/contacts" />
              }
            ></Route>
          </Routes>
        </Container>
      </div>
    )
  );
}

export { App };
