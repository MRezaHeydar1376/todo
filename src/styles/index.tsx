import styled from "@emotion/styled/macro";

interface Props {
    width?: string;
    height?: string;
    display?: string;
    justify?: string;
    align?: string;
    backgroundColor?: string;
    border?: string;
    borderRadius?: string;
    cursor?: string;
    padding?: string;
    margin?: string;
}

interface PropsDiv extends Props {
    direction?: string;
    position?: string;
    top?: string;
    left?: string;
    boxShadow?: string;
    overflowY?: string;
    overflowX?: string;
    zIndex?: string;
}

interface PropsButton extends Props {
    hoverBorder?: string;
}

interface PropsText extends Props {
    fontSize?: string;
    color?: string;
    fontWeight?: string;
    position?: string;
    top?: string;
    left?: string;
    colorHover?: string;
}

interface PropsLine extends Props {
    color?: string;
    boxShadow?: string;
}

interface PropsImg extends Props {
    position?: string;
    top?: string;
    left?: string;
}

interface PropsInput extends Props {}

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
    background: ${({ backgroundColor = "transparent" }) => backgroundColor ? backgroundColor : "transparent"};
    box-shadow: ${({ boxShadow = "none" }) => (boxShadow ? boxShadow : "none")};
    border-radius: ${({ borderRadius = "0px" }) => (borderRadius ? borderRadius : "0px")};
    margin: ${({ margin = "0px" }) => (margin ? margin : "0px")};
    border: ${({ border = "none" }) => (border ? border : "none")};
    z-index: ${({ zIndex = "1" }) => (zIndex ? zIndex : "1")};
    cursor: ${({ cursor = "auto" }) => (cursor ? cursor : "auto")};
    overflow-y: ${({ overflowY = "visible" }) => (overflowY ? overflowY : "visible")};
    overflow-x: ${({ overflowX = "visible" }) => (overflowX ? overflowX : "visible")};
    &::-webkit-scrollbar {
        width: 7px;
        height: 8px !important;
    }
    &::-webkit-scrollbar-track {
        background: transparent;
        width: 10px;
        height: 140px;

    }
    &::-webkit-scrollbar-thumb {
        background: #214fdb;
        border-radius: 50px;
        height: 1px;
    }
