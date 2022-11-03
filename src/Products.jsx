import "./styles/Items.css"
import SearchBar from "./components/Products/SearchBar"
import ItemsSection from "./components/Products/ItemsSection"
import data from "./data/products.json"

export default function Products() {

    const sectionComponents = data.map(
        (obj, i) => <ItemsSection
            key={i}
            category={obj.category}
            data={obj.items}
        />
    )

    return (
        <>
            <SearchBar />
            {sectionComponents}
        </>
    )
}