import { createContext } from "react";
import { HomeContext } from "../types/context";

const Context = createContext<HomeContext | null>(null)

const HomeProvider = Context.Provider

export { Context, HomeProvider }