`
export const Button = styled.button<PropsButton>`
    width: ${({ width = "100%" }) => (width ? width : "100%")};
    height: ${({ height = "auto" }) => (height ? height : "auto")};
    background: ${({ backgroundColor = "transparent" }) => (backgroundColor ? backgroundColor : "transparent")};
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
export const H1 = styled.h1<PropsText>`
    font-size: ${({ fontSize = "auto" }) => (fontSize ? fontSize : "auto")};
    color: ${({ theme }) => theme.white};
    font-weight: ${({ fontWeight = "500" }) => (fontWeight ? fontWeight : "500")};
    font-family: 'Roboto Condensed', sans-serif;
    margin: ${({ margin = "0" }) => (margin ? margin : "0")};
    cursor: ${({ cursor = "auto" }) => (cursor ? cursor : "auto")};
    position: ${({ position = "block" }) => (position ? position : "block")};
    top: ${({ top = "0px" }) => (top ? top : "0px")};
    left: ${({ left = "0px" }) => (left ? left : "0px")};
    &:hover{
        color: ${({ colorHover = "none" }) => (colorHover ? colorHover : "none")};
    }
`
export const H2 = styled.h2<PropsText>`
    font-size: ${({ fontSize = "auto" }) => (fontSize ? fontSize : "auto")};
    color: ${({ theme }) => theme.white};
    font-weight: ${({ fontWeight = "500" }) => (fontWeight ? fontWeight : "500")};
    font-family: 'Roboto Condensed', sans-serif;
    margin: ${({ margin = "0" }) => (margin ? margin : "0")};
    cursor: ${({ cursor = "auto" }) => (cursor ? cursor : "auto")};
    position: ${({ position = "block" }) => (position ? position : "block")};
    top: ${({ top = "0px" }) => (top ? top : "0px")};
    left: ${({ left = "0px" }) => (left ? left : "0px")};
    &:hover{
        color: ${({ colorHover = "none" }) => (colorHover ? colorHover : "none")};
    }
`
export const H3 = styled.h3<PropsText>`
    font-size: ${({ fontSize = "auto" }) => (fontSize ? fontSize : "auto")};
    color: ${({ theme }) => theme.white};
    font-weight: ${({ fontWeight = "500" }) => (fontWeight ? fontWeight : "500")};
    font-family: 'Roboto Condensed', sans-serif;
    margin: ${({ margin = "0" }) => (margin ? margin : "0")};
    cursor: ${({ cursor = "auto" }) => (cursor ? cursor : "auto")};
    position: ${({ position = "block" }) => (position ? position : "block")};
    top: ${({ top = "0px" }) => (top ? top : "0px")};
    left: ${({ left = "0px" }) => (left ? left : "0px")};
    &:hover{
        color: ${({ colorHover = "none" }) => (colorHover ? colorHover : "none")};
    }
`
export const H4 = styled.h4<PropsText>`
    font-size: ${({ fontSize = "auto" }) => (fontSize ? fontSize : "auto")};
    color: ${({ theme }) => theme.white};
    font-weight: ${({ fontWeight = "500" }) => (fontWeight ? fontWeight : "500")};
    font-family: 'Roboto Condensed', sans-serif;
    margin: ${({ margin = "0" }) => (margin ? margin : "0")};
    cursor: ${({ cursor = "auto" }) => (cursor ? cursor : "auto")};
    position: ${({ position = "block" }) => (position ? position : "block")};
    top: ${({ top = "0px" }) => (top ? top : "0px")};
    left: ${({ left = "0px" }) => (left ? left : "0px")};
    &:hover{
        color: ${({ colorHover = "none" }) => (colorHover ? colorHover : "none")};
    }
`
export const H5 = styled.h5<PropsText>`
    font-size: ${({ fontSize = "auto" }) => (fontSize ? fontSize : "auto")};
    color: ${({ theme }) => theme.white};
    font-weight: ${({ fontWeight = "500" }) => (fontWeight ? fontWeight : "500")};
    font-family: 'Roboto Condensed', sans-serif;
    margin: ${({ margin = "0" }) => (margin ? margin : "0")};
    cursor: ${({ cursor = "auto" }) => (cursor ? cursor : "auto")};
    position: ${({ position = "block" }) => (position ? position : "block")};
    top: ${({ top = "0px" }) => (top ? top : "0px")};
    left: ${({ left = "0px" }) => (left ? left : "0px")};
    &:hover{
        color: ${({ colorHover = "none" }) => (colorHover ? colorHover : "none")};
    }
`
export const H6 = styled.h6<PropsText>`
    font-size: ${({ fontSize = "auto" }) => (fontSize ? fontSize : "auto")};
    color: ${({ theme }) => theme.white};
    font-weight: ${({ fontWeight = "500" }) => (fontWeight ? fontWeight : "500")};
    font-family: 'Roboto Condensed', sans-serif;
    margin: ${({ margin = "0" }) => (margin ? margin : "0")};
    cursor: ${({ cursor = "auto" }) => (cursor ? cursor : "auto")};
    position: ${({ position = "block" }) => (position ? position : "block")};
    top: ${({ top = "0px" }) => (top ? top : "0px")};
    left: ${({ left = "0px" }) => (left ? left : "0px")};
    &:hover{
        color: ${({ colorHover = "none" }) => (colorHover ? colorHover : "none")};
    }
`
export const Paragraph = styled.p<PropsText>`
    font-size: ${({ fontSize = "auto" }) => (fontSize ? fontSize : "auto")};
    color: ${({ theme }) => theme.white};
    font-weight: ${({ fontWeight = "500" }) => (fontWeight ? fontWeight : "500")};
    font-family: 'Roboto Condensed', sans-serif;
    margin: ${({ margin = "0" }) => (margin ? margin : "0")};
    cursor: ${({ cursor = "auto" }) => (cursor ? cursor : "auto")};
    position: ${({ position = "block" }) => (position ? position : "block")};
    top: ${({ top = "0px" }) => (top ? top : "0px")};
    left: ${({ left = "0px" }) => (left ? left : "0px")};
    &:hover{
        color: ${({ colorHover = "none" }) => (colorHover ? colorHover : "none")};
    }
    word-break: break-all;
`
export const Line = styled.hr<PropsLine>`
    width: ${({ width = "100%" }) => (width ? width : "100%")};
    height: ${({ height = "auto" }) => (height ? height : "auto")};
    background-color: ${({ theme }) => theme.white};
    margin: ${({ margin = "0px" }) => (margin ? margin : "0px")};
    box-shadow: ${({ boxShadow = "none" }) => (boxShadow ? boxShadow : "none")};
    padding: 0px;
`
export const Img = styled.img<PropsImg>`
    border-radius: ${({ borderRadius = "0%" }) => (borderRadius ? borderRadius : "0%")};
    width: ${({ width = "100%" }) => (width ? width : "100%")};
    height: ${({ height = "auto" }) => (height ? height : "auto")};
    position: ${({ position = "block" }) => (position ? position : "block")};
    top: ${({ top = "0px" }) => (top ? top : "0px")};
    left: ${({ left = "0px" }) => (left ? left : "0px")};
    cursor: ${({ cursor = "auto" }) => (cursor ? cursor : "auto")};
`
export const Input = styled.input<PropsInput>`
    width: ${({ width = "100%" }) => (width ? width : "100%")};
    height: ${({ height = "auto" }) => (height ? height : "auto")};
    background-color: ${({ theme }) => theme.black};
    color: ${({ theme }) => theme.white};
    padding: ${({ padding = "0px" }) => (padding ? padding : "0px")};
    border: ${({ border = "0.5px solid black" }) => (border ? border : "0.5px solid black")};
    border-radius: ${({ borderRadius = "0px" }) => (borderRadius ? borderRadius : "0px")};
    box-sizing: border-box;
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: 500;
    margin: ${({ margin = "0px" }) => (margin ? margin : "0px")};
    &::placeholder {
        font-family: 'Roboto Condensed', sans-serif;
        font-weight: 500;
        padding: 0 8px;
    }
    &:focus {
        outline: none;
    }
`
