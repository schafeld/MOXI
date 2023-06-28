import paths from "../../config/paths.js";

const isValidPath = () => {
    const path = window.location.pathname;
    const validPathsEqual = Object.values(paths.exact);
    const validPathsPartial = Object.values(paths.partial);

    // detect pages or page types
    const isValid = validPathsEqual.includes(path) || validPathsPartial.some((validPath) => {
        return path.includes(validPath);
    });

    return isValid;

}

export default isValidPath;