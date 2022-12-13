import styled from "@emotion/styled/macro";
import { Color } from "../variables";
import { css } from '@emotion/react'

interface PropsDiv {
    width?: string;
    height?: string;
    display?: string;
    justify?: string;
    align?: string;
    direction?: string;
    position?: string;
    top?: string;
    left?: string;
    backgroundColor?: string;
    boxShadow?: string;
    border?: string;
    borderRadius?: string;
    padding?: string;
    overflowY?: string;
    overflowX?: string;
    margin?: string;
    zIndex?: string;
    cursor?: string;
}

interface PropsButton {
    width?: string;
    height?: string;
    backgrondColor?: string;
    display?: string;
    justify?: string;
    align?: string;
    border?: string;
    borderRadius?: string;
    hoverBorder?: string;
}

export const Div = styled.div<PropsDiv>`
    width: ${({ width = "100%" }) => (width ? width : "100%")};
    height: ${({ height = "auto" }) => (height ? height : "auto")};
    display: ${({ display = "block" }) => (display ? display : "block")};
    justify-content: ${({ justify = "start" }) => (justify ? justify : "start")};
    align-items: ${({ align = "flex-start" }) => (align ? align : "flex-start")};
    flex-direction: ${({ direction = "row" }) => (direction ? direction : "row")};
    position: ${({ position = "block" }) => (position ? position : "row")};
    top: ${({ top = "0px" }) => (top ? top : "0px")};
    left: ${({ left = "none" }) => (left ? left : "none")};
    padding: ${({ padding = "0px" }) => (padding ? padding : "0px")};
    background: ${({ backgroundColor = "transparent" }) => (backgroundColor ? backgroundColor : "transparent")};
    box-shadow: ${({ boxShadow = "none" }) => (boxShadow ? boxShadow : "none")};
    border-radius: ${({ borderRadius = "0px" }) => (borderRadius ? borderRadius : "0px")};
    margin: ${({ margin = "0px" }) => (margin ? margin : "0px")};
    border: ${({ border = "none" }) => (border ? border : "none")};
    z-index: ${({ zIndex = "1" }) => (zIndex ? zIndex : "1")};
    cursor: ${({ cursor = "auto" }) => (cursor ? cursor : "auto")};
    overflow-y: ${({ overflowY = "visible" }) => (overflowY ? overflowY : "visible")};
    overflow-x: ${({ overflowX = "visible" }) => (overflowX ? overflowX : "visible")};
    &::-webkit-scrollbar {
        width: 10px;
        height: 8px !important;
    }
    &::-webkit-scrollbar-track {
        background: transparent;
        width: 10px;
        height: 140px;

    }
    &::-webkit-scrollbar-thumb {
        background: #b49dd8;
        border-radius: 50px;
        height: 1px;
    }
`
export const Button = styled.button<PropsButton>`
    width: ${({ width = "100%" }) => (width ? width : "100%")};
    height: ${({ height = "auto" }) => (height ? height : "auto")};
    background-color: ${({ backgrondColor = "transparent" }) => (backgrondColor ? backgrondColor : "transparent")};
    display: ${({ display = "block" }) => (display ? display : "block")};
    justify-content: ${({ justify = "start" }) => (justify ? justify : "start")};
    align-items: ${({ align = "flex-start" }) => (align ? align : "flex-start")};
    border: ${({ border = "1px solid black" }) => (border ? border : "1px solid black")};
    border-radius: ${({ borderRadius = "1px solid black" }) => (borderRadius ? borderRadius : "1px solid black")};
    cursor: pointer;
    &:hover {
        border-bottom: ${({ hoverBorder = "none" }) => (hoverBorder ? hoverBorder : "none")};
    }
`
