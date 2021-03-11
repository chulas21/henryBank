import React from "react";
import { StyleSheet, View, Button, ImageBackground } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { updateUserPic } from "../redux/user/actions";

export default function ProfilePicScreen(props) {
  const image = useSelector((state) => state.user.uri);
  const tempImg = props.route.params.tempImg || image;
  const dispatch = useDispatch();
  const handleImgChange = () => {
    dispatch(updateUserPic(tempImg));
    props.navigation.navigate("Home");
  };
  return (
    <View>
      <ImageBackground
        source={!!tempImg ? { uri: tempImg } : { uri: image }}
        style={styles.img}
      >
        <View style={styles.btn}>
          <Button
            title="Actualizar Foto"
            onPress={() => props.navigation.navigate("Camera")}
          />
          <Button onPress={handleImgChange} title="Aceptar" color="#16aa16" />
          <Button
            onPress={() =>
              props.navigation.navigate("Home", { props, tempImg: "" })
            }
            title="Cancelar"
            color="#ff3636"
          />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  btn: {
    flexDirection: "row",
    position: "absolute",
    bottom: 33,
  },
});
