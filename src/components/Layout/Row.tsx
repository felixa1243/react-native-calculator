import {FunctionComponent} from "react";
import {View, ViewProps} from "react-native";

const Row: FunctionComponent<ViewProps> = (props) => {
    return (
        <View {...props} style={{flexDirection: 'row',maxWidth:'100%'}}>
            {props.children}
        </View>
    )
}
export default Row