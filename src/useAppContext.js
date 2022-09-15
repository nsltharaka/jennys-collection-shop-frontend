import { useContext } from "react";
import { AppContext } from "./context";

export default function useAppContext() {
    return useContext(AppContext)
}