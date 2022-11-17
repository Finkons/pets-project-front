import { lazy, Suspense } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import PrivateRoute from "components/Routes/PrivateRoute.js";
import { ThemeProvider } from "@emotion/react";
import NoticesPage from "pages/NoticesPage";
import OurFriendsPage from "pages/OurFriendsPage";
import NewsPage from "pages/NewsPage";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import theme from "styles/theme";

const SharedLayout = lazy(() => import("./SharedLayout"));
const Home = lazy(() => import("../pages/Home"));
const NotFound = lazy(() => import("../pages/NotFound"));
const LoginPage = lazy(() => import("../pages/LoginPage"));
const RegisterPage = lazy(() => import("../pages/RegisterPage"));
const AccoutPage = lazy(() => import("../pages/UserPage"));

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter basename="/pets-project-front">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<SharedLayout />}>
              <Route index element={<Home />} />
              <Route path="login" element={<LoginPage />} />
              <Route path="register" element={<RegisterPage />} />
              <Route
                path="user"
                element={
                  <PrivateRoute>
                    <AccoutPage />
                  </PrivateRoute>
                }
              />
              <Route path="notices/:categoryName" element={<NoticesPage />} />
              <Route path="friends" element={<OurFriendsPage />} />
              <Route path="news" element={<NewsPage />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
      <ToastContainer />
    </ThemeProvider>
  );
};
