import AddressPage from "@/app/(customer)/account/address/page";
import AboutLayout from "@/app/(customer)/account/layout";
import { render } from "@testing-library/react";

describe("Home", () => {
  it("should render", () => {
    const page = render(
      <AboutLayout>
        <AddressPage />
      </AboutLayout>
    );
    expect(page).toMatchSnapshot();
  });
});
