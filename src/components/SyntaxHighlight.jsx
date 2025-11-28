import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function SyntaxHighlight({ children }) {
    const highlightCode = (code) => {
        if (!code) return code;

        // Divide o código em linhas e processa cada uma
        const lines = code.split('\n');
        return lines.map((line, index) => {
            const highlightedLine = highlightLine(line);
            return (
                <Text key={index}>
                    {highlightedLine}
                    {'\n'}
                </Text>
            );
        });
    };

    const highlightLine = (line) => {
        const parts = [];

        // Verifica se é um comentário
        if (line.trim().startsWith('//')) {
            return <Text style={styles.comment}>{line}</Text>;
        }

        // Lista de palavras-chave para destacar
        const keywords = [
            'const', 'let', 'var', 'function', 'return', 'if', 'else', 'for', 'while',
            'useState', 'useEffect', 'import', 'export', 'default', 'from', 'case',
            'switch', 'true', 'false', 'null', 'undefined', 'async', 'await', 'try', 'catch'
        ];

        const components = [
            'View', 'Text', 'TouchableOpacity', 'Button', 'TextInput', 'FlatList',
            'ScrollView', 'Image', 'StyleSheet', 'Alert', 'ActivityIndicator'
        ];

        // Expressão regular para dividir preservando espaços e pontuação
        const tokens = line.split(/(\s+|[{}(),;.=<>!+\-*/[\]'"`:&|\\])/);

        tokens.forEach((token, index) => {
            let style = styles.normal;

            if (keywords.includes(token)) {
                style = styles.keyword;
            } else if (components.includes(token)) {
                style = styles.component;
            } else if (/^['"`].*['"`]$/.test(token)) {
                style = styles.string;
            } else if (/^\d+$/.test(token)) {
                style = styles.number;
            }

            parts.push(
                <Text key={index} style={style}>
                    {token}
                </Text>
            );
        });

        return parts;
    };

    return (
        <Text style={styles.container}>
            {highlightCode(children)}
        </Text>
    );
}

const styles = StyleSheet.create({
    container: {
        fontFamily: 'monospace',
        fontSize: 12,
        lineHeight: 18,
    },
    normal: {
        color: '#d4d4d4', // Cinza claro padrão
    },
    keyword: {
        color: '#569cd6', // Azul VS Code para palavras-chave
        fontWeight: '600',
    },
    component: {
        color: '#4ec9b0', // Verde-azulado para componentes React
        fontWeight: '500',
    },
    string: {
        color: '#ce9178', // Laranja para strings
    },
    number: {
        color: '#b5cea8', // Verde claro para números
    },
    comment: {
        color: '#6a9955', // Verde para comentários
        fontStyle: 'italic',
    },
});