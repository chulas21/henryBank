import { StatusBar } from 'expo-status-bar';
import React from 'react';
import colors from './res/colors.js';
import { StyleSheet, View, Image } from 'react-native';
import { Provider as ReduxProvider } from 'react-redux';
import store from './redux/store';


export default function App() {

	const styles = StyleSheet.create({
		container: {
			flex: 1,
			backgroundColor: colors.primary,
			alignItems: 'center',
			justifyContent: 'center',
		},
		image: {
			width: 200,
			height: 200,
		},
	});


	return (
		<ReduxProvider store={store}>
			<View style={styles.container}>
				<Image source={require('./assets/logo2.png')} style={styles.image} />
			</View>
		</ReduxProvider>
	);
}


