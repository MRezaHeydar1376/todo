import { Setting } from "../assets";
import { Div, Img } from "../styles";
import { Color } from "../variables";
import SwitchButton from "./switch_button";

function SideCard() {
    return (
        <Div width="120px" height="150px" display="flex" margin="10px 0">
            <Div width="80%" height="100%" border="2px solid blue">
                <SwitchButton />
            </Div>
            <Div
                width="20%"
                height="15%"
                display="flex"
                align="center"
            >
                <Img src={Setting} cursor="pointer"/>
            </Div>
        </Div>
    );
}

export default SideCard;