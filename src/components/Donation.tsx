import { useState } from "react";
import type { Donation } from "../model/donations";

type DonationProps = {
    donation: Donation;
    onUpdateQuantity: (quantity: number) => void;
}

type Read = {__type: "read"};
type Write = {__type: "write", quantity: number};

type ComponentState = Read | Write;

export function Donation({ donation, onUpdateQuantity }: DonationProps) {
    const [state, setState] = useState<ComponentState>({__type: "read"});
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({__type: "write", quantity: parseInt(event.currentTarget.value)});
    };

    const onSave = (state: Write) => {
            onUpdateQuantity(state.quantity);
            setState({__type: "read"});
    }

    const onCancel = () => {
        setState({__type: "read"});
    }
    return (
        <tr>
            <td className="item">
                <span className="id">{donation.id}</span>
                <span className="emoji">{donation.emoji}</span>
                {donation.item}
            </td>
            <td className="quantity">
                {state.__type === "read" ? (
                    `${donation.quantity} kg`
                ) : (
                    <input type="number" value={state.quantity} onChange={onChange} />
                )}
            </td>
            <td className="expires">
                <span
                    className={donation.expirationDelay <= 10 ? "eat-soon" : ""}
                >
                    {donation.expirationDelay}
                </span>
            </td>
            <td>
                {state.__type === "read" ? (
                    <button
                        onClick={() => {
                            setState({__type: "write", quantity: donation.quantity});
                        }}
                    >
                        Edit
                    </button>
                ) : (
                    <>
                    <button onClick={onCancel}>Cancel</button>
                    <button
                        onClick={() => onSave(state)}
                    >
                        Save
                    </button>
                    </>
                )}
            </td>
        </tr>
    );
}
