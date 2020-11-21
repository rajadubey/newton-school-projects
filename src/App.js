import React from "react";
import { Route, Switch } from "react-router-dom";
import "./index.css";
import Sidebar from "./components/Sidebar/sidebar";
import { jsProjects, reactProjects, otherProjects } from "./data";
import ProjectCard from "./components/projectCard/projectCard";

function App() {
  return (
    <div className="App">
      <div className="left-container">
        <Sidebar />
      </div>{" "}
      <div className="right-container">
        <Switch>
          <Route
            path="/js"
            render={(props) => <Container list={jsProjects} {...props} />}
          />
          <Route
            path="/react"
            render={(props) => <Container list={reactProjects} {...props} />}
          />
          <Route
            path="/others"
            render={(props) => <Container list={otherProjects} {...props} />}
          />
        </Switch>{" "}
      </div>{" "}
    </div>
  );
}

export default App;

export const Container = ({ list }) => {
  return (
    <div className="project-card-container">
      {" "}
      {list.map((el, index) => (
        <ProjectCard project={el} key={index} />
      ))}{" "}
    </div>
  );
};
