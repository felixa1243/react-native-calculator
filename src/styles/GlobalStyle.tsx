import {StyleSheet} from "react-native";
import {Colors} from './Colors'

interface ILooseObject {
    [key: string]: any
}

const genericButtonStyle = {
    width: 72,
    height: 72,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8
}
const genericFontStyle = {
    fontSize: 32
}
export const Style = StyleSheet.create<ILooseObject>({
    genericButtonStyle,
    btnBlue: {
        ...genericButtonStyle,
        backgroundColor: Colors.blue
    },
    btnDark: {
        ...genericButtonStyle,
        backgroundColor: Colors.btnDark
    },
    btnGray: {
        ...genericButtonStyle,
        backgroundColor: Colors.btnGray
    },
    smallTextLight: {
        ...genericFontStyle,
        color: Colors.white
    },
    smallTextDark: {
        ...genericFontStyle,
        color: Colors.dark
    },
    row: {
        maxWidth: '100%',
        flexDirection: 'row'
    },
    viewBottom: {
        position: 'absolute',
        bottom: 50
    },
    screenFirstNumber: {
        fontSize: 96,
        color: Colors.gray,
        fontWeight: '200',
        alignSelf: 'flex-end'
    },
    screenSecondNumber: {
        fontSize: 40,
        color: Colors.gray,
        fontWeight: '200',
        alignSelf: 'flex-end'
    }
})