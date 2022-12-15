import { useState } from "react";
import { Moon, Sun } from "../assets";
import { Div, Img } from "../styles";
import { Color } from "../variables";

function SwitchButton() {

    const [active, setActive] = useState(1);

    function changeButton(id: number) {
        if (id === 1) {
            setActive(1);
        } else {
            setActive(2);
        }
    };

    return (
        <Div width="55px" height="25px" padding="3px" display="flex" backgroundColor={active === 1 ? `${Color.blackYellow}` : `${Color.blackBlue}`} align="center" justify="space-between" borderRadius="20px">
            <Div
                onClick={() => changeButton(1)}
                width="23px"
                height="23px"
                backgroundColor={Color.darkGray}
                borderRadius="100%"
                border={active === 1 ? `1px solid ${Color.blackYellow}` : "1px solid transparent"}
            >
                <Img src={Sun} />
            </Div>
            <Div
                onClick={() => changeButton(2)}
                width="23px"
                height="23px"
                backgroundColor={Color.darkGray}
                borderRadius="100%"
                border={active === 2 ? `1px solid ${Color.blackBlue}` : "1px solid transparent"}
            >
                <Img src={Moon} />
            </Div>
        </Div>
    );
}

export default SwitchButton;