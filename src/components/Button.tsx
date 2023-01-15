import {Text, TouchableOpacity, TouchableOpacityProps} from "react-native";
import React, {useContext} from "react";
import {ThemeContext} from "../context/ThemeContext";
import {Style} from "../styles/GlobalStyle";

interface BtnProps extends TouchableOpacityProps {
    onPress: () => void,
    isBlue?: boolean,
    isGray?: boolean,
    bgColor?: string,
    children: React.ReactNode
}

const Button: React.FunctionComponent<BtnProps> = (props) => {
    const {isBlue, isGray, children} = props
    const theme = useContext(ThemeContext)
    return (
        <TouchableOpacity style={[Style.genericButtonStyle, {backgroundColor:props.bgColor}]} {...props}>
            <Text style={
                isBlue || isGray ? Style.smallTextLight
                    : theme === "dark"
                        ? Style.smallTextLight
                        : Style.smallTextDark
            }>{children}</Text>
        </TouchableOpacity>
    )
}
export default Button