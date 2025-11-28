import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import CodeCard from '../components/CodeCard';
import ConceptsCard from '../components/ConceptsCard';
import { ConceptItem } from '../styles/concepts';

export default function CalculatorScreen() {
    const [display, setDisplay] = useState('0');
    const [previousValue, setPreviousValue] = useState(null);
    const [operation, setOperation] = useState(null);
    const [waitingForValue, setWaitingForValue] = useState(false);

    const inputNumber = (num) => {
        if (waitingForValue) {
            setDisplay(String(num));
            setWaitingForValue(false);
        } else {
            setDisplay(display === '0' ? String(num) : display + num);
        }
    };

    const inputOperation = (nextOperation) => {
        const inputValue = parseFloat(display);

        if (previousValue === null) {
            setPreviousValue(inputValue);
        } else if (operation) {
            const currentValue = previousValue || 0;
            const newValue = calculate(currentValue, inputValue, operation);

            setDisplay(String(newValue));
            setPreviousValue(newValue);
        }

        setWaitingForValue(true);
        setOperation(nextOperation);
    };

    const calculate = (firstValue, secondValue, operation) => {
        switch (operation) {
            case '+': return firstValue + secondValue;
            case '-': return firstValue - secondValue;
            case '×': return firstValue * secondValue;
            case '÷': return firstValue / secondValue;
            default: return secondValue;
        }
    };

    const performCalculation = () => {
        if (previousValue !== null && operation) {
            const inputValue = parseFloat(display);
            const newValue = calculate(previousValue, inputValue, operation);

            setDisplay(String(newValue));
            setPreviousValue(null);
            setOperation(null);
            setWaitingForValue(true);
        }
    };

    const clear = () => {
        setDisplay('0');
        setPreviousValue(null);
        setOperation(null);
        setWaitingForValue(false);
    };

    const Button = ({ onPress, text, style, textStyle }) => (
        <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
            <Text style={[styles.buttonText, textStyle]}>{text}</Text>
        </TouchableOpacity>
    );

    const codeSnippet = `
// Estados para controlar a calculadora
const [display, setDisplay] = useState('0');
const [previousValue, setPreviousValue] = useState(null);
const [operation, setOperation] = useState(null);
const [waitingForValue, setWaitingForValue] = useState(false);

// Função para inserir números
const inputNumber = (num) => {
    if (waitingForValue) {
        setDisplay(String(num));
        setWaitingForValue(false);
    } else {
        setDisplay(display === '0' ? String(num) : display + num);
    }
};

// Função para operações matemáticas
const inputOperation = (nextOperation) => {
    const inputValue = parseFloat(display);
    if (previousValue === null) {
        setPreviousValue(inputValue);
    } else if (operation) {
        const newValue = calculate(previousValue, inputValue, operation);
        setDisplay(String(newValue));
        setPreviousValue(newValue);
    }
    setWaitingForValue(true);
    setOperation(nextOperation);
};

// Função para calcular resultado
const calculate = (firstValue, secondValue, operation) => {
    switch (operation) {
        case '+': return firstValue + secondValue;
        case '-': return firstValue - secondValue;
        case '×': return firstValue * secondValue;
        case '÷': return firstValue / secondValue;
        default: return secondValue;
    }
};

// Componente Button personalizado
const Button = ({ onPress, text, style, textStyle }) => (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
        <Text style={[styles.buttonText, textStyle]}>{text}</Text>
    </TouchableOpacity>
);

// Uso dos botões
<Button onPress={() => inputNumber(1)} text="1" />
<Button onPress={() => inputOperation('+')} text="+" style={styles.operationButton} />
<Button onPress={performCalculation} text="=" style={styles.equalsButton} />
`;

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.explanation}>
                Uma calculadora simples demonstra <Text style={styles.bold}>gerenciamento de estado</Text>,
                <Text style={styles.bold}> eventos de toque</Text> e <Text style={styles.bold}>lógica condicional</Text>.
            </Text>

            <CodeCard
                title="Calculadora Funcional"
                description="Operações básicas com interface touch."
                codeSnippet={codeSnippet}
            >
                <View style={styles.calculatorContainer}>
                    {/* Display */}
                    <View style={styles.displayContainer}>
                        <Text style={styles.displayText}>{display}</Text>
                    </View>

                    {/* Botões */}
                    <View style={styles.buttonsContainer}>
                        <View style={styles.row}>
                            <Button onPress={clear} text="C" style={styles.functionButton} />
                            <Button onPress={() => inputOperation('÷')} text="÷" style={styles.operationButton} />
                            <Button onPress={() => inputOperation('×')} text="×" style={styles.operationButton} />
                            <Button onPress={() => inputOperation('-')} text="-" style={styles.operationButton} />
                        </View>

                        <View style={styles.row}>
                            <Button onPress={() => inputNumber(7)} text="7" />
                            <Button onPress={() => inputNumber(8)} text="8" />
                            <Button onPress={() => inputNumber(9)} text="9" />
                            <Button onPress={() => inputOperation('+')} text="+" style={styles.operationButton} />
                        </View>

                        <View style={styles.row}>
                            <Button onPress={() => inputNumber(4)} text="4" />
                            <Button onPress={() => inputNumber(5)} text="5" />
                            <Button onPress={() => inputNumber(6)} text="6" />
                            <View style={styles.button} />
                        </View>

                        <View style={styles.row}>
                            <Button onPress={() => inputNumber(1)} text="1" />
                            <Button onPress={() => inputNumber(2)} text="2" />
                            <Button onPress={() => inputNumber(3)} text="3" />
                            <Button onPress={performCalculation} text="=" style={styles.equalsButton} />
                        </View>

                        <View style={styles.row}>
                            <Button onPress={() => inputNumber(0)} text="0" style={styles.zeroButton} />
                            <View style={styles.button} />
                        </View>
                    </View>
                </View>
            </CodeCard>

            <ConceptsCard title="Interface & Lógica" color="#38a169">
                <ConceptItem>Múltiplos estados para controlar dados</ConceptItem>
                <ConceptItem>TouchableOpacity para botões interativos</ConceptItem>
                <ConceptItem>Switch/case para lógica de operações</ConceptItem>
                <ConceptItem>Flexbox para layout em grade</ConceptItem>
            </ConceptsCard>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: { padding: 20, backgroundColor: '#fff', flexGrow: 1 },
    explanation: { fontSize: 16, color: '#444', marginBottom: 20, lineHeight: 22 },
    bold: { fontWeight: 'bold', color: '#333' },
    calculatorContainer: { alignItems: 'center', width: '100%' },
    displayContainer: {
        backgroundColor: '#000',
        padding: 20,
        width: '100%',
        alignItems: 'flex-end',
        borderRadius: 8,
        marginBottom: 10
    },
    displayText: { color: '#fff', fontSize: 32, fontWeight: 'bold' },
    buttonsContainer: { width: '100%' },
    row: { flexDirection: 'row', marginBottom: 5 },
    button: {
        flex: 1,
        aspectRatio: 1,
        backgroundColor: '#e9ecef',
        margin: 2,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: { fontSize: 24, fontWeight: 'bold', color: '#333' },
    operationButton: { backgroundColor: '#007bff' },
    functionButton: { backgroundColor: '#6c757d' },
    equalsButton: { backgroundColor: '#28a745', flex: 1 },
    zeroButton: { flex: 2 }
});