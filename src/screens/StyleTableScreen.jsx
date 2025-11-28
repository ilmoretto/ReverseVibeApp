import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import CodeCard from '../components/CodeCard';
import ConceptsCard from '../components/ConceptsCard';
import { ConceptItem } from '../styles/concepts';
import { colors, globalStyles } from '../styles';

export default function StyleTableScreen() {
    const [selectedProperty, setSelectedProperty] = useState('backgroundColor');
    const [selectedValue, setSelectedValue] = useState('#4a90e2');

    // Tabela de propriedades de estilo comuns
    const styleProperties = {
        backgroundColor: {
            values: ['#4a90e2', '#e24a85', '#38a169', '#d69e2e', '#e53e3e'],
            description: 'Cor de fundo do elemento'
        },
        borderRadius: {
            values: [0, 5, 10, 15, 25],
            description: 'Arredondamento das bordas'
        },
        padding: {
            values: [5, 10, 15, 20, 30],
            description: 'Espaço interno do elemento'
        },
        margin: {
            values: [0, 5, 10, 15, 20],
            description: 'Espaço externo do elemento'
        },
        borderWidth: {
            values: [0, 1, 2, 3, 5],
            description: 'Espessura da borda'
        }
    };

    const getPreviewStyle = () => {
        const baseStyle = {
            width: selectedProperty === 'padding' ? 'auto' : 100,
            height: selectedProperty === 'padding' ? 'auto' : 60,
            minWidth: selectedProperty === 'padding' ? 80 : 100,
            minHeight: selectedProperty === 'padding' ? 40 : 60,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: selectedProperty === 'backgroundColor' ? selectedValue : '#e3f2fd'
        };

        const style = {
            ...baseStyle,
            [selectedProperty]: selectedValue
        };

        // Adicionar bordas para visualizar padding e borderRadius
        if (selectedProperty === 'padding') {
            style.backgroundColor = '#ffecb3';
            style.borderWidth = 2;
            style.borderColor = '#ff9800';
            style.borderStyle = 'dashed';
        }

        if (selectedProperty === 'borderRadius') {
            style.backgroundColor = '#e8f5e8';
            style.borderWidth = 2;
            style.borderColor = '#4caf50';
        }

        if (selectedProperty === 'borderWidth') {
            style.borderColor = '#333';
        }

        if (selectedProperty === 'margin') {
            style.backgroundColor = '#fce4ec';
            // Adicionar um container pai para mostrar o margin
        }

        return style;
    };

    const codeSnippet = `
// Estados para controlar propriedade e valor selecionados
const [selectedProperty, setSelectedProperty] = useState('backgroundColor');
const [selectedValue, setSelectedValue] = useState('#4a90e2');

// Objeto com propriedades de estilo e seus valores
const styleProperties = {
    backgroundColor: {
        values: ['#4a90e2', '#e24a85', '#38a169', '#d69e2e', '#e53e3e'],
        description: 'Cor de fundo do elemento'
    },
    borderRadius: {
        values: [0, 5, 10, 15, 25],
        description: 'Arredondamento das bordas'
    },
    padding: {
        values: [5, 10, 15, 20, 30],
        description: 'Espaço interno do elemento'
    },
    borderWidth: {
        values: [0, 1, 2, 3, 5],
        description: 'Espessura da borda'
    }
};

// Função para gerar estilo do preview
const getPreviewStyle = () => {
    const baseStyle = {
        width: 100,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center'
    };

    return {
        ...baseStyle,
        [selectedProperty]: selectedValue,
        borderColor: selectedProperty === 'borderWidth' ? '#333' : 'transparent'
    };
};

// Botões para selecionar propriedades
{Object.keys(styleProperties).map(property => (
    <TouchableOpacity
        key={property}
        style={[propertyButton, selectedProperty === property && selectedPropertyButton]}
        onPress={() => setSelectedProperty(property)}
    >
        <Text>{property}</Text>
    </TouchableOpacity>
))}

// Preview com estilo dinâmico
<View style={getPreviewStyle()}>
    <Text>Preview</Text>
</View>
`;

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.explanation}>
                React Native usa <Text style={styles.bold}>StyleSheet</Text> para organizar estilos.
                Experimente diferentes propriedades e veja o resultado em tempo real.
            </Text>

            <CodeCard
                title="Tabela de Propriedades de Estilo"
                description="Selecione uma propriedade e um valor para ver o efeito."
                codeSnippet={codeSnippet}
            >
                <View style={styles.demoContainer}>
                    {/* Seletor de propriedade */}
                    <View style={styles.selectorSection}>
                        <Text style={styles.selectorTitle}>Propriedade:</Text>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            <View style={styles.propertyButtons}>
                                {Object.keys(styleProperties).map((property) => (
                                    <TouchableOpacity
                                        key={property}
                                        style={[
                                            styles.propertyButton,
                                            selectedProperty === property && styles.selectedPropertyButton
                                        ]}
                                        onPress={() => {
                                            setSelectedProperty(property);
                                            setSelectedValue(styleProperties[property].values[0]);
                                        }}
                                    >
                                        <Text style={[
                                            styles.propertyButtonText,
                                            selectedProperty === property && styles.selectedPropertyText
                                        ]}>
                                            {property}
                                        </Text>
                                    </TouchableOpacity>
                                ))}
                            </View>
                        </ScrollView>
                    </View>

                    {/* Descrição da propriedade */}
                    <Text style={styles.description}>
                        {styleProperties[selectedProperty].description}
                    </Text>

                    {/* Seletor de valores */}
                    <View style={styles.selectorSection}>
                        <Text style={styles.selectorTitle}>Valores:</Text>
                        <View style={styles.valueButtons}>
                            {styleProperties[selectedProperty].values.map((value) => (
                                <TouchableOpacity
                                    key={value}
                                    style={[
                                        styles.valueButton,
                                        selectedValue === value && styles.selectedValueButton
                                    ]}
                                    onPress={() => setSelectedValue(value)}
                                >
                                    <Text style={[
                                        styles.valueButtonText,
                                        selectedValue === value && styles.selectedValueText
                                    ]}>
                                        {value}
                                    </Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>

                    {/* Preview */}
                    <View style={styles.previewSection}>
                        <Text style={styles.selectorTitle}>Preview:</Text>
                        <View style={styles.previewContainer}>
                            {selectedProperty === 'margin' ? (
                                <View style={styles.marginDemo}>
                                    <View style={getPreviewStyle()}>
                                        <Text style={styles.previewText}>Exemplo</Text>
                                    </View>
                                </View>
                            ) : selectedProperty === 'padding' ? (
                                <View style={getPreviewStyle()}>
                                    <View style={styles.paddingInner}>
                                        <Text style={styles.previewText}>Texto</Text>
                                    </View>
                                </View>
                            ) : (
                                <View style={getPreviewStyle()}>
                                    <Text style={styles.previewText}>Exemplo</Text>
                                </View>
                            )}
                        </View>
                    </View>

                    {/* Código atual */}
                    <View style={styles.currentStyleContainer}>
                        <Text style={styles.currentStyleTitle}>Estilo Atual:</Text>
                        <Text style={styles.currentStyleText}>
                            {selectedProperty}: {typeof selectedValue === 'string' ? `'${selectedValue}'` : selectedValue}
                        </Text>
                    </View>
                </View>
            </CodeCard>

            <ConceptsCard title="Estilização" color="#e24a85">
                <ConceptItem>StyleSheet.create() para organização</ConceptItem>
                <ConceptItem>Propriedades de layout (margin, padding)</ConceptItem>
                <ConceptItem>Propriedades visuais (background, border)</ConceptItem>
                <ConceptItem>Estilos condicionais com arrays</ConceptItem>
            </ConceptsCard>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: { padding: 20, backgroundColor: '#fff', flexGrow: 1 },
    explanation: { fontSize: 16, color: '#444', marginBottom: 20, lineHeight: 22 },
    bold: { fontWeight: 'bold', color: '#333' },
    demoContainer: { width: '100%' },
    selectorSection: { marginBottom: 15 },
    selectorTitle: { fontSize: 14, fontWeight: 'bold', color: '#333', marginBottom: 8 },
    description: {
        fontSize: 13,
        color: '#666',
        fontStyle: 'italic',
        marginBottom: 15,
        textAlign: 'center'
    },
    propertyButtons: { flexDirection: 'row' },
    propertyButton: {
        backgroundColor: '#f1f3f4',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 15,
        marginRight: 8
    },
    selectedPropertyButton: { backgroundColor: '#4a90e2' },
    propertyButtonText: { fontSize: 12, color: '#666' },
    selectedPropertyText: { color: '#fff', fontWeight: 'bold' },
    valueButtons: { flexDirection: 'row', flexWrap: 'wrap' },
    valueButton: {
        backgroundColor: '#f1f3f4',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 8,
        marginRight: 8,
        marginBottom: 8
    },
    selectedValueButton: { backgroundColor: '#e24a85' },
    valueButtonText: { fontSize: 12, color: '#666' },
    selectedValueText: { color: '#fff', fontWeight: 'bold' },
    previewSection: { alignItems: 'center', marginVertical: 15 },
    previewContainer: {
        backgroundColor: '#f8f9fa',
        padding: 20,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#dee2e6'
    },
    previewText: { color: '#333', fontSize: 14, fontWeight: 'bold' },
    marginDemo: {
        backgroundColor: '#f3e5f5',
        padding: 20,
        borderWidth: 2,
        borderColor: '#9c27b0',
        borderStyle: 'dashed',
        borderRadius: 8
    },
    paddingInner: {
        backgroundColor: '#fff3e0',
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#ff9800',
        borderStyle: 'solid'
    },
    currentStyleContainer: {
        backgroundColor: '#1e1e1e',
        padding: 12,
        borderRadius: 6,
        marginTop: 10
    },
    currentStyleTitle: { color: '#61dafb', fontSize: 12, fontWeight: 'bold', marginBottom: 4 },
    currentStyleText: { color: '#d4d4d4', fontSize: 12 }
});