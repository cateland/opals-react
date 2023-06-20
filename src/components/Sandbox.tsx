import { useMemo, useState } from "react";
import * as sandbox from "../model/sandbox"
import "./sandbox.css";
function Sandbox() {
    const [length, setLength] = useState(0);
    const [width, setWidth] = useState(0);
    const [depth, setDepth] = useState(0);

    const weight = useMemo(() => {
        return sandbox.calculateWeight(length, width, depth);
    }, [length, width, depth])
    return (
        <>
            <h1>Build A Sandbox</h1>
            <div id="sandbox">
                <form>
                    <div className="fields">
                        <div>
                            <label htmlFor="length">Length</label>
                            <div className="input">
                                <input type="number" name="length" id="length" value={length} onChange={(event) => setLength(parseInt(event.target.value))} />
                                <span className="unit">cm</span>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="width">Width</label>
                            <div className="input">
                                <input type="number" name="width" id="width" value={width} onChange={(event) => setWidth(parseInt(event.target.value))} />
                                <span className="unit">cm</span>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="depth">Depth</label>
                            <div className="input">
                                <input type="number" name="depth" id="depth" value={depth} onChange={(event) => setDepth(parseInt(event.target.value))}/>
                                <span className="unit">cm</span>
                            </div>
                        </div>
                    </div>
                    <div className="weight">You need {weight} kg of sand 🏝</div>
                    <button type="submit">Get A Quote</button>
                </form>
            </div>
        </>
    );
}

export default Sandbox;
