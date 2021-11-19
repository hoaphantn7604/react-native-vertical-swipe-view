import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  swipeView: {
    width: '100%',
    position: 'absolute',
    zIndex: 9999
  },
  headerTop: {
    backgroundColor: 'transparent',
    height: 0,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8
  },
  image: {
    width: 30,
    height: 30,
  },
  content: {
    flex: 1,
    paddingHorizontal: 16
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold'
  }
})
