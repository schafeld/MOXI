import pathActions from "../../config/pathActions.js";

const executePathAction = () => {
    const path = window.location.pathname;
    const validPathsEqual = Object.values(pathActions.exact);
    const validPathsPartial = Object.values(pathActions.partial);
    let action = null;

    // detect if validPathsEqual has exact match for path or if validPathsPartial has partial match for path
    const isValid = validPathsEqual.some((validPath) => {
        action = validPath.action;
        return validPath.path === path;
    }) || validPathsPartial.some((validPath) => {
        action = validPath.action;
        return path.includes(validPath.pathPart);
    });


    if (isValid) {
        if (action !== null || action !== undefined || action !== "") {
            action();
        }
        return true;
    }

    return false;
}

export default executePathAction;
