import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Button, TextInput } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { colors } from "../res/colors";
import { Icon } from "react-native-elements";
import axios from "axios";
import { vaciarReducer, accountUser } from "../redux/user/actions";

function SendMoneyScreen2(props) {
  const dispatch = useDispatch(); // para la futura accion
  const loginUser = useSelector((state) => state.login.loginUser);
  const accountUserLogin = useSelector((redux) => redux.user.registerData);

  const [state, setState] = useState({
    type: "PESOS",
    account: "",
    amount: "",
    description: "",
  });

  var cvu,
    currency = 0;
  if (accountUserLogin) {
    accountUserLogin.map((p) => {
      if (p.currency === state.type) {
        cvu = p.cvu;
        currency = p.currency;
      }
    });
  }

  const handleChangeText = (value, name) => {
    setState({ ...state, [name]: value });
  };

  const sendMoney = () => {
    var datos = {
      origin: cvu,
      destination: state.account,
      value: parseInt(state.amount),
      type: "TRANSFER",
      currency: currency,
      description: state.description,
    };
    axios
      .post(`http://localhost:8080/users/transfer/transfer`, datos)
      .then(() => {
        dispatch(vaciarReducer());
      })
      .then(() => {
        dispatch(accountUser(loginUser.id, "PESOS"));
        dispatch(accountUser(loginUser.id, "USD"));
      });
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.secondContainer}>
        <Button
          onPress={() => {
            props.navigation.navigate("Home");
          }}
        >
          <Text>Inicio</Text>
        </Button>
        <Text>Transferencias</Text>
        <Icon />
      </View>
      <View style={styles.regform}>
        <Picker
          selectedValue={state.idType}
          style={styles.picker}
          onValueChange={(itemValue) => handleChangeText(itemValue, "type")}
        >
          <Picker.Item label="PESOS" value="PESOS" />
          <Picker.Item label="USD" value="USD" />
        </Picker>

        <TextInput
          style={styles.textinput}
          placeholder="ID account"
          underlineColorAndroid={"transparent"}
          keyboardType="numeric"
          onChangeText={(value) => handleChangeText(value, "account")}
          value={state.account}
        />
        <TextInput
          style={styles.textinput}
          placeholder="$ Amount"
          underlineColorAndroid={"transparent"}
          keyboardType="numeric"
          onChangeText={(value) => handleChangeText(value, "amount")}
          value={state.amount}
        />
        <TextInput
          style={styles.textinput}
          placeholder="Descripción"
          underlineColorAndroid={"transparent"}
          onChangeText={(value) => handleChangeText(value, "description")}
          value={state.description}
        />
        <Button
          mode="contained"
          onPress={() => {
            sendMoney();
            props.navigation.navigate("Home");
          }}
        >
          Enviar
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.primary,
    flex: 1,
    alignSelf: "stretch",
  },
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
  secondContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-evenly",
    color: "#fff",
    height: 120,
    backgroundColor: colors.secondary,
  },
  regform: {
    flex: 1,
    padding: 30,
    paddingTop: 100,
    backgroundColor: colors.primary,
    alignSelf: "stretch",
  },
  textinput: {
    alignSelf: "stretch",
    marginBottom: 50,
    backgroundColor: colors.white,
  },
  picker: {
    marginBottom: 50,
    backgroundColor: colors.white,
    color: colors.black,
    borderRadius: 30,
  },
});

export default SendMoneyScreen2;

