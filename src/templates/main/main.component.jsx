import React from "react";
import { Route } from "react-router-dom";


const MainLayout = (props) => {
  return <div>{props.children}</div>;
};

const MainTemplate = ({ Component, path, exact }) => {
  return (
    <Route path={path} exact={exact}>
      <MainLayout>
        <Component />
      </MainLayout>
    </Route>
  );
};

export default MainTemplate;
