import * as ReactDOM from "react-dom";
import Missions from "./components/Missions";

describe("Missions component tests", () => {
  let container: HTMLDivElement;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
    ReactDOM.render(<Missions />, container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container.remove();
  });

  it("Renders correctly", () => {
    const inputs = container.querySelectorAll("input");
    expect(inputs).toBeCalledTimes(1);
  });
});
