import { render, screen } from "@testing-library/react";
import Produk from "@/pages/produk";
import "@testing-library/jest-dom";

// 1. Mocking Router (Biar kaga Error NextRouter was not mounted)
jest.mock("next/router", () => ({
    useRouter: () => ({
        push: jest.fn(),
        route: "/",
        pathname: "",
        query: "",
        asPath: "",
    }),
}));

// 2. Mocking SWR dengan data lengkap (Tambah Category & Images)
jest.mock("swr", () => ({
    __esModule: true,
    default: () => ({
        data: {
            data: [
                {
                    id: "1",
                    name: "Produk Test 1",
                    price: 10000,
                    category: "Alat",
                    images: "https://via.placeholder.com/200"
                },
                {
                    id: "2",
                    name: "Produk Test 2",
                    price: 20000,
                    category: "Bahan",
                    images: "https://via.placeholder.com/200"
                },
            ],
        },
        error: null,
        isLoading: false,
        mutate: jest.fn(),
    }),
}));

describe("Product Page", () => {
    it("should render title and product list correctly", async () => {
        const { getByTestId } = render(<Produk />);

        // Cek Judul
        const title = getByTestId("title");
        expect(title).toBeInTheDocument();

        // Cek Kategori (Sekarang pasti ketemu karena udah ada di mock)
        expect(screen.getByText(/Alat/i)).toBeInTheDocument();

        // Cek Harga pake Regex (Biar kaga pusing sama spasi antara Rp dan Angka)
        expect(screen.getAllByText(/Rp/i)[0]).toBeInTheDocument();
        expect(screen.getByText(/10\.000/i)).toBeInTheDocument();
        expect(screen.getByText(/20\.000/i)).toBeInTheDocument();
        // Cek Item Produk
        const productItems = screen.getAllByTestId("product-item");
        expect(productItems).toHaveLength(2);

        // Cek link tujuan (Pastikan ID di href sesuai mock)
        expect(productItems[0]).toHaveAttribute("href", "/produk/1");

        // Tes Nama Produk
        expect(screen.getByText(/Produk Test 1/i)).toBeInTheDocument();
        expect(screen.getByText(/Produk Test 2/i)).toBeInTheDocument();
    });

    it("should render skeleton when loading", () => {
    // Override mock SWR khusus buat test ini biar statusnya loading
    const swr = require("swr");
    jest.spyOn(swr, 'default').mockReturnValue({
        data: undefined,
        error: null,
        isLoading: true,
        mutate: jest.fn(),
    });

    render(<Produk />);
    // Cek apakah skeleton muncul (pake data-testid product-skeleton yang kita pasang tadi)
    expect(screen.getAllByTestId("product-skeleton")).toHaveLength(3);
});
});