import { useState } from "react";
import lightDown from "../assets/down.svg";
import lightUp from "../assets/up.svg";
import lightOff from "../assets/light-off.svg";
import lightOn from "../assets/light-on.svg";
import fire from "../assets/fire.svg";
import "./light.css";
function Light() {
    const [intensity, setIntensity] = useState(30);
    function down() {
        {/** As you experiment around you will find out that this code does allow light intensity values to go over 100 and under 0 fix it */}
        setIntensity(intensity - 10);
    }
    function up() {
        setIntensity(intensity + 10);
    }
    {/** explore different way to refactor this code, be it using https://react.dev/reference/react/useReducer or another fashion */}

    return (
        <>
            <h1>Front Porch Light</h1>
            <div id="light">
                <div className="meter">
                    <span style={{ width: `${intensity}%` }}></span>
                </div>
                {/** implement the switch off functionality */}
                <button>
                    <img src={lightOff} alt="off'" />
                </button>
                <button onClick={down}>
                    <img src={lightDown} alt="down" />
                </button>
                {/** implement the fancy random intensity to surprise your neighbours */}
                <button>
                    <img src={fire} alt="random" />
                </button>
                <button onClick={up}>
                    <img src={lightUp} alt="up" />
                </button>
                {/** implement the switch on functionality */}
                <button>
                    <img src={lightOn} alt="on" />
                </button>
            </div>
        </>
    );
}

export default Light;
