import "./donations.css";

function Donations() {
    return (
        <>
            <h1>Food Bank Donations</h1>
            <div id="donations">
                <div className="wrapper">
                    <table>
                        <thead>
                            <tr>
                                <th className="item">Item</th>
                                <th>Quantity</th>
                                <th>Days Until Expires</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="item">
                                    <span className="id">lmekdvlhnejqt</span>
                                    <span className="emoji">🍎</span>
                                    Apples
                                </td>
                                <td className="quantity">12 kg</td>
                                <td className="expires">
                                    <span>11</span>
                                </td>
                            </tr>
                            <tr>
                                <td className="item">
                                    <span className="id">lmekdvlhltbut</span>
                                    <span className="emoji">🥑</span>
                                    Avocados
                                </td>
                                <td className="quantity">3 kg</td>
                                <td className="expires">
                                    <span className="eat-soon">6</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default Donations;
