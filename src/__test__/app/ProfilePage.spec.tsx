import ProfilePage from "@/app/(customer)/account/profile/page";
import Home from "@/app/page";
import { render } from "@testing-library/react";

describe("Profile Page", () => {
  it("should render", () => {
    const page = render(<ProfilePage />);
    expect(page).toMatchSnapshot();
  });
});
