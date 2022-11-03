import useAppContext from "../../useAppContext";
import { BsSearch } from "react-icons/bs";

export default function SearchBar() {

    const { searchText, setSearchText } = useAppContext();

    return (
        <div className="search">
            <BsSearch className="search-icon" />
            <input className="search-bar"
                type="text" name="searchKey" placeholder="search"
                value={searchText}
                onChange={e => setSearchText(e.target.value)}
            />
        </div>
    )
}