import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Icon } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";
import { colors } from '../res';
import { menuTransfer } from "../redux/transfer/actions";

function TransferScreen(props) {

  const accounts = useSelector((state) => state.user.registerData);  
  const loginUser = useSelector((state) => state.login.loginUser);
  const menutransfer = useSelector((state) => state.transfer.dataTransfer);
  console.log(menutransfer);
  useEffect(()=>{
    props.navigation.navigate("Transfer");
  },[menutransfer])

  const dispatch = useDispatch();

  return (
      <View style={styles.mainContainer}>
        <View style={styles.secondContainer}>
          <TouchableOpacity            
            onPress={() => {
              dispatch(menuTransfer(accounts[1].cvu));
            }}
          >
            <Icon name="sc-telegram" type="evilicon" />
            <Text>USD</Text>
          </TouchableOpacity>
          <TouchableOpacity            
            onPress={() => {
              dispatch(menuTransfer(accounts[0].cvu));
            }}
          >
            <Icon name="sc-telegram" type="evilicon" />
            <Text>PESOS</Text>
          </TouchableOpacity>
          <TouchableOpacity            
            onPress={() => {
              props.navigation.navigate("Home");
            }}
          >
            <Icon name="sc-telegram" type="evilicon" />
            <Text>Inicio</Text>
          </TouchableOpacity>
          <Text>Historial de Transferencias</Text>
        </View>
        <View style={styles.thirdContainer}>
          <View  style={styles.secondButtonContainer}>       
        {        
          menutransfer?.map(transfer => 
          
          <View key={transfer.id} style={transfer.type=="DEP"? styles.general : transfer.origin != accounts[0].cvu ? styles.general : styles.generalT  }>
          <Text style={{ color: "black", fontSize: 20 }}>{transfer.createdAt.slice(0,10)} {transfer.type}</Text>
          <View style={{ alignItems: "center", flexDirection: "row" }}>
            <View style={{ alignItems: "center", paddingRight: 55 }}>
              <Text style={styles.generalSumLabel}>Valor transferido</Text>
              <Text style={styles.generalSumContent}>
               $ {transfer.value}
              </Text>
            </View>
            <View style={{ alignItems: "center" }}>
              <Text style={styles.generalSumLabel}>Transferida de/a</Text>
              <Text style={styles.generalSumContent}>
                {transfer.destination}
              </Text>
            </View>
          </View>
          <View style={{ color: "black", fontSize: 12 , alignItems: "center"}}>
            <Text style={styles.generalSumLabel}>Descripcion</Text>
            <Text style={styles.generalSumContent}>
              {transfer.description}              
            </Text>
          </View>
        </View>
          )
        }
        </View>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
      backgroundColor: colors.primary,
      flex: 1,
      alignSelf: 'stretch',
    },

    secondContainer: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      color: '#fff',    
      height: 140,
      backgroundColor: colors.secondary,
    },
  
    thirdContainer: {
      flex: 0.9,
      justifyContent: 'space-evenly',            
    },  
  
    secondButtonContainer: {
      alignItems: 'center',
      padding: 10,
      height: '100%',
      margin: 20,
      borderRadius: 10, 
    },

    general: {
      backgroundColor: "rgb(172, 232, 179)",
      width: 400,
      height: 210,
      alignSelf: "center",
      alignItems: "center",
      justifyContent: "space-evenly",
      borderRadius: 10,
      shadowColor: "#000",
      shadowOffset: { width: 5, height: 5 },
      shadowOpacity: 0.5,
      shadowRadius: 3,
      elevation: 3,
      marginBottom: 20,
    },

    generalT: {
      backgroundColor: "rgb(216, 168, 168)",
      width: 400,
      height: 210,
      alignSelf: "center",
      alignItems: "center",
      justifyContent: "space-evenly",
      borderRadius: 10,
      shadowColor: "#000",
      shadowOffset: { width: 5, height: 5 },
      shadowOpacity: 0.5,
      shadowRadius: 3,
      elevation: 3,
      marginBottom: 20,
    },

    generalSumContent: {
      color: "black",
      fontSize: 22,
    },
  
    generalSumLabel: {
      color: "gray",
      paddingBottom: 15,
    },

    longButton: {
      width: 220,
      height: 70,
      backgroundColor: '#77C5D5',
      justifyContent: 'space-evenly',
      marginTop: 20,
      borderRadius: 10,
      padding: 20,
      shadowColor: '#000',
      shadowOffset: { width: 3, height: 3 },
      shadowOpacity: 0.5,
      shadowRadius: 3,
      elevation: 3,
    },
  });
  
  export default TransferScreen;