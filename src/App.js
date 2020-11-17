import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { mainRoutes, adminRoutes } from "configs/routes";
import MainTemplate from "templates/main/main.component";
import AdminTemplate from "templates/admin/admin.component";
import "./App.css";
export default function App() {
  const renderRoutesMain = (listRoute) => {
    return listRoute.map((route, index) => (
      <MainTemplate key={index} {...route} />
    ));
  };

  const renderRoutesAdmin = (listRoute) => {
    return listRoute.map((route, index) => (
      <AdminTemplate key={index} {...route} />
    ));
  };

  return (
    <Router>
      <div>
        <Switch>
          {renderRoutesMain(mainRoutes)}
          {renderRoutesAdmin(adminRoutes)}
        </Switch>
      </div>
    </Router>
  );
}
