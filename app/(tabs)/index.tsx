// app/(tabs)/index.tsx
import React, { useEffect } from 'react';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
    const router = useRouter();

    useEffect(() => {
        // Redirect to the LoginScreen on app start
        router.replace('/LoginScreen'); // Use correct path relative to your app directory
    }, [router]);

    return null; // No UI to render here
}
