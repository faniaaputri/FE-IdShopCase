import DetailProductPage from "@/app/(customer)/products/detail/[id]/page";
import Home from "@/app/page";
import { render } from "@testing-library/react";

describe("DetailProductPage", () => {
  it("should render", () => {
    const page = render(<DetailProductPage />);
    expect(page).toMatchSnapshot();
  });
});
