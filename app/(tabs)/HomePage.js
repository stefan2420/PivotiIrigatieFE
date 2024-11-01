import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

export default function HomePage() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.title}>Welcome to Pivot Monitoring!</Text>
                <Text style={styles.subtitle}>Easily manage and monitor your irrigation systems</Text>
            </View>

            {/* Call to Action */}
            <TouchableOpacity style={styles.callToActionButton}>
                <Text style={styles.callToActionText}>Get Started</Text>
            </TouchableOpacity>

            {/* Navigation Section */}
            <View style={styles.navSection}>
                <TouchableOpacity style={styles.navCard}>
                    <Text style={styles.navText}>Settings</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navCard}>
                    <Text style={styles.navText}>Diagnostics</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navCard}>
                    <Text style={styles.navText}>Control</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navCard}>
                    <Text style={styles.navText}>Service</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#f9f9f9',
        paddingVertical: 20,
        alignItems: 'center',
        paddingHorizontal: 16,
    },
    header: {
        marginBottom: 30,
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
    },
    callToActionButton: {
        backgroundColor: '#4CAF50',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 8,
        marginBottom: 30,
        alignItems: 'center',
    },
    callToActionText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    navSection: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 16,
    },
    navCard: {
        backgroundColor: '#ffffff',
        padding: 20,
        borderRadius: 10,
        width: '40%',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 8,
        elevation: 3, // Android shadow
        shadowColor: '#000', // iOS shadow
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    navText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
});
