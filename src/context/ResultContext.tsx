import {createContext, Dispatch, FunctionComponent, useMemo, useState} from "react";
import {View, ViewProps} from "react-native";

type ResultValue = {
    result: string,
    setResult: Dispatch<string>
}
export const ResultContext = createContext<null | ResultValue>(null)
export const ResultContexProvider: FunctionComponent<ViewProps> = (props) => {
    const [result, setResult] = useState("")
    const value = useMemo(() => ({result, setResult}), [result])
    return (
        <ResultContext.Provider value={value}>
                {props.children}
        </ResultContext.Provider>
    )
}