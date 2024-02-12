import { useState } from "react";
import { TextInput, View, StyleSheet, Dimensions, Text, Image, Pressable } from "react-native"
import { PopButton } from "@repo/ui/src/components";
import DropShadow from "react-native-drop-shadow";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from 'expo-status-bar';

const { width, height } = Dimensions.get("screen");

const SignUpPage = ({navigation}: any) => {

    const [ name, setName ] = useState("");
    const [ surName, setSurName ] = useState("");
    const [ phone, setPhone] = useState("");
    const [ email, setEmail] = useState("");
    const [ password, setPassword] = useState("");
    const [focusedInput, setFocusedInput] = useState("");

    return (
        <SafeAreaView style={styles.main}>
            <StatusBar />
            <View style={{height: height * 0.25}}>
                <Image style={{ height: 80 }} source={require("../../../assets/Jobbi-small.png")} />
                <Text style={styles.title}>¡Creá tu cuenta!</Text>
            </View>
            <View style={{height: height * 0.60, alignItems: 'center' }}>
                <DropShadow style={focusedInput == "username" && styles.shadowProp}>
                    <TextInput 
                    onChangeText={setName}
                    onFocus={() => setFocusedInput("username")}
                    value={name} 
                    style={styles.input}
                    placeholder="Username"
                    />
                </DropShadow>
                <DropShadow style={focusedInput == "surname" && styles.shadowProp}>
                    <TextInput 
                    onChangeText={setSurName}
                    onFocus={() => setFocusedInput("surname")}
                    value={surName} 
                    style={styles.input}
                    placeholder="Apellido"
                    />
                </DropShadow>
                <DropShadow style={focusedInput == "phone" && styles.shadowProp}>
                    <TextInput 
                    onChangeText={setPhone}
                    onFocus={() => setFocusedInput("phone")}
                    value={phone} 
                    style={styles.input}
                    placeholder="Teléfono"
                    />
                </DropShadow>
                <DropShadow style={focusedInput == "email" && styles.shadowProp}>
                    <TextInput 
                    onChangeText={setEmail}
                    onFocus={() => setFocusedInput("email")}
                    value={email} 
                    style={styles.input}
                    placeholder="Email"
                    />
                </DropShadow>
                <DropShadow style={focusedInput == "password" && styles.shadowProp}>
                    <TextInput 
                    onChangeText={setPassword}
                    onFocus={() => setFocusedInput("password")}
                    value={password}
                    keyboardType="visible-password" 
                    style={[styles.input]}
                    placeholder="Contraseña"
                    />
                </DropShadow>
                <View style={styles.buttonContainer}>
                    <PopButton
                        onPress={() => console.log("pressed")}
                        title="Registrarse"
                        button_styles={styles.button}
                        button_text_styles={styles.buttonText}
                    />
                </View>
                <View style={{flex: 1, marginTop: 75, flexDirection: "row"}}>
                    <Text>¿Ya tienes cuenta?</Text>
                    <Text style={styles.textPressable} onPress={() => navigation.navigate("LoginPage")}> Inicia sesión</Text>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        height: height,
        justifyContent: "center",
        alignItems: 'center',
    },
    footerContainer: {
        height: height * 0.03
    },
    buttonContainer: {
        width: width * 0.70,
        justifyContent: "center",
        alignItems: 'flex-end',
        marginTop: 50
    },
    textPressable: {
        color: '#6F14E8',

    },
    button: {
        backgroundColor: '#6F14E8',
        borderRadius: 50,
        width: width * 0.70,
        height: height * 0.05,
        justifyContent: 'center',
    },
    buttonText: {
        color: "white",
        fontSize: 25,
        fontFamily: "ComfortaBold",
        textAlign: "center"
    },
    text: {
        fontSize: 10,
        fontFamily: "ComfortaBold",
        textAlign: "right",
        width: width * 0.70
    },
    title: {
        color: "black",
        fontSize: 25,
        fontFamily: "ComfortaBold",
        textAlign: "center"
    },
    input: {
        height: height * 0.06,
        width: width * 0.70,
        margin: 10,
        borderWidth: 1,
        borderColor: "#D9D9D9",
        borderRadius: 10,
        padding: 10,
    },
    shadowProp: {
        shadowColor: '#fffff',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.25,
        shadowRadius: 2.5,
      },
})

export default SignUpPage;