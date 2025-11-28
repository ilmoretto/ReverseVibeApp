import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ConceptsCard({ title = "Conceitos Aprendidos", children, color = "#4a90e2" }) {
    return (
        <View style={styles.container}>
            <View style={[styles.header, { backgroundColor: color }]}>
                <Text style={styles.title}>{title}</Text>
            </View>
            <View style={styles.content}>
                {children}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f8f9fa',
        borderRadius: 12,
        marginHorizontal: 16,
        marginTop: 20,
        overflow: 'hidden',
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2
    },
    header: {
        padding: 16,
        alignItems: 'center'
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff'
    },
    content: {
        padding: 16
    }
});