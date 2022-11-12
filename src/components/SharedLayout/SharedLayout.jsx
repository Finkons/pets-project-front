import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Nav from "components/Nav";

const SharedLayout = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Nav />
      <Outlet />
    </Suspense>
  );
};

export default SharedLayout;
