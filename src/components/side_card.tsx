import { IranFlag, Moon, Setting, SettingWhite, Sun, UsaFlag } from "../assets";
import { Div, Img } from "../styles";
import SwitchButton from "./switch_button";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "@emotion/react";
import { useStore } from "../stores/context";
import { observer } from "mobx-react-lite";

function SideCard() {

    const [sideBar, setSideBar] = useState(false);
    const wrapperRef: any = useRef(null);
    const {darkTheme, toggleTheme} = useStore();
    const theme = useTheme();

    const showSideBar = () => {
        setSideBar(true)
    };

    const changeTheme = () => {
        toggleTheme();
    }

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
                        color1={theme.blackYellow}
                        color2={theme.blackBlue}
                        onClick={changeTheme}
                    />
                    <SwitchButton
                        image1={IranFlag}
                        image2={UsaFlag}
                        color1={theme.lime}
                        color2={theme.blackBlue} 
                        onClick={() => {}} 
                        />
                </Div>
            ) : null}
            <Div
                width="20%"
                height="15%"
                display="flex"
                align="center"
                backgroundColor="transparent"
            >
                <Img src={darkTheme ? SettingWhite : Setting} cursor="pointer" onClick={showSideBar} />
            </Div>
        </Div>
    );
}

export default observer(SideCard);
