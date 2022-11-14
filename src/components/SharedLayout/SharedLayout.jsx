import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "components/Header/Header";

const SharedLayout = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Header />
      <Outlet />
    </Suspense>
  );
};

export default SharedLayout;
