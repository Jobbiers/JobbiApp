import { useState } from "react";
import { TextInput, View, StyleSheet, Dimensions } from "react-native"
import { PopButton } from "@repo/ui/src/components";
import { SafeAreaView } from "react-native-safe-area-context";

const { width, height } = Dimensions.get("screen")

const LoginPage = () => {

    const [ text, setText ] = useState("");
    const [ psw, setPsw ] = useState("");

    return (
        <SafeAreaView style={styles.main}>

            <View>
                <TextInput 
                onChangeText={setText} 
                value={text} 
                style={styles.input}
                placeholder="Username"
                />
                <TextInput 
                onChangeText={setPsw} 
                value={psw}
                keyboardType="visible-password" 
                style={styles.input}
                placeholder="Username"
                />
            </View>
            <PopButton 
                onPress={() => console.log("pressed")} 
                title="Iniciar Sesion"
                button_styles={styles.button} 
                button_text_styles={styles.buttonText}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        height: height,
        justifyContent: "space-between",
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#6F14E8',
        borderRadius: 50,
        width: width * 0.8,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: "white",
        fontSize: 30,
        fontFamily: "ComfortaBold",
        textAlign: "center"
    },
    input: {
        height: 40,
        width: width * 0.70,
        margin: 12,
        borderWidth: 1,
        borderRadius: 15,
        padding: 10,
    },
})

export default LoginPage;