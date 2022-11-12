import "./styles/Items.css"
import SearchBar from "./components/Products/SearchBar"
import ItemsSection from "./components/Products/ItemsSection"
import data from "./data/products.json"
import useAppContext from "./useAppContext"

export default function Products() {

    const { searchTerm } = useAppContext();

    const showAllProducts = () => {
        return data.map(
            (obj, i) => <ItemsSection
                key={i}
                category={obj.category}
                data={obj.items}
            />
        )
    }

    const showResults = (term) => {

        const filteredComponents = data.flatMap(obj => obj.items.filter(i => i.title.includes(term)))

        return (<ItemsSection
            key={"search_results"}
            category={"Search Results"}
            data={filteredComponents}
        />)
    }

    return (
        <>
            <SearchBar />
            {searchTerm === "" ? showAllProducts() : showResults(searchTerm)}
        </>
    )
}