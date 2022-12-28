import { IranFlag, Moon, Setting, Sun, UsaFlag } from "../assets";
import { Div, Img } from "../styles";
import { Color } from "../variables";
import SwitchButton from "./switch_button";
import { useCallback, useEffect, useRef, useState } from "react";

function SideCard() {

    const [sideBar, setSideBar] = useState(false);
    const wrapperRef: any = useRef(null);

    const showSideBar = () => {
        setSideBar(true)
    };

    useEffect(() => {
        function handleClickOutside(event: any) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setSideBar(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [wrapperRef]);

    return (
        <Div width="120px" height="120px" display="flex" padding="10px 0">
            {sideBar ? (
                <Div ref={wrapperRef} width="80%" height="100%" backgroundColor="linear-gradient(165deg, rgba(12,0,255,1) 0%, rgba(33,192,222,1) 52%)" borderRadius="8px" display="flex" direction="column" align="center" justify="center">
                    <SwitchButton
                        image1={Sun}
                        image2={Moon}
                        color1={Color.blackYellow}
                        color2={Color.blackBlue}
                    />
                    <SwitchButton
                        image1={IranFlag}
                        image2={UsaFlag}
                        color1={Color.lime}
                        color2={Color.blackBlue}
                    />
                </Div>
            ) : null}
            <Div
                width="20%"
                height="15%"
                display="flex"
                align="center"
            >
                <Img src={Setting} cursor="pointer" onClick={showSideBar} />
            </Div>
        </Div>
    );
}

export default SideCard;
