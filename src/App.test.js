import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"


test('<App/>  La aplicacion funciona', () => {
  
  render(<App />);

  //Principal input
  const principalInput = screen.getByTestId("principal-input");
  expect(principalInput).toBeInTheDocument();
  expect(principalInput.tagName).toBe("INPUT");

})


 
 