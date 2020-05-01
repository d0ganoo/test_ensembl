import React from "react";
import {render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import SubHeader from '../../components/subHeader';

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

describe("Check props of subHeader component", () => {
    it("render without props", () => {
        act(() => {
            render(<SubHeader />, container);
        });

        expect(container.querySelector('h2').textContent).toBe("Popular ");
    });

    it("render without props", () => {
        act(() => {
            render(<SubHeader title='movies' />, container);
        });
        expect(container.querySelector('h2').textContent).toBe("Popular movies");
    });

    it("render without props", () => {
        act(() => {
            render(<SubHeader title='series' />, container);
        });
        expect(container.querySelector('h2').textContent).toBe("Popular series");
    });
})
