import CheckOutPage from "@/app/(customer)/checkout/page";
import Home from "@/app/page";
import { render } from "@testing-library/react";

describe("CheckoutPage", () => {
  it("should render", () => {
    const page = render(<CheckOutPage />);
    expect(page).toMatchSnapshot();
  });
});
