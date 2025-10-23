import ProductsPage from "@/app/(admin)/admin/products/page";
import Home from "@/app/page";
import { render } from "@testing-library/react";

describe("Products Page", () => {
  it("should render", () => {
    const page = render(<ProductsPage />);
    expect(page).toMatchSnapshot();
  });
});
