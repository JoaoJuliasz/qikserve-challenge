import { useContext } from "react";
import { Context } from "../../Context/HomeContext";

export const useHomeContext = () => {
    const context = useContext(Context)!

    return { ...context }
};