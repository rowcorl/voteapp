import { StyleSheet, Text, TouchableOpacity } from 'react-native'

type ButtonProps = {
  btnTitle: string,
  btnTitleStyle?: any,
  btnStyle?: any,
  onPress?: any,
}

const Button = (props: ButtonProps) =>{
  const { btnTitle, btnTitleStyle, onPress, btnStyle, } = props
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={onPress} style={[styles.button, btnStyle]}>
      <Text style={[styles.text, btnTitleStyle]}><>{btnTitle}</></Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#000',
    padding:10,
  },
  text: {
    color: '#eee'
  },
});

export default Button;
