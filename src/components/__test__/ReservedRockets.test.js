import renderer from "react-test-renderer";
import { render, screen } from "@testing-library/react";
import ReservedRockets from "../ReservedRockets";
import { Provider } from "react-redux";
import store from "../../redux/store";

describe("Reserved Rockets component", () => {
    const reservedRockets = [];
  it("Should", () => {
    render(
      <Provider store={store}>
        <ReservedRockets reservedRockets={reservedRockets} />
      </Provider>
    );
    const p = screen.getByTestId("pId");
    expect(p.innerHTML).toBe("No Reserved Rockets");
  });
 
});
