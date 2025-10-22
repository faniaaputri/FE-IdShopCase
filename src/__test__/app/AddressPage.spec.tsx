import AddressPage from "@/app/page";
import { render } from "@testing-library/react";

describe("Home", () => {
  it("should render", () => {
    const page = render(<AddressPage />);
    expect(page).toMatchSnapshot();
  });
});
