import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { colors, globalStyles } from '../styles';

export default function HomeScreen({ navigation }) {

    // Função auxiliar para criar botões de menu repetitivos
    const MenuButton = ({ title, subtitle, route, color, icon }) => (
        <TouchableOpacity
            style={[styles.button, { backgroundColor: color }]}
            onPress={() => navigation.navigate(route)}
        >
            <View style={styles.buttonContent}>
                <View style={styles.iconContainer}>
                    <Text style={styles.icon}>{icon}</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.buttonText}>{title}</Text>
                    {subtitle && <Text style={styles.buttonSubtitle}>{subtitle}</Text>}
                </View>
                <View style={styles.arrowContainer}>
                    <Text style={styles.arrow}>→</Text>
                </View>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <View style={styles.headerSection}>
                <Text style={styles.header}>MetaNative</Text>
                <Text style={styles.subHeader}>Aprenda React Native de forma prática e interativa</Text>
                <View style={styles.headerDivider} />
            </View>

            <ScrollView style={styles.menuContainer} showsVerticalScrollIndicator={false}>
                {/* Seção Componentes Básicos */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Componentes Básicos</Text>
                    <Text style={styles.sectionDescription}>Imports e elementos fundamentais</Text>

                    <MenuButton
                        title="View, Text, TextInput"
                        subtitle="Componentes Básicos"
                        route="Components"
                        color="#28a745"
                        icon="V"
                    />
                    <MenuButton
                        title="ActivityIndicator & Image"
                        subtitle="Loading e Mídia"
                        route="Media"
                        color="#6f42c1"
                        icon="I"
                    />
                    <MenuButton
                        title="FlatList Avançado"
                        subtitle="Listas Otimizadas"
                        route="List"
                        color="#fd7e14"
                        icon="L"
                    />
                    <MenuButton
                        title="Padrões de Return"
                        subtitle="JSX e Renderização"
                        route="Return"
                        color="#e83e8c"
                        icon="R"
                    />
                </View>

                {/* Seção Hooks */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Hooks React Native</Text>
                    <Text style={styles.sectionDescription}>Conceitos fundamentais de estado e efeitos</Text>

                    <MenuButton
                        title="useState"
                        subtitle="Estado dos Componentes"
                        route="State"
                        color={colors.primary}
                        icon="S"
                    />
                    <MenuButton
                        title="useEffect + APIs"
                        subtitle="Efeitos e Requisições"
                        route="Api"
                        color={colors.navy}
                        icon="E"
                    />
                </View>

                {/* Seção Estilização */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Estilização</Text>
                    <Text style={styles.sectionDescription}>Design e organização visual</Text>

                    <MenuButton
                        title="StyleSheet"
                        subtitle="Propriedades e Organização"
                        route="StyleTable"
                        color={colors.navyLight}
                        icon="P"
                    />
                </View>

                {/* Seção Projetos Práticos */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Projetos Práticos</Text>
                    <Text style={styles.sectionDescription}>Aplicações reais para praticar</Text>

                    <MenuButton
                        title="Calculadora"
                        subtitle="Interface e Lógica"
                        route="Calculator"
                        color={colors.greenLight}
                        icon="C"
                    />
                    <MenuButton
                        title="Lista de Tarefas"
                        subtitle="CRUD Completo"
                        route="Todo"
                        color={colors.accent}
                        icon="T"
                    />
                </View>

                <View style={styles.footer}>
                    <Text style={styles.footerText}>Desenvolvido para aprender React Native</Text>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        ...globalStyles.container,
        backgroundColor: colors.backgroundSoft,
        padding: 0,
    },
    headerSection: {
        backgroundColor: colors.background,
        paddingTop: 5,
        paddingBottom: 0,
        paddingHorizontal: 20,
        alignItems: 'center'
    },
    header: {
        ...globalStyles.titleLarge,
        fontSize: 36,
        color: colors.primary,
        letterSpacing: -0.5
    },
    subHeader: {
        ...globalStyles.body,
        color: colors.textSecondary,
        marginTop: 8,
        textAlign: 'center',
    },
    headerDivider: {
        width: 60,
        height: 4,
        backgroundColor: colors.accent,
        borderRadius: 2,
        marginTop: 20
    },
    menuContainer: {
        flex: 1,
        paddingHorizontal: 20
    },
    section: {
        marginTop: 25,
        marginBottom: 10
    },
    sectionTitle: {
        ...globalStyles.title,
        color: colors.primary,
        marginBottom: 5
    },
    sectionDescription: {
        ...globalStyles.caption,
        marginBottom: 15,
    },
    button: {
        ...globalStyles.card,
        padding: 0,
        marginBottom: 12,
        borderRadius: 16,
    },
    buttonContent: {
        ...globalStyles.row,
        padding: 18
    },
    iconContainer: {
        ...globalStyles.center,
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: 'rgba(255,255,255,0.3)',
        marginRight: 16
    },
    icon: {
        fontSize: 24,
        fontWeight: 'bold',
        color: colors.textWhite
    },
    textContainer: {
        ...globalStyles.flex1,
    },
    buttonText: {
        ...globalStyles.subtitle,
        color: colors.textWhite,
        marginBottom: 2
    },
    buttonSubtitle: {
        ...globalStyles.small,
        color: 'rgba(255,255,255,0.9)',
        fontSize: 13,
        fontWeight: '500'
    },
    arrowContainer: {
        ...globalStyles.center,
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: 'rgba(255,255,255,0.2)',
    },
    arrow: {
        ...globalStyles.textWhite,
        fontSize: 18,
    },
    footer: {
        ...globalStyles.center,
        paddingVertical: 30,
        paddingBottom: 40
    },
    footerText: {
        ...globalStyles.small,
        color: colors.textMuted,
        fontStyle: 'italic'
    }
});