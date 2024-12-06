import React from "react";
import SearchInput from "./Components/SearchInput";
import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

let mockOnChangeFunction;
let inputElement;
const searchKeyword = "smile";

beforeEach(() => {
    mockOnChangeFunction = jest.fn();

    render(<SearchInput textChange={mockOnChangeFunction} />);

    inputElement = screen.getByTestId("search-input");
});

describe("SearchInput Component Test", () => {

    test("arama input ekranda gözüktü", () => {
        expect(inputElement).toBeInTheDocument();
    });

    test("inputa veri girilince fonksiyonu çağırdı", () => {
        fireEvent.change(inputElement, { target: { value: searchKeyword } });
        expect(mockOnChangeFunction).toHaveBeenCalled();
    });

    test("inputa veri girilince fonksiyonu verdiğim parametre ile çağırdı", () => {
        fireEvent.change(inputElement, { target: { value: searchKeyword } });
        expect(mockOnChangeFunction).toHaveBeenCalledWith(searchKeyword);
    });
    
});
