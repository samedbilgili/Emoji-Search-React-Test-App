import React from "react";
import App from "./App";
import filterEmoji from "./Components/filterEmoji";
import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

const searchKeyword = "smile";

describe("App Component Test", () => {
    let inputElement;
    let listElement;

    beforeEach(() => {
        render(<App />);

        inputElement = screen.getByTestId("search-input");
        listElement = screen.getByTestId("icon-list-div");
    });

    //componenlerin diğer testleri farklı test sayfasındadır.
    test("arama bileşeni render ediliyor mu", () => {
        expect(inputElement).toBeInTheDocument();
    });

    test("liste render ediliyor mu", () => {
        expect(listElement).toBeInTheDocument();
    });

    test("arama yapıldığında sonuçlar güncelleniyor mu", () => {
        // Başlangıçta liste elemanlarını kontrol et
        expect(listElement.childNodes.length).toBeGreaterThan(0);

        // Arama alanına veri gir
        fireEvent.change(inputElement, { target: { value: searchKeyword } });

        // Arama sonuçlarını kontrol et
        const filteredResults = filterEmoji(searchKeyword, 20);
        expect(filteredResults.length).toBeGreaterThan(0);

        // Listenin arama kelimesine göre güncellenmesi beklenir
        expect(listElement.childNodes.length).toBe(filteredResults.length);
    });
});
