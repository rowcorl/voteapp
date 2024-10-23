import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Star = ({ filled, size = 18, color = '#FFD700' }) => (
    <Text style={[styles.star, { fontSize: size, color: filled ? color : '#ccc' }]}>
        {'\u2B50'}
    </Text>
);

const styles = StyleSheet.create({
    star: {
        marginRight: 2,
    },
});

export default Star;