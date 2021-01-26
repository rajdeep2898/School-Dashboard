import React from "react";
import { render } from "@testing-library/react";
import ReactDom from "react-dom";
import App, { NoMatch } from "./App";
import { shallow, mount, configure } from "enzyme";
// import Routes, { Home, News, NoMatch } from "./Routes";
import { MemoryRouter } from "react-router";
import { Route } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";

import CreateTodo from "./components/create-todo";
import EditTodo from "./components/edit-todo.component";
import B from "./components/todos-list.component";
import A from "./components/homePage";

// test("renders learn react link", () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

it("ds", () => {
  const div = document.createElement("div");
  ReactDom.render(<App></App>, div);
});

describe("routes using memory router", () => {
  // it("should show No match component for route not defined", () => {
  //   const component = mount(
  //     <MemoryRouter initialEntries="{['/dashboard']}">
  //       <App />
  //     </MemoryRouter>
  //   );
  //   expect(component.find(TodosList)).toHaveLength(1);
  // });
  it("should show Home component for / router (using memory router)", () => {
    const component = mount(
      <MemoryRouter initialentries="{['/create']}">
        <App />
      </MemoryRouter>
    );
    expect(component.find(A)).toHaveLength(1);
  });
  it("should show Home component for / router (using memory router)", () => {
    const component = mount(
      <MemoryRouter initialentries="{['/create']}">
        <App />
      </MemoryRouter>
    );
    expect(component.find(A)).toHaveLength(1);
  });
  test("invalid path should redirect to 404", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/create"]}>
        <App />
      </MemoryRouter>
    );
    // expect(wrapper.find(A)).toHaveLength(0);
    expect(wrapper.find(CreateTodo)).toHaveLength(1);
  });
});
