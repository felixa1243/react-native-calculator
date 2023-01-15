import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Switch, View} from 'react-native';
import {useState} from "react";
import {ThemeContext} from "./src/context/ThemeContext";
import {Colors} from './src/styles/Colors'
import {Keyboard, Result} from './src/components/Index'
import {ResultContexProvider} from "./src/context/ResultContext";

export default function App() {
    const [theme, setTheme] = useState('light')
    return (
        <ThemeContext.Provider value={theme}>
            <ResultContexProvider>
                <View style={theme === 'light' ? styles.container : [styles.container, {backgroundColor: 'black'}]}>
                    <Result/>
                    <Switch value={theme === 'light'}
                            onValueChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                    />
                    <Keyboard/>
                    <StatusBar style="auto"/>
                </View>
            </ResultContexProvider>
        </ThemeContext.Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
