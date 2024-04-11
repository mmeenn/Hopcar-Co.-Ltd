import { createContext } from "react";

export const HandlerContext = createContext({
    addCarListHandler: (newCarData) => {},
    deleteHandler: (id) => {},
    editHandler: (id, car) => {}
});