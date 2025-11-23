import { renderHook, act, waitFor } from "@testing-library/react";
import { useCreateAddress } from "@/features/address/api/create-address";
import { QueryClientWrapper } from "@/test-utils";
import { api } from "@/lib/axios";
import { FormAddressSchemaType } from "@/features/address/components/address";

jest.mock("@/lib/axios");
const mockedApi = api as jest.Mocked<typeof api>;

describe("useCreateAddress", () => {
  it("creates address successfully", async () => {
    const fakeResponse = { id: 1, recipient_name: "Rizky" };
    const data: FormAddressSchemaType = {
      recipient_name: "Rizky",
      phone: "081234567890",
      province: "Jawa Barat",
      city: "Bogor",
      district: "Bendungan Hilir",
      sub_district: "G",
      postal_code: "16623",
    };

    mockedApi.post.mockResolvedValueOnce({ data: fakeResponse });

    const { result } = renderHook(() => useCreateAddress(), {
      wrapper: QueryClientWrapper,
    });

    await act(async () => {
      result.current.mutate(data);
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(mockedApi.post).toHaveBeenCalledWith(
      "/addresses",
      data,
      expect.any(Object)
    );
  });
});
