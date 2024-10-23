import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Star from './Star';
//import styles from "../components/styles";


const Rating = ({ rating, totalStars = 5, size = 18, color = '#FFD700' }) => {
    const stars = Array(totalStars).fill(0).map((_, index) => {
        const filled = index < Math.floor(rating);
        const partiallyFilled = index === Math.floor(rating) && rating % 1 !== 0;
        return (
            <View key={index}>
                {filled ? (
                    <Star filled size={size} color={color} />
                ) : partiallyFilled ? (
                    <View style={styles.partialStar}>
                        <Star filled size={size} color={color} />
                        <Text style={[styles.star, { fontSize: size, color: '#ccc' }]}>
                            {'\u2B51'}
                        </Text>
                    </View>
                ) : (
                    <Star size={size} color={'#ccc'} filled={undefined} />
                )}
            </View>
        );
    });

    return <View style={styles.container}>{stars}</View>;
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    partialStar: {
        position: 'relative',
    }, star: {
        marginRight: 8,
    },
});

export default Rating;