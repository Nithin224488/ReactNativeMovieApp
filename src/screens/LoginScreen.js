import React from 'react'
import { ScrollView, TextInput, View, Text, TouchableOpacity, StyleSheet } from 'react-native'

export default function LoginScreen() {
    return (
        <ScrollView contentContainerStyle={styles.container} >

            <View style={styles.loginform}>
                <Text style={styles.signInHeading}>Sign In</Text>
                <Text style={styles.label}>Username</Text>
                <TextInput type="text" placeholder="Username" style={styles.input} />
                <Text style={styles.label}>Password</Text>
                <TextInput placeholder="Password" style={styles.input} />
                <View >

                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>
                            Sign in
                        </Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.signInHeading}>OR</Text>
                <View >

                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>
                            Sign up
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F6F7',

        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",

        maxWidth: 1110,

    },
    loginform: {
        padding: 20,
        backgroundColor: "#e2e8f0",

    },
    signInHeading: {
        padding: 10,
        textAlign: "center"
    },
    label: {
        marginBottom: 0,
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: 12,
        lineHeight: 16,
        color: '#475569',
        marginTop: 15,
    }
    ,
    input: {
        fontSize: 14,
        height: 40,
        backgroundColor: "#ffffff",
        color: "#64748b",
        borderRadius: 5,
        marginTop: 5,
        padding: 10
    },
    button: {
        height: 40,
        marginTop: 20,
        marginBottom: 2,
        backgroundColor: 'red',
        borderRadius: 8,
        border: 'none',
        outline: 'none',
        cursor: 'pointer',
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    buttonText: {
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: 13,
        color: "#ffffff",
        padding: 10
    },

});
