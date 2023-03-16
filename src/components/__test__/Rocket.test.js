import renderer from "react-test-renderer";
import { render, screen } from "@testing-library/react";
import Rocket from "../Rocket";
import { Provider } from "react-redux";
import store from "../../redux/store";

describe("Rockets component", () => {
  it("should match to snapshot", () => {
    const tree = renderer.create(
      <Provider store={store}>
          <Rocket />
      </Provider>
    );
    expect(tree).toMatchSnapshot();
  });
});
