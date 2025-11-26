import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import CodeCard from '../components/CodeCard';

export default function StyleScreen() {

    const snippetRow = `
// Alinhamento horizontal
<View style={{ 
  flexDirection: 'row', 
  justifyContent: 'space-around' 
}}>
  <Box cor="red" />
  <Box cor="blue" />
</View>
  `;

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.explanation}>
                No React Native não usamos CSS puro. Usamos objetos JavaScript e Flexbox.
            </Text>

            <CodeCard
                title="Flex Direction: Row"
                description="Itens um ao lado do outro."
                codeSnippet={snippetRow}
            >
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '100%' }}>
                    <View style={[styles.box, { backgroundColor: '#ff6b6b' }]} />
                    <View style={[styles.box, { backgroundColor: '#4ecdc4' }]} />
                    <View style={[styles.box, { backgroundColor: '#ffe66d' }]} />
                </View>
            </CodeCard>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: { padding: 20, backgroundColor: '#fff', flexGrow: 1 },
    explanation: { fontSize: 16, color: '#444', marginBottom: 20 },
    box: { width: 50, height: 50, borderRadius: 8 }
});