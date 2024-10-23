import { Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { objcolors } from './colors'

type ContainerProps = {
  children: any,
  style?: any
}

const Container = (props: ContainerProps) => {
  const { children, style } = props
  return (
    <View style={[styles.container, style]}>
      <View style={[styles.innerContainer, style]}>
        {children}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'pink',
    flex: 1,
    width: '100%',
  },

  innerContainer: {
    backgroundColor: objcolors.eee_000,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: Platform.OS === 'web' ? 400 : '100%',
  }

})

export default Container;