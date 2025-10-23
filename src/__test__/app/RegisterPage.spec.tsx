import RegisterPage from "@/app/(auth)/register/page";
import Home from "@/app/page";
import { render } from "@testing-library/react";

describe("Register Page", () => {
  it("should render", () => {
    const page = render(<RegisterPage />);
    expect(page).toMatchSnapshot();
  });
});
