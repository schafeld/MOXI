import pathActions from "../../config/pathActions.js";
import logger from "./logger.mjs";

const isValidPath = () => {
    const path = window.location.pathname;
    const validPathsEqual = Object.values(pathActions.exact);
    const validPathsPartial = Object.values(pathActions.partial);
    let isValid = false;

    // detect if validPathsEqual has exact match for path or if validPathsPartial has partial match for path
    isValid = validPathsEqual.some((validPath) => {
        validPath.path === path ? logger("Exact path match. validPath.path = " + validPath.path) : null;
        return validPath.path === path;
    }) || validPathsPartial.some((validPath) => {
        path.includes(validPath.pathPart) ? logger("Path category match. validPath.pathPart = " + validPath.pathPart) : null;
        return path.includes(validPath.pathPart);
    });

    return isValid;
}

export default isValidPath;