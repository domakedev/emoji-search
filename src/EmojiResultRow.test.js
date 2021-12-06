import React from "react";
import ReactDOM from "react-dom";
import EmojiResultRow from "./EmojiResultRow";
import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"

test('<EmojiResultRow/> Comprobar emoji y texto', () => {
  
  const title= "Ejemplo"
  const symbol= "🔢"
  
  render(<EmojiResultRow title={title} symbol={symbol} />)


  //Detectar emoji: nombre
  const emojiNombre = screen.queryByText("Ejemplo")
  expect(emojiNombre).toHaveTextContent('Ejemplo')


})
