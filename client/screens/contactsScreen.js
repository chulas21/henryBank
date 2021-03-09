import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, Text, SectionList, Button, StyleSheet } from "react-native";
import { colors } from "../res";
import axios from "axios";
import SendMoneyScreen from "./sendMoneyScreen";

// var contacts = [
//   {
//     eMail: "cuarto@email.com",
//     name: "Cecilia Puente",
//   },
// ];

export default function ContactsScreen(props) {
  const loginUser = useSelector((state) => state.login.loginUser);

  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/users/contact/" + loginUser.id)
      .then((data) => {
        setContacts(data.data);
      });
  }, []);

  var getData = () => {
    let contactsArr = [];
    let aCode = "A".charCodeAt(0);
    for (let i = 0; i < 26; i++) {
      let currChar = String.fromCharCode(aCode + i);
      let obj = {
        title: currChar,
      };
      let currContacts = contacts.filter((item) => {
        return item.alias[0].toUpperCase() === currChar;
      });
      if (currContacts.length > 0) {
        currContacts.sort((a, b) => a.alias.localeCompaer(b.alias));
        obj.data = currContacts;
        contactsArr.push(obj);
      }
    }
    return contactsArr;
  };

  const transfer = (item) => {
    props.navigation.navigate("SendMoney", item);
  };

  const addContact = () => {};

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Text style={styles.header}> Tus Contactos</Text>
        <SectionList
          sections={getData()}
          ListFooterComponent={() => (
            <Button title="Agregar Contacto" onPress={addContact} />
          )}
          //Estructura de item => { index:2, nombre:"segundo"}
          renderItem={({ item }) => (
            <View style={styles.row}>
              <View>
                <Text style={styles.contactNames}>{item.alias}</Text>
              </View>
              <View style={styles.transferBtn}>
                <Button onPress={() => transfer(item)} title="Transferir" />
              </View>
            </View>
          )}
          keyExtractor={(item) => item.index}
          /* Estructura de cada sección:
        {data: [ {index:1, nombre: primero} , {index: 34, nombre:pablo}]}
        */
          renderSectionHeader={({ section }) => {
            <View style={styles.sectionHeader}>
              <Text>{section.title}</Text>
            </View>;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.primary,
  },
  container: {
    marginTop: 35,
    width: 300,
  },
  header: {
    alignSelf: "center",
    fontSize: 35,
    color: colors.accent,
    marginBottom: 15,
  },
  row: {
    flexDirection: "row",

    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
    margin: 7,
    paddingLeft: 3,
    backgroundColor: colors.secondary,
  },
  contactNames: {
    fontSize: 20,
    color: colors.primary,
    paddingRight: 30,
  },
  transferBtn: {
    alignSelf: "flex-end",
  },
  sectionHeader: {},
});
