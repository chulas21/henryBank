import React, { useEffect, useState } from "react";
import { Icon } from "react-native-elements";
import { Avatar } from "react-native-elements";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { colors } from "../res";
import { useDispatch, useSelector } from "react-redux";
import { RadioButton } from "react-native-paper";
import { menuTransfer } from "../redux/transfer/actions";
import { vaciarReducer, accountUser } from "../redux/user/actions";

function ConsolidateScreen(props) {
  const [checked, setChecked] = useState("first");

  const loginUser = useSelector((state) => state.login.loginUser);
  const accountUserLogin = useSelector((state) => state.user.registerData);

  const [balance, setBalance] = useState(0);

  const dispatch = useDispatch();
  useEffect(() => {
    if (loginUser) {
      dispatch(vaciarReducer);
      dispatch(accountUser(loginUser.id, "PESOS"));
      dispatch(accountUser(loginUser.id, "USD"));
    }
  }, [loginUser]);

  // var balance = 0;
  useEffect(() => {
    if (accountUserLogin) {
      accountUserLogin.map((p) => {
        var check;
        if (checked === "first") {
          check = "PESOS";
        } else {
          check = "USD";
        }
        if (p.currency === check) {
          setBalance(p.balance);
        }
      });
    }
  }, [checked, accountUserLogin]);

  var userObject = {
    name: loginUser.name,
    lastName: loginUser.lastName,
    // balance: balance,
    generalIncomes: 2345.6,
    generalExpenses: 1234.5,
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.firstContainer}>
        <View style={{ alignItems: "center" }}>
          <Text style={{ paddingBottom: 20, color: "#fff" }}>
            Hola, {userObject.name}
          </Text>
          <TouchableOpacity style={styles.avatarButton}>
            <Avatar
              rounded
              source={{
                uri:
                  "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
              }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#fff", fontSize: 28 }}>
            {checked == "second" ? "U$D" : "$"} {balance}
          </Text>
          <Text style={{ color: "#fff", fontSize: 14 }}>
            Balance de mi cuenta
          </Text>
        </View>
        <View>
          <Text style={{ color: "#fff" }}>PESOS</Text>
          <RadioButton
            value="first"
            status={checked === "first" ? "checked" : "unchecked"}
            onPress={() => setChecked("first")}
          />
          <Text style={{ color: "#fff" }}>USD</Text>
          <RadioButton
            value="second"
            status={checked === "second" ? "checked" : "unchecked"}
            onPress={() => setChecked("second")}
          />
        </View>
      </View>

      <View style={styles.secondContainer}>
        <View style={styles.generalSumContainer}>
          <Text style={{ color: "black", fontSize: 20 }}>General</Text>
          <View style={{ alignItems: "center", flexDirection: "row" }}>
            <View style={{ alignItems: "center", paddingRight: 55 }}>
              <Text style={styles.generalSumLabel}>Ingresos</Text>
              <Text style={styles.generalSumContent}>
                $ {userObject.generalIncomes}
              </Text>
            </View>
            <View style={{ alignItems: "center" }}>
              <Text style={styles.generalSumLabel}>Gastos</Text>
              <Text style={styles.generalSumContent}>
                $ {userObject.generalExpenses}
              </Text>
            </View>
          </View>
          <Text style={{ color: "black", fontSize: 12 }}>
            1Dia 7Dias 30Dias 6Meses
          </Text>
        </View>
      </View>

      <View style={styles.thirdContainer}>
        <View style={styles.firstButtonContainer}>
          <TouchableOpacity
            style={styles.squareButton}
            onPress={() => {
              dispatch(menuTransfer(accountUserLogin[0].cvu));
              props.navigation.navigate("Transfer");
            }}
          >
            <Icon name="sc-telegram" type="evilicon" />
            <Text style={styles.btnText}>Transacciones</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.squareButton}
            onPress={() => alert("Stats")}
          >
            <Icon name="bar-chart-outline" type="ionicon" />
            <Text style={styles.btnText}>Estadisticas</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.squareButton}
            onPress={() => alert("Personal Info")}
          >
            <Icon name="key-outline" type="ionicon" />
            <Text style={styles.btnText}>Mis Datos</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.squareButton}
            onPress={() => alert("My Products")}
          >
            <Icon name="card-outline" type="ionicon" />
            <Text style={styles.btnText}>Mis Productos</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.secondButtonContainer}>
          <TouchableOpacity
            style={styles.longButton}
            onPress={() => {
              props.navigation.navigate("Deposit");
            }}
          >
            <Icon name="download-outline" type="ionicon" />
            <Text>Recargar Dinero</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.longButton}
            onPress={() => {
              props.navigation.navigate("MenuMoney");
            }}
          >
            <Icon name="send-outline" type="ionicon" />
            <Text>Mandar Dinero</Text>
          </TouchableOpacity>
        </View>
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

  firstContainer: {
    alignItems: "center",
    flex: 0.8,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },

  secondContainer: {
    flex: 0.8,
    justifyContent: "center",
  },

  thirdContainer: {
    flex: 0.9,
    justifyContent: "space-evenly",
  },

  generalSumContainer: {
    backgroundColor: "#fff",
    width: 310,
    height: 200,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "space-evenly",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 3,
  },

  generalSumContent: {
    color: "black",
    fontSize: 22,
  },

  generalSumLabel: {
    color: "gray",
    paddingBottom: 15,
  },

  btnText: {
    fontSize: 10,
  },

  firstButtonContainer: {
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
  },

  secondButtonContainer: {
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
  },

  avatarButton: {
    width: 100,
    height: 100,
    backgroundColor: "#fff",
    justifyContent: "space-evenly",
    alignItems: "center",
  },

  squareButton: {
    width: 80,
    height: 80,
    backgroundColor: "#77C5D5",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 3,
  },

  longButton: {
    width: 160,
    height: 50,
    backgroundColor: "#77C5D5",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 3,
  },

  elevation: {
    shadowColor: "#000",
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 3,
  },
});

export default ConsolidateScreen;
