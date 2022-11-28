import useAppContext from "../../useAppContext";
import { BsSearch } from "react-icons/bs";
import { MdOutlineClear } from "react-icons/md";

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
            {searchTerm && <MdOutlineClear className="search--clear-icon" onClick={() => setSearchTerm("")} />}
        </div>
    )
}