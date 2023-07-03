import { FormEvent, useEffect, useMemo, useState } from "react";
import * as sandbox from "../model/sandbox"
import "./sandbox.css";
import { euroCurrency } from "../model/sandbox";
function Sandbox() {
    const [length, setLength] = useState(0);
    const [width, setWidth] = useState(0);
    const [depth, setDepth] = useState(0);
    const [price, setPrice] = useState<null | number>(null);

    const weight = useMemo(() => {
        return sandbox.calculateWeight(length, width, depth);
    }, [length, width, depth])

    useEffect(() => {
        setPrice(null);
    }, [length, width, depth])

    function caculateQuote(event: FormEvent<HTMLFormElement>){
        event.preventDefault();
        setPrice(sandbox.calculate_price(weight));
    }

    return (
        <>
            <h1>Build A Sandbox</h1>
            <div id="sandbox">
                <form onSubmit={caculateQuote}>
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
                    <output className="weight">You need {weight} kg of sand 🏝</output>
                    <button>Get A Quote</button>
                </form>
                {price && <div className="quote">
                    Get your personnal Pétanque field for only {euroCurrency.format(price)}
                </div>}
            </div>
        </>
    );
}

export default Sandbox;
