import { render, screen } from "@testing-library/react"
import HalamanProduk from "@/pages/produk"

jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "/produk",
      pathname: "/produk",
      query: {},
      asPath: "",
      push: jest.fn(),
      replace: jest.fn(),
      prefetch: jest.fn(),
      back: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
      },
      isReady: true,
    }
  },
}))

jest.mock("swr", () => ({
  __esModule: true,
  default: () => ({
    data: {
      data: [
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
      ],
    },
    isLoading: false,
  }),
}))

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => <img {...props} />,
}))

jest.mock("next/link", () => ({
  __esModule: true,
  default: ({ children, href }: any) => <a href={href}>{children}</a>,
}))

describe("Product Page", () => {
  it("renders product page correctly - snapshot", () => {
    const page = render(<HalamanProduk />)
    expect(page).toMatchSnapshot()
  })

  it("menampilkan judul halaman produk", () => {
    render(<HalamanProduk />)
    expect(screen.getByTestId("product-title")).toBeDefined()
  })

  it("judul halaman adalah Halaman Produk", () => {
    render(<HalamanProduk />)
    expect(
      screen.getByTestId("product-title").textContent
    ).toBe("Halaman Produk")
  })
})