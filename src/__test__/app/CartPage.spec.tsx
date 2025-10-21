import CartPage from "@/app/(customer)/cart/page";
import Home from "@/app/page";
import { render } from "@testing-library/react";

describe("Cart Page", () => {
  it("should render", () => {
    const page = render(<CartPage />);
    expect(page).toMatchSnapshot();
  });
});
