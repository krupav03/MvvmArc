import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const TodoItem = ({ title, onPress }) => {
    return (
        <TouchableOpacity style={styles.itemContainer} onPress={() => onPress({ title })}>
            <Text style={styles.itemText}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        padding: 16,
        marginVertical: 8,
        marginHorizontal: 16,
        backgroundColor: '#f9f9f9',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 1,
    },
    itemText: {
        fontSize: 16,
    },
});

export default TodoItem;