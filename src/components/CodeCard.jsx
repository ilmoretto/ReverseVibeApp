import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, ScrollView, Platform } from 'react-native';

export default function CodeCard({ title, description, codeSnippet, children }) {
    // State para controlar a alternância entre Visual e Código
    const [isCodeVisible, setIsCodeVisible] = useState(false);

    return (
        <View style={styles.card}>
            {/* --- Cabeçalho do Card --- */}
            <View style={styles.header}>
                <View style={styles.headerTextContainer}>
                    <Text style={styles.title}>{title}</Text>
                    {description && <Text style={styles.description}>{description}</Text>}
                </View>

                {/* Controle do Switch */}
                <View style={styles.switchContainer}>
                    <Text style={styles.switchLabel}>
                        {isCodeVisible ? 'Código' : 'Visual'}
                    </Text>
                    <Switch
                        value={isCodeVisible}
                        onValueChange={setIsCodeVisible}
                        trackColor={{ false: "#767577", true: "#61dafb" }} // Azul React
                        thumbColor={isCodeVisible ? "#f4f3f4" : "#f4f3f4"}
                    />
                </View>
            </View>

            {/* --- Área de Conteúdo (Renderização Condicional) --- */}
            <View style={styles.contentArea}>
                {isCodeVisible ? (
                    // MODO CÓDIGO: Simula um editor escuro
                    <View style={styles.codeContainer}>
                        <ScrollView nestedScrollEnabled={true}>
                            <Text style={styles.codeText}>{codeSnippet}</Text>
                        </ScrollView>
                    </View>
                ) : (
                    // MODO VISUAL: Renderiza o componente passado como filho
                    <View style={styles.previewContainer}>
                        {children}
                    </View>
                )}
            </View>
        </View>
    );
}

// Estilos
const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 12,
        marginVertical: 10,
        marginHorizontal: 16,
        // Sombras (Elevation p/ Android, Shadow p/ iOS)
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        overflow: 'hidden', // Garante que nada saia das bordas arredondadas
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#f8f9fa',
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    headerTextContainer: {
        flex: 1,
        paddingRight: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    description: {
        fontSize: 12,
        color: '#666',
        marginTop: 4,
    },
    switchContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    switchLabel: {
        fontSize: 10,
        marginBottom: 4,
        color: '#666',
        fontWeight: 'bold',
    },
    contentArea: {
        minHeight: 150, // Altura mínima para o card não ficar "pulando"
    },
    previewContainer: {
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        flex: 1,
    },
    codeContainer: {
        backgroundColor: '#1e1e1e', // Fundo escuro tipo VS Code
        padding: 16,
        flex: 1,
    },
    codeText: {
        color: '#d4d4d4', // Texto claro
        fontFamily: Platform.OS === 'ios' ? 'Menlo' : 'monospace', // Fonte monoespaçada
        fontSize: 12,
        lineHeight: 18,
    },
});