import QueryProviderPage from "@/app/page";
import { QueryProvider } from "@/components/providers/query-provider";
import { render } from "@testing-library/react";

describe("Home", () => {
  it("should render", () => {
    const page = render(<QueryProviderPage />);
    expect(page).toMatchSnapshot();
  });
});
