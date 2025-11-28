import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, ScrollView, ActivityIndicator, FlatList, Image, StyleSheet } from 'react-native';
import CodeCard from '../components/CodeCard';
import ConceptsCard from '../components/ConceptsCard';
import { ConceptItem } from '../styles/concepts';
import { colors, globalStyles, componentStyles } from '../styles';

export default function ApiScreen() {
    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(true);
    const [query, setQuery] = useState("");

    useEffect(() => {
        async function loadPokemons() {
            try {
                const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
                const data = await res.json();
                setPokemons(
                    data.results.map((p) => {
                        const id = p.url.split("/").filter(Boolean).pop();
                        return {
                            id,
                            name: p.name,
                            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
                        };
                    })
                );
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }
        loadPokemons();
    }, []);

    const dataFiltered = pokemons.filter((p) =>
        p.name.toLowerCase().includes(query.trim().toLowerCase())
    );

    const codeSnippet = `
// Estados para controlar lista, carregamento e busca
const [pokemons, setPokemons] = useState([]);
const [loading, setLoading] = useState(true);
const [query, setQuery] = useState("");

// useEffect para carregar dados na montagem
useEffect(() => {
    async function loadPokemons() {
        try {
            const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
            const data = await res.json();
            setPokemons(
                data.results.map((p) => {
                    const id = p.url.split("/").filter(Boolean).pop();
                    return { 
                        id, 
                        name: p.name, 
                        image: \`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/\${id}.png\` 
                    };
                })
            );
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }
    loadPokemons();
}, []); // Array vazio = executa apenas na montagem

// Filtro de busca em tempo real
const dataFiltered = pokemons.filter((p) =>
    p.name.toLowerCase().includes(query.trim().toLowerCase())
);

// Input de busca
<TextInput
    placeholder="Buscar Pokémon..."
    value={query}
    onChangeText={setQuery}
    style={styles.searchInput}
/>

// FlatList para renderizar lista otimizada
<FlatList
    data={dataFiltered.slice(0, 6)}
    keyExtractor={(item) => item.id}
    renderItem={({ item }) => (
        <View style={styles.pokemonItem}>
            <Image source={{ uri: item.image }} style={styles.pokemonImage} />
            <Text style={styles.pokemonName}>{item.name}</Text>
        </View>
    )}
/>
`;

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.explanation}>
                <Text style={styles.bold}>useEffect</Text> executa código após a renderização.
                Aqui carregamos 151 Pokémon da primeira geração e implementamos uma busca em tempo real.
            </Text>

            <CodeCard
                title="Pokédex com useEffect + FlatList"
                description="Lista de Pokémon com busca em tempo real."
                codeSnippet={codeSnippet}
            >
                <View style={styles.demoBox}>
                    {loading ? (
                        <ActivityIndicator size="large" color="#4a90e2" />
                    ) : (
                        <View style={styles.pokemonContainer}>
                            <TextInput
                                placeholder="Buscar Pokémon..."
                                value={query}
                                onChangeText={setQuery}
                                style={styles.searchInput}
                            />

                            <FlatList
                                data={dataFiltered.slice(0, 6)} // Limitar para demo
                                keyExtractor={(item) => item.id}
                                style={styles.pokemonList}
                                renderItem={({ item }) => (
                                    <View style={styles.pokemonItem}>
                                        <Image
                                            source={{ uri: item.image }}
                                            style={styles.pokemonImage}
                                        />
                                        <Text style={styles.pokemonName}>
                                            #{item.id} {item.name}
                                        </Text>
                                    </View>
                                )}
                                ListEmptyComponent={
                                    <Text style={styles.emptyText}>Nenhum Pokémon encontrado</Text>
                                }
                                nestedScrollEnabled={true}
                            />

                            {dataFiltered.length > 6 && (
                                <Text style={styles.moreText}>
                                    +{dataFiltered.length - 6} Pokémon encontrados
                                </Text>
                            )}
                        </View>
                    )}
                </View>
            </CodeCard>

            <ConceptsCard title="useEffect & APIs" color="#5b67d8">
                <ConceptItem>useEffect executa código após renderização</ConceptItem>
                <ConceptItem>Array vazio [] executa apenas na montagem</ConceptItem>
                <ConceptItem>Fetch API para requisições HTTP</ConceptItem>
                <ConceptItem>FlatList otimizada para listas grandes</ConceptItem>
                <ConceptItem>async/await para código assíncrono</ConceptItem>
            </ConceptsCard>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: { padding: 20, backgroundColor: '#fff', flexGrow: 1 },
    explanation: { fontSize: 16, color: '#444', marginBottom: 20, lineHeight: 22 },
    bold: { fontWeight: 'bold', color: '#333' },
    demoBox: { alignItems: 'center', padding: 20, minHeight: 300 },
    pokemonContainer: { width: '100%', flex: 1 },
    searchInput: {
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 12,
        borderRadius: 8,
        marginBottom: 15,
        fontSize: 16
    },
    pokemonList: { maxHeight: 200 },
    pokemonItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0'
    },
    pokemonImage: {
        width: 40,
        height: 40,
        marginRight: 12,
        backgroundColor: '#f8f9fa'
    },
    pokemonName: {
        fontSize: 16,
        color: '#333',
        textTransform: 'capitalize'
    },
    emptyText: {
        textAlign: 'center',
        color: '#999',
        fontStyle: 'italic',
        padding: 20
    },
    moreText: {
        textAlign: 'center',
        color: '#666',
        fontSize: 12,
        marginTop: 8,
        fontStyle: 'italic'
    }
});