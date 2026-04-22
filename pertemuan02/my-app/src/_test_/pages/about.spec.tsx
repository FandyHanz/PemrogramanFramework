import {render} from "@testing-library/react"
import About from "@/pages/about"

describe("About Page", () => {
    it("renders the about page correctly", () => {
        const page  = render(<About />)
        expect(page.getByTestId("title").textContent).toBe("ini halaman about")
        expect(page).toMatchSnapshot()
    })
})