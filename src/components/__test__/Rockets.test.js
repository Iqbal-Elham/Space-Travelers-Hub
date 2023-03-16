import renderer from "react-test-renderer";
import { render, screen } from "@testing-library/react";
import Rockets from "../Rockets";
import { Provider } from "react-redux";
import store from "../../redux/store";

describe("Test the Rockets Component", () => {
    it("should match to snapshot", () => {
        const tree = renderer.create(
          <Provider store={store}>
              <Rockets />
          </Provider>
        );
        expect(tree).toMatchSnapshot();
      });
})