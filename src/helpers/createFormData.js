import {Platform} from "react-native";

export default function createFormData(body, file) {
  const formData = new FormData();
  formData.append(file.paramName, {
    name: file.newName,
    type: file.type,
    uri: Platform.OS === 'android' ? file.uri : file.uri.replace('file://', ''),
  });

  Object.keys(body).forEach(key => {
    formData.append(key, body[key]);
  });

  return formData;
}