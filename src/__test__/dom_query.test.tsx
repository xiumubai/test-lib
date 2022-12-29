import React from "react";
import { render, screen } from "@testing-library/react";
import { DomQuery } from "../components/DomQuery";
import App from "../App";

describe("DOM查询：页面元素的渲染和行为查询", () => {
  // test("get & query & find", () => {
  //   render(<App />);
  //   const element = screen.getByText(/test/i);
  //   const getElement = screen.getByText("test1");
  //   const getAllElement = screen.getAllByText(/test/i);
  //   const queryElement = screen.queryByText("test3");
  //   const queryAllElement = screen.queryAllByText("test3");
  // })

  test("default role", () => {
    render(<DomQuery />);
    const button = screen.getByRole("tab");
    // screen.debug(button);
  });

  test("aria role", () => {
    render(<DomQuery />);
    const button = screen.getByRole("button", {pressed: true});
    // screen.debug(button);
  });

  test("aria label", () => {
    render(<DomQuery />);
    const note = screen.getByRole("generic", { name: "test_note" });
    // screen.debug(note);
  });

  test("labelText", () => {
    render(<DomQuery />);
    const label = screen.getByLabelText("testLabel");
    // screen.debug(label);
  });

  test("placeholder", () => {
    render(<DomQuery />);
    const placeholderInput = screen.getByPlaceholderText(
      "a query by placeholder"
    );
    // screen.debug(placeholderInput);
  });

  test("value", () => {
    render(<DomQuery />);
    const valueInput = screen.getByDisplayValue("a query by value");
    // screen.debug(valueInput);
  });

  test("img alt", () => {
    render(<DomQuery />);
    const altImg = screen.getByAltText("a query by alt");
    // screen.debug(altImg);
  });

  test("title", () => {
    render(<DomQuery />);
    const title = screen.getByTitle("a query by title");
    // screen.debug(title);
  });

  test("testid", () => {
    render(<DomQuery />);
    const testidItem = screen.getByTestId("a not so good query");
    // screen.debug(testidItem);
  });

})