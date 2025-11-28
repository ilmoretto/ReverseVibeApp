import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { colors } from './colors';

export const conceptStyles = StyleSheet.create({
    item: {
        fontSize: 14,
        color: colors.textSecondary,
        marginBottom: 8,
        lineHeight: 20,
        paddingLeft: 4,
    },
    highlight: {
        fontWeight: 'bold',
        color: colors.textPrimary
    }
});

export const ConceptItem = ({ children }) => (
    <Text style={conceptStyles.item}>• {children}</Text>
);