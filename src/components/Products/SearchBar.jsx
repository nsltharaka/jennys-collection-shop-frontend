import useAppContext from "../../useAppContext";
import { BsSearch } from "react-icons/bs";

export default function SearchBar() {

    const { searchTerm, setSearchTerm } = useAppContext();

    return (
        <div className="search">
            <BsSearch className="search-icon" />
            <input className="search-bar"
                type="text" name="searchKey" placeholder="search"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
            />
        </div>
    )
}