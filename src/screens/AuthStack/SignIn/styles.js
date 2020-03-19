import {StyleSheet} from "react-native";
import {res} from "../../../helpers";

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    paddingVertical: res(80)
  },
  headBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: res(350),
    width: '100%',
    backgroundColor: '#48aec4'
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: res(150),
    width: res(150),
  },
  loginArea: {
    marginHorizontal: 'auto',
    width: res(300),
    marginVertical: res(50),
    backgroundColor: '#fff',
    padding: res(20),
    borderRadius: res(5),
    shadowColor: 'black',
    shadowOpacity: .2,
    shadowRadius: res(3),
    shadowOffset: {
      width:0,
      height: res(2)
    },
    flex: 1,
    elevation: 4
  },
  loginAreaTitle: {
    fontSize: res(20),
    marginBottom: res(20),
    textAlign: 'center'
  }
});

export default s;