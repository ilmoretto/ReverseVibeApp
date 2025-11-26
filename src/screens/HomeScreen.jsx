import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

export default function HomeScreen({ navigation }) {

    // Função auxiliar para criar botões de menu repetitivos
    const MenuButton = ({ title, route, color }) => (
        <TouchableOpacity
            style={[styles.button, { backgroundColor: color }]}
            onPress={() => navigation.navigate(route)}
        >
            <Text style={styles.buttonText}>{title}</Text>
            <Text style={styles.arrow}>→</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.header}>📚 MetaNative</Text>
            <Text style={styles.subHeader}>Escolha um tópico para aprender:</Text>

            <ScrollView style={styles.menuContainer}>
                <MenuButton
                    title="Aprender Hooks (State)"
                    route="State"
                    color="#4a90e2"
                />

                <MenuButton
                    title="Aprender Estilos (Flexbox)"
                    route="Style"
                    color="#e24a85"
                />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#f4f4f4', padding: 20 },
    header: { fontSize: 32, fontWeight: 'bold', color: '#333', marginBottom: 10 },
    subHeader: { fontSize: 16, color: '#666', marginBottom: 30 },
    menuContainer: { flex: 1 },
    button: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        borderRadius: 12,
        marginBottom: 15,
        elevation: 3, 
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
    },
    buttonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
    arrow: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
});