import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  rowDirection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleText: {
    fontSize: 18,
  },
  removeText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
  },
  doneText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green',
  },
  strike: {
    textDecorationLine: 'line-through',
  },
});

export default styles;
