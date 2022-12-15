import { useState } from "react";
import { Moon, Sun } from "../assets";
import { Div, Img } from "../styles";
import { Color } from "../variables";

interface Props {
    image1: string;
    image2: string;
    color1: string;
    color2: string;
}

function SwitchButton({ image1, image2, color1, color2 }: Props) {

    const [active, setActive] = useState(1);

    function changeButton(id: number) {
        if (id === 1) {
            setActive(1);
        } else {
            setActive(2);
        }
    };

    return (
        <Div width="55px" height="25px" padding="3px" display="flex" margin="10px 0" backgroundColor={active === 1 ? `${color1}` : `${color2}`} align="center" justify="space-between" borderRadius="20px">
            <Div
                onClick={() => changeButton(1)}
                width="23px"
                height="23px"
                backgroundColor={Color.darkGray}
                borderRadius="100%"
                border={active === 1 ? `1px solid ${color1}` : "1px solid transparent"}
            >
                <Img src={image1} />
            </Div>
            <Div
                onClick={() => changeButton(2)}
                width="23px"
                height="23px"
                backgroundColor={Color.darkGray}
                borderRadius="100%"
                border={active === 2 ? `1px solid ${color2}` : "1px solid transparent"}
            >
                <Img src={image2} />
            </Div>
        </Div>
    );
}

export default SwitchButton;