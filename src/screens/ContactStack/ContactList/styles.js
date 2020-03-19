import {StyleSheet} from "react-native";
import {res} from "../../../helpers";

const s = StyleSheet.create({
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: res(10),
    borderBottomWidth: 1,
    borderBottomColor: '#eee'
  },
  avatar: {
    width: res(60),
    height: res(60),
    borderRadius: res(30),
    marginHorizontal: res(10)
  },
  textContainer: {
    justifyContent: 'space-around',
    paddingVertical: res(3)
  },
  name: {
    fontSize: res(14)
  },
  email: {
    fontSize: res(12)
  },
  searchContainer: {
    padding: res(10)
  },
  searchInput: {
    fontSize: res(16),
    backgroundColor: '#f9f9f9',
    padding: res(10)
  }
});

export default s;