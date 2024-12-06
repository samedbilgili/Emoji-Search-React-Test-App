import React from "react";
import EmojiResults from "./Components/EmojiResults";
import emojiList from "./emojiList.json";
import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

const mockData = emojiList.slice(0, 5); // Test için sadece ilk 5 öğeyi alıyoruz.

let listElement;

beforeEach(() => {
  render(<EmojiResults emojiData={mockData} />);
  listElement = screen.getByTestId("icon-list-div");
});

describe("EmojiResults Component Test", () => {
 
  test("emoji listesi doğru şekilde ekrana geliyor", () => {
    mockData.forEach(({ title }) => {
      expect(screen.getByText(title)).toBeInTheDocument();
    });
  });

  test("liste div ekranda gözüktü", () => {
    expect(listElement).toBeInTheDocument();
  });

});
