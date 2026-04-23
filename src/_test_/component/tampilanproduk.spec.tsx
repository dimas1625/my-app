import { render, screen } from "@testing-library/react"
import TampilanProduk from "@/views/produk"

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => <img {...props} />,
}))

jest.mock("next/link", () => ({
  __esModule: true,
  default: ({ children, href }: any) => <a href={href}>{children}</a>,
}))

const mockProducts = [
  {
    id: "1",
    name: "Sepatu Duramo SL",
    price: 900000,
    image: "/Sepatu Duramo SL.jpg",
    category: "Men's Shoes",
  },
  {
    id: "2",
    name: "Sepatu Samba OG",
    price: 1500000,
    image: "/Sepatu Samba OG.jpg",
    category: "Men's Shoes",
  },
]

describe("Komponen TampilanProduk", () => {
  it("renders komponen dengan data produk - snapshot", () => {
    const page = render(<TampilanProduk products={mockProducts} />)
    expect(page).toMatchSnapshot()
  })

  it("menampilkan list produk", () => {
    render(<TampilanProduk products={mockProducts} />)
    expect(screen.getByTestId("produk-list")).toBeDefined()
  })

  it("jumlah item produk sesuai data", () => {
    render(<TampilanProduk products={mockProducts} />)
    const items = screen.getAllByTestId("produk-item")
    expect(items.length).toBe(2)
  })

  it("menampilkan pesan jika produk kosong", () => {
    render(<TampilanProduk products={[]} />)
    expect(
      screen.getByTestId("produk-empty").textContent
    ).toBe("Tidak ada produk")
  })

  it("renders komponen dengan produk kosong - snapshot", () => {
    const page = render(<TampilanProduk products={[]} />)
    expect(page).toMatchSnapshot()
  })
})