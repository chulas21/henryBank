import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  TouchableOpacity,
  Text,
  ImageBackground,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Button, TextInput } from "react-native-paper";
import { colors } from "../../res/";
import { saveRegisterData } from "../../redux/user/actions";
import { useDispatch, useSelector } from "react-redux";

export const registerScreen3 = ({ navigation }) => {
  const register = useSelector((state) => state.user.registerData);

  const dispatch = useDispatch();
  const [state, setState] = useState({
    street: "",
    location: "",
    country: "",
    province: "",
    docType: register.docType,
    docNumber: register.docNumber,
    birthday: register.birthday,
    phone: register.phone,
    name: register.name,
    lastName: register.lastName,
    email: register.email,
  });
  const handleChangeText = (value, name) => {
    setState({ ...state, [name]: value });
  };

  const checkData = () => {
    if (!state.street || !state.location || !state.country || !state.province) {
      return Alert.alert("Error", "Debes completar todos los datos");
    }
    return (
      dispatch(saveRegisterData(state, 1)), navigation.navigate("Register4")
    );
  };
  return (
    <ImageBackground
      source={require("../../assets/1.png")}
      style={styles.image}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.regform}>
          <TextInput
            style={styles.textinput}
            placeholder="Direccion"
            underlineColorAndroid={"transparent"}
            onChangeText={(value) => handleChangeText(value, "street")}
            value={state.address}
          />
          <TextInput
            style={styles.textinput}
            placeholder="País"
            underlineColorAndroid={"transparent"}
            onChangeText={(value) => handleChangeText(value, "country")}
            value={state.country}
          />
          <TextInput
            style={styles.textinput}
            placeholder="Provincia/Estado"
            underlineColorAndroid={"transparent"}
            onChangeText={(value) => handleChangeText(value, "province")}
            value={state.state}
          />
          <TextInput
            style={styles.textinput}
            placeholder="Ciudad"
            underlineColorAndroid={"transparent"}
            onChangeText={(value) => handleChangeText(value, "location")}
            value={state.city}
          />
          <TouchableOpacity style={styles.longButton} onPress={checkData}>
            <Text style={{ fontSize: 20, color: "black" }}>Continuar</Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  btntext: {
    color: "#fff",
    fontWeight: "bold",
  },
  button: {
    alignSelf: "stretch",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#59CBBD",
    marginTop: 30,
    borderRadius: 15,
  },
  regform: {
    flex: 1,
    padding: 30,
    paddingTop: 50,
    // backgroundColor: colors.primary,
    alignSelf: "stretch",
  },
  textinput: {
    alignSelf: "stretch",
    marginBottom: 25,
    backgroundColor: colors.white,
  },
  picker: {
    marginBottom: 25,
    backgroundColor: colors.white,
    color: colors.black,
    borderRadius: 30,
  },
  longButton: {
    width: "100%",
    height: 50,
    backgroundColor: "#77C5D5",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 25,
    shadowColor: "#000",
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 3,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});
