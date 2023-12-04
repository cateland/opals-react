import type { Donation } from "../model/donations";

export function Donation({ donation }: { donation: Donation }) {
    return (
        <tr>
            <td className="item">
                <span className="id">{donation.id}</span>
                <span className="emoji">{donation.emoji}</span>
                {donation.item}
            </td>
            <td className="quantity">{`${donation.quantity} kg`}</td>
            <td className="expires">
                <span
                    className={donation.expirationDelay <= 10 ? "eat-soon" : ""}
                >
                    {donation.expirationDelay}
                </span>
            </td>
        </tr>
    );
}
