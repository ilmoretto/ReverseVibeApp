import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import CodeCard from '../components/CodeCard';
import ConceptsCard from '../components/ConceptsCard';
import { ConceptItem } from '../styles/concepts';

export default function StateScreen() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('React Native');
    const [isVisible, setIsVisible] = useState(true);

    const resetAll = () => {
        setCount(0);
        setName('React Native');
        setIsVisible(true);
    };

    const snippet = `
// useState para diferentes tipos de dados
const [count, setCount] = useState(0); // Número
const [name, setName] = useState('React Native'); // String  
const [isVisible, setIsVisible] = useState(true); // Boolean

// Exemplo de contador
<TouchableOpacity 
    style={styles.actionButton}
    onPress={() => setCount(count - 1)}
>
    <Text>-</Text>
</TouchableOpacity>

<View style={styles.valueDisplay}>
    <Text style={styles.counterText}>{count}</Text>
</View>

<TouchableOpacity 
    style={styles.actionButton}
    onPress={() => setCount(count + 1)}
>
    <Text>+</Text>
</TouchableOpacity>

// Alternando string
<TouchableOpacity 
    onPress={() => setName(name === 'React Native' ? 'useState Hook' : 'React Native')}
>
    <Text>Alterar</Text>
</TouchableOpacity>

// Mostrando/ocultando elemento
<TouchableOpacity onPress={() => setIsVisible(!isVisible)}>
    <Text>{isVisible ? 'Ocultar' : 'Mostrar'} Elemento</Text>
</TouchableOpacity>

{isVisible && (
    <View style={styles.hiddenElement}>
        <Text>👋 Estou visível!</Text>
    </View>
)}

// Resetar todos os estados
const resetAll = () => {
    setCount(0);
    setName('React Native');
    setIsVisible(true);
};
`;

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.explanation}>
                <Text style={styles.bold}>useState</Text> é o hook fundamental para gerenciar estado em componentes funcionais.
                Ele retorna um valor atual e uma função para atualizá-lo.
            </Text>

            <CodeCard
                title="useState em Ação"
                description="Experimente diferentes tipos de estado: número, texto e boolean."
                codeSnippet={snippet}
            >
                <View style={styles.demoContainer}>
                    {/* Contador */}
                    <View style={styles.stateSection}>
                        <Text style={styles.stateLabel}>Contador (number):</Text>
                        <View style={styles.counterContainer}>
                            <TouchableOpacity
                                style={[styles.actionButton, styles.decrementButton]}
                                onPress={() => setCount(count - 1)}
                            >
                                <Text style={styles.actionButtonText}>-</Text>
                            </TouchableOpacity>

                            <View style={styles.valueDisplay}>
                                <Text style={styles.counterText}>{count}</Text>
                            </View>

                            <TouchableOpacity
                                style={[styles.actionButton, styles.incrementButton]}
                                onPress={() => setCount(count + 1)}
                            >
                                <Text style={styles.actionButtonText}>+</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* Nome */}
                    <View style={styles.stateSection}>
                        <Text style={styles.stateLabel}>Texto (string):</Text>
                        <View style={styles.textContainer}>
                            <Text style={styles.nameText}>"{name}"</Text>
                            <TouchableOpacity
                                style={styles.changeButton}
                                onPress={() => setName(name === 'React Native' ? 'useState Hook' : 'React Native')}
                            >
                                <Text style={styles.changeButtonText}>Alterar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* Visibilidade */}
                    <View style={styles.stateSection}>
                        <Text style={styles.stateLabel}>Visibilidade (boolean):</Text>
                        <View style={styles.visibilityContainer}>
                            <TouchableOpacity
                                style={styles.toggleButton}
                                onPress={() => setIsVisible(!isVisible)}
                            >
                                <Text style={styles.toggleButtonText}>
                                    {isVisible ? 'Ocultar' : 'Mostrar'} Elemento
                                </Text>
                            </TouchableOpacity>

                            {isVisible && (
                                <View style={styles.hiddenElement}>
                                    <Text style={styles.hiddenText}>👋 Estou visível!</Text>
                                </View>
                            )}
                        </View>
                    </View>

                    {/* Reset */}
                    <TouchableOpacity style={styles.resetButton} onPress={resetAll}>
                        <Text style={styles.resetButtonText}>Resetar Tudo</Text>
                    </TouchableOpacity>
                </View>
            </CodeCard>

            <ConceptsCard title="useState Hook" color="#4a90e2">
                <ConceptItem>useState cria estado local no componente</ConceptItem>
                <ConceptItem>Estado é imutável, sempre use o setter</ConceptItem>
                <ConceptItem>Mudanças de estado causam re-renderização</ConceptItem>
                <ConceptItem>Aceita qualquer tipo: string, number, boolean, object</ConceptItem>
            </ConceptsCard>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: { padding: 20, backgroundColor: '#fff', flexGrow: 1 },
    explanation: { fontSize: 16, color: '#444', marginBottom: 20, lineHeight: 22 },
    bold: { fontWeight: 'bold', color: '#333' },
    demoContainer: { width: '100%', padding: 10 },

    // State sections
    stateSection: { marginBottom: 20 },
    stateLabel: { fontSize: 14, fontWeight: 'bold', color: '#666', marginBottom: 8 },

    // Counter
    counterContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    actionButton: {
        width: 45,
        height: 45,
        borderRadius: 22.5,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 8
    },
    incrementButton: { backgroundColor: '#4CAF50' },
    decrementButton: { backgroundColor: '#f44336' },
    actionButtonText: { color: '#fff', fontSize: 20, fontWeight: 'bold' },
    valueDisplay: {
        backgroundColor: '#f8f9fa',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#e9ecef'
    },
    counterText: { fontSize: 32, fontWeight: 'bold', color: '#333' },

    // Text/Name
    textContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    nameText: {
        fontSize: 18,
        color: '#333',
        fontStyle: 'italic',
        flex: 1
    },
    changeButton: {
        backgroundColor: '#2196F3',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 6
    },
    changeButtonText: { color: '#fff', fontSize: 14, fontWeight: 'bold' },

    // Visibility
    visibilityContainer: { alignItems: 'center' },
    toggleButton: {
        backgroundColor: '#FF9800',
        paddingHorizontal: 20,
        paddingVertical: 12,
        borderRadius: 8
    },
    toggleButtonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
    hiddenElement: {
        backgroundColor: '#E8F5E8',
        padding: 15,
        borderRadius: 8,
        marginTop: 10,
        borderWidth: 1,
        borderColor: '#4CAF50'
    },
    hiddenText: { fontSize: 16, color: '#2E7D32', textAlign: 'center' },

    // Reset
    resetButton: {
        backgroundColor: '#6c757d',
        paddingVertical: 12,
        borderRadius: 8,
        marginTop: 10
    },
    resetButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center'
    }
});