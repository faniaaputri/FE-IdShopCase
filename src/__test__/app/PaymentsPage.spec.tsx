import PaymentsPage from "@/app/(customer)/account/payments/page";
import Home from "@/app/page";
import { render } from "@testing-library/react";

describe("PaymentsPage", () => {
  it("should render", () => {
    const page = render(<PaymentsPage/>);
    expect(page).toMatchSnapshot();
  });
});
