import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

export default function LoginScreen() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (username === 'user' && password === 'password') {
            alert('Login successful');
        } else {
            alert('Incorrect credentials');
        }
    };

    return (
        <ImageBackground
            source={{ uri: 'https://example.com/background-image.jpg' }} // Replace with your background image URL
            style={styles.background}
            resizeMode="cover"
        >
            <View style={styles.container}>
                <Text style={styles.title}>Welcome Back!</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Username"
                    placeholderTextColor="#aaa"
                    value={username}
                    onChangeText={setUsername}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    placeholderTextColor="#aaa"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />

                <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                    <Text style={styles.loginButtonText}>Login</Text>
                </TouchableOpacity>

                <Text style={styles.footerText}>Don't have an account? Sign Up</Text>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center', // Centers vertically
        alignItems: 'center', // Centers horizontally
    },
    container: {
        width: '85%',              // Controls the width of the login form
        maxWidth: 400,              // Limits the form width on larger screens
        backgroundColor: 'rgba(255, 255, 255, 0.9)', // Slightly transparent white
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333',
    },
    input: {
        width: '100%',
        padding: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 15,
        backgroundColor: '#fff',
        color: '#333',
    },
    loginButton: {
        backgroundColor: '#007bff',
        paddingVertical: 10,
        borderRadius: 8,
        alignItems: 'center',
        width: '100%',
        marginBottom: 20,
    },
    loginButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    footerText: {
        fontSize: 14,
        color: '#555',
    },
});
