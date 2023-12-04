import { useState } from "react";
import * as donations from "../model/donations";
import "./donations.css";
import SortButton from "./SortButton";
import { Donation } from "./Donation";

export function DonationsList() {
    const [donationsState, updateDonnations] = useState(donations.list());
    const [sortOptionsState, updateSortOptions] =
        useState<donations.SortOptions>({
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
                                <Donation key={donation.id} donation={donation}/>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
