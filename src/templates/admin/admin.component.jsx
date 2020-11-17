import React from "react";
import SideBar from "sections/sidebar/sidebar.component";
import { Route } from "react-router-dom";
const AdminLayout = (props) => {
  return (
    <div>
      <div>
        <SideBar />
      </div>
      {props.children}
    </div>
  );
};

const AdminTemplate = ({ Component, path, exact }) => {
  return (
    <Route path={path} exact={exact}>
      <AdminLayout>
        <Component />
      </AdminLayout>
    </Route>
  );
};

export default AdminTemplate;
