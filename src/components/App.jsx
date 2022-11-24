import { lazy, Suspense } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import PrivateRoute from "components/Routes/PrivateRoute.js";
import PublicRoute from "./Routes/PublicRoute";
import { ThemeProvider } from "@emotion/react";
import Loader from "components/Loader/Loader";
import NoticesPage from "pages/NoticesPage";
import OurFriendsPage from "pages/OurFriendsPage";
import NewsPage from "pages/NewsPage";
import { useGetCurrentUserQuery } from "redux/auth/authApi";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import theme from "styles/theme";

const SharedLayout = lazy(() => import("./SharedLayout"));
const Home = lazy(() => import("../pages/Home"));
const NotFound = lazy(() => import("../pages/NotFound"));
const LoginPage = lazy(() => import("../pages/LoginPage"));
const RegisterPage = lazy(() => import("../pages/RegisterPage"));
const AccountPage = lazy(() => import("../pages/UserPage"));

export const App = () => {
  useGetCurrentUserQuery();

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter basename="">
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<SharedLayout />}>
              <Route
                path="/"
                element={
                  <PublicRoute>
                    <Home />
                  </PublicRoute>
                }
              />
              <Route
                index
                element={
                  <PublicRoute>
                    <Home />
                  </PublicRoute>
                }
              />
              <Route
                path="login"
                element={
                  <PublicRoute restricted>
                    <LoginPage />
                  </PublicRoute>
                }
              />
              <Route
                path="register"
                element={
                  <PublicRoute restricted>
                    <RegisterPage />
                  </PublicRoute>
                }
              />
              <Route
                path="user"
                element={
                  <PrivateRoute>
                    <AccountPage />
                  </PrivateRoute>
                }
              />
              <Route
                path="notices/:categoryName"
                element={
                  <PublicRoute>
                    <NoticesPage />
                  </PublicRoute>
                }
              />
              <Route
                path="friends"
                element={
                  <PublicRoute>
                    <OurFriendsPage />
                  </PublicRoute>
                }
              />
              <Route
                path="news"
                element={
                  <PublicRoute>
                    <NewsPage />
                  </PublicRoute>
                }
              />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
      <ToastContainer />
    </ThemeProvider>
  );
};
