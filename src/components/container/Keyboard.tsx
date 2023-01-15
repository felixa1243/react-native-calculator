import {FunctionComponent, useContext, useState} from "react";
import {Button, Row} from "../Index";
import {Colors} from '../../styles/Colors'
import {ThemeContext} from "../../context/ThemeContext";
import {ResultContext} from "../../context/ResultContext";

const Keyboard: FunctionComponent = () => {
    const [num, setNum] = useState<string>("")
    const theme = useContext(ThemeContext)
    const resultCtx = useContext(ResultContext)
    const buttons = [
        ['+', '-', 'x', '/'], ['1', '2', '3', '4'], ['5', '6', '7', '8'], ['9', '0', 'del', '=']
    ]
    return (
        <>
            {buttons.map((item, index) => {
                return (
                    <Row key={index}>
                        {
                            item.flat()
                                .map((buttonItem, buttonKey) => {
                                    const isNum = !buttonItem.match("^[0-9]")
                                    return (
                                        <Button onPress={() => {
                                            switch (buttonItem) {
                                                case '=':
                                                    resultCtx?.setResult(eval(resultCtx?.result))
                                                    break;
                                                case 'x':
                                                    resultCtx?.setResult(resultCtx?.result + "*")
                                                    break;
                                                case 'del':
                                                    resultCtx?.setResult(resultCtx?.result.substr(0, resultCtx?.result.length - 1))
                                                    break;
                                                default:
                                                    resultCtx?.setResult(resultCtx?.result + buttonItem)
                                            }
                                            const lastCharacter = resultCtx?.result.substring(resultCtx?.result.length - 1)
                                            if (lastCharacter?.match("[+-/*]")) {
                                                if(lastCharacter === resultCtx?.result.substring(resultCtx?.result.length-2)){
                                                    console.log(lastCharacter)
                                                }
                                            }
                                        }} bgColor={isNum ? Colors.blue : theme === "light" ?
                                            Colors.light :
                                            Colors.btnDark
                                        }
                                                isBlue={isNum}
                                                key={buttonKey}
                                        >{buttonItem}</Button>
                                    )
                                })
                        }
                    </Row>
                )
            })}
        </>

    )
}
export default Keyboard