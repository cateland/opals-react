import { useState } from "react";
import * as donations from "../model/donations";
import "./donations.css";

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

function Donations() {
    const [donationsState, updateDonnations] = useState(donations.list());
    const [sortOptionsState, updateSortOptions] = useState<donations.SortOptions>({
        sortBy: "id",
        sortOrder: "asc",
    });

    const handleOption = (sortOptions: donations.SortOptions) => {
        updateSortOptions(sortOptions);
        updateDonnations(
            // sort mutate the array and return a ref to the mutated array, to prevent mutation issue we copy the array using the spread operator
            [...donationsState].sort(
                donations.compareValues(
                    sortOptions.sortBy,
                    sortOptions.sortOrder
                )
            )
        );
    };

    return (
        <>
            <h1>Food Bank Donations</h1>
            <div id="donations">
                <div className="wrapper">
                    <table>
                        <thead>
                            <tr>
                                <th className="item">
                                    <SortButton
                                        sortBy="item"
                                        sortOption={sortOptionsState}
                                        onClick={handleOption}
                                    >
                                        Item
                                    </SortButton>
                                </th>
                                <th>
                                    <SortButton
                                        sortBy="quantity"
                                        sortOption={sortOptionsState}
                                        onClick={handleOption}
                                    >
                                        Quantity
                                    </SortButton>
                                </th>
                                <th>
                                    {" "}
                                    <SortButton
                                        sortBy="expirationDelay"
                                        sortOption={sortOptionsState}
                                        onClick={handleOption}
                                    >
                                        Days Until Expires
                                    </SortButton>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {donationsState.map((donation) => (
                                <tr key={donation.id}>
                                    <td className="item">
                                        <span className="id">
                                            {donation.id}
                                        </span>
                                        <span className="emoji">
                                            {donation.emoji}
                                        </span>
                                        {donation.item}
                                    </td>
                                    <td className="quantity">{`${donation.quantity} kg`}</td>
                                    <td className="expires">
                                        <span
                                            className={
                                                donation.expirationDelay <= 10
                                                    ? "eat-soon"
                                                    : ""
                                            }
                                        >
                                            {donation.expirationDelay}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default Donations;
