import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("<Header/> Comprobar titulo de la app", () => {
  render(<Header />);

  //Titulo principal
  const titulo = screen.getByText("Emoji Search");
  expect(titulo).toBeInTheDocument();
});
