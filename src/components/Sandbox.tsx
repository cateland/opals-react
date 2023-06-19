import "./sandbox.css";
function Sandbox() {
    return (
        <>
            <h1>Build A Sandbox</h1>
            <div id="sandbox">
                <form>
                    <div className="fields">
                        <div>
                            <label htmlFor="length">Length</label>
                            <div className="input">
                                <input type="number" name="length" id="length" />
                                <span className="unit">cm</span>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="width">Width</label>
                            <div className="input">
                                <input type="number" name="width" id="width" />
                                <span className="unit">cm</span>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="depth">Depth</label>
                            <div className="input">
                                <input type="number" name="depth" id="depth" />
                                <span className="unit">cm</span>
                            </div>
                        </div>
                    </div>
                    <div className="weight">You need 150 kg of sand 🏝</div>
                    <button type="submit">Get A Quote</button>
                </form>
            </div>
        </>
    );
}

export default Sandbox;
