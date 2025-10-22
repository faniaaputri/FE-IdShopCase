import AddAddress from "@/app/page";
import { render } from "@testing-library/react";

describe("Home", () => {
  it("should render", () => {
    const page = render(<AddAddress />);
    expect(page).toMatchSnapshot();
  });
});
