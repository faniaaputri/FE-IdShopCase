import LoginPage from "@/app/(auth)/login/page";
import Home from "@/app/page";
import { render } from "@testing-library/react";

describe("Login Page", () => {
  it("should render", () => {
    const page = render(<LoginPage />);
    expect(page).toMatchSnapshot();
  });
});
