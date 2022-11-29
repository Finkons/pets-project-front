import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "components/Header/Header";
import Loader from "components/Loader/";

const SharedLayout = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Header />
      <Outlet />
    </Suspense>
  );
};

export default SharedLayout;
