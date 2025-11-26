import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import CodeCard from '../components/CodeCard'; // Importando nosso componente

export default function StateScreen() {
    const [count, setCount] = useState(0);

    const snippet = `
// useState cria uma variável reativa
const [count, setCount] = useState(0);

// Na interface:
<Text>{count}</Text>
<Button 
  onPress={() => setCount(count + 1)} 
/>
  `;

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.explanation}>
                O "State" (Estado) é a memória do componente. Quando ele muda, a tela desenha novamente.
            </Text>

            <CodeCard
                title="Contador Interativo"
                description="Clique para ver o número subir."
                codeSnippet={snippet}
            >
                {/* Parte Visual */}
                <View style={styles.demoBox}>
                    <Text style={styles.counterText}>{count}</Text>
                    <View style={{ marginTop: 10 }}>
                        <Button title="+ 1" onPress={() => setCount(count + 1)} />
                    </View>
                </View>
            </CodeCard>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: { padding: 20, backgroundColor: '#fff', flexGrow: 1 },
    explanation: { fontSize: 16, color: '#444', marginBottom: 20, lineHeight: 22 },
    demoBox: { alignItems: 'center', padding: 10 },
    counterText: { fontSize: 48, fontWeight: 'bold', color: '#333' }
});