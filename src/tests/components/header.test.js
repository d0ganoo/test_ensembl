import React from "react";
import {render, unmountComponentAtNode } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";
import Header from '../../components/header';

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe("Check content of header", () => {
    it("check content of title", () => {
        act(() => {
            render(<BrowserRouter><Header /></BrowserRouter>, container);
        });
        expect(container.querySelector('h1').textContent).toBe("DEMO Streaming");
    });

    it("check content of the first paragraphe", () => {
        act(() => {
            render(<BrowserRouter><Header /></BrowserRouter>, container);
        });
        expect(container.querySelector('p:first-child').textContent).toBe("Log in");
    });

    it("check content of the last paragraphe", () => {
        act(() => {
            render(<BrowserRouter><Header /></BrowserRouter>, container);
        });
        expect(container.querySelector('p:last-child').textContent).toBe("Start your free trial");
    });
})
