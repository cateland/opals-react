import * as donations from "../model/donations";

function nextSortOrder(
    sortOrder: donations.SortOptions["sortOrder"]
): donations.SortOptions["sortOrder"] {
    switch (sortOrder) {
        case "asc":
            return "desc";
        case "desc":
            return "asc";
    }
}

/**
 * The sort button extracted as a component inside the module it is used,
 * Note that this i not a render function which are lower case and used not as jsx element but invoked as javascript between curly braces
 * @example
 * ```javascript
 * // example of render function
 * function renderButton(sortBy, sortOption, children, onClick) {
 *  return (<button></button>)
 * }
 * <div>
 *  {renderButton("name", sortOption, "Name", () => ...)}
 * </div>
 * ```
 */
function SortButton({
    sortBy,
    sortOption,
    children,
    onClick,
}: {
    sortBy: donations.SortOptions["sortBy"];
    sortOption: donations.SortOptions;
    children: React.ReactNode;
    onClick: (sortOption: donations.SortOptions) => void;
}) {
    function handleClick() {
        onClick({ sortBy, sortOrder: nextSortOrder(sortOption.sortOrder) });
    }
    return <button onClick={handleClick}>{children}</button>;
}

export default SortButton;