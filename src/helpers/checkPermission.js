import {Alert, Platform} from 'react-native';
import {check, PERMISSIONS, openSettings, request} from "react-native-permissions";

const errors = {
  camera: 'Fotoğraf çekebilmek için ayarlardan kameraya izin vermeniz gerekmektedir.',
  photo: 'Fotoğrafı galerinize kadedebilmek için ayarlardan izin vermeniz gerekmektedir.',
  gallery: 'Galerinizden fotoğraf seçebilmek ayarlardan izin vermeniz gerekmektedir.'
};
const list = {
  photo: {
    permission: Platform.select({
      android: PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
      ios: PERMISSIONS.IOS.PHOTO_LIBRARY,
    }),
  },
  camera: {
    permission: Platform.select({
      android: PERMISSIONS.ANDROID.CAMERA,
      ios: PERMISSIONS.IOS.CAMERA,
    }),
  },
  gallery: {
    permission: Platform.select({
      android: PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
      ios: PERMISSIONS.IOS.PHOTO_LIBRARY,
    }),
  }
}

function goSettings(type){
  Alert.alert(
    'Hata!',
    errors[type],
    [
      {
        text: 'Kapat',
        style: 'cancel'
      },
      {text: 'Ayarlar', onPress: openSettings},
    ],
    { cancelable: false },
  );
}

const checkPermission = function(type) {
  return new Promise(async function(resolve, reject) {
    try {

      const permission = await check(list[type].permission);

      console.log(permission);

      if(permission === 'granted'){
        resolve('granted')
      }
      else if(permission === 'denied'){
        const newPermission = await request(list[type].permission);

        if(newPermission === 'denied'){
          goSettings(type);
          reject('denied')
        }else if(newPermission === 'granted'){
          resolve('granted')
        }

      }else if(permission === 'blocked'){
        goSettings(type);
        reject('blocked')

      }else if(permission === 'unavailable'){
        alert('Bu özellik cihazınızda kullanılamıyor.');
        reject('unavailable')
      }

      return false;



    } catch (e) {
      console.log('xx');
      console.warn(e);
      return false;
    }
  });
}

export default checkPermission;