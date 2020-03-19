import {StyleSheet} from "react-native";
import {res} from "../../../helpers";

const s = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 3,
  },
  clipper: {
    width: '100%',
    top: -res(100),
    overflow: 'hidden',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  linearGradient: {
    width: res(800),
    height: res(800),
    transform: [{ rotate: "-20deg" }],
    borderRadius: res(50),
    zIndex: 10,
    bottom: res(100),
    left: -res(120),
  },
  headerTitle: {
    color: '#fff',
    fontSize: res(23),
    fontWeight: 'bold',
    position: 'absolute',
    bottom: res(130),
    left: res(30),
    zIndex: 20
  },
  photoContainer: {
    width: res(120),
    height: res(120),
    zIndex: 20,

    position: 'absolute',
    bottom: 0,
    left: res(180),
    borderWidth: res(4),
    borderColor: 'rgba(240,240,240,0.4)',
    borderRadius: res(60),
    overflow: 'hidden'
  },
  photo: {
    width: res(112),
    height: res(112),
    borderRadius: res(56),
    backgroundColor: '#fff',
  },
  body: {
    flex: 4,
    paddingHorizontal: res(30),
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomColor: '#eee'
  },
  iconContainer: {
    flex: 1,
    marginRight: res(10),
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconBorder: {
    flex: 1,
    height: res(42),
    width: res(42),
    borderRadius: res(22),
    borderWidth: res(4),
    borderColor: "rgba(240,240,240,0.4)",
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    fontSize: res(20)
  },
  textContainer: {
    height: res(40),
    justifyContent: 'space-between',
    flex: 5
  },
  title: {
    fontSize: res(12),
    color: '#878787',
  },
});

export default s;