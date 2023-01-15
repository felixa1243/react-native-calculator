import {useContext, useEffect, useState} from "react";
import {ResultContext} from "../../../context/ResultContext";
import {Text} from "react-native";
import {ThemeContext} from "../../../context/ThemeContext";

const Result = () => {
    const result = useContext(ResultContext)
    const theme = useContext(ThemeContext)
    return (
        <Text style={
            {
                fontSize: 40,
                color: theme === "light" ? "black" : "white"
            }
        }>{result?.result && result?.result}</Text>
    )
}
export default Result