import { useState } from "react";
import { StyleSheet } from "react-native";
import { View, Pressable, Image } from "react-native";

import * as ImagePicker from "expo-image-picker";

import { updateProfilePic } from "../services/api";
import { getUserId } from "../services/functions";

export default function UserPicture() {
	const [picture, setPicture] = useState(
		"https://static-00.iconduck.com/assets.00/profile-major-icon-512x512-xosjbbdq.png"
	);

	async function pickImage() {
		const result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.All,
			allowsEditing: true,
			aspect: [4, 3],
			quality: 1,
		});

		console.log(result);

		if (!result.canceled) {
			const profilePic = result.assets[0].uri;
			const userId = await getUserId();
			await updateProfilePic(profilePic, userId);
		} else {
			alert("Erro ao escolher a imagem.");
		}
	}

	return (
		<View style={styles.container}>
			<Pressable style={styles.button} onPress={pickImage}>
				<Image
					source={{
						uri: picture,
					}}
					style={styles.picture}
				/>
			</Pressable>
		</View>
	);
}

export const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		width: 40,
		height: 40,
	},

	button: {
		width: 40,
		height: 40,
		borderRadius: 50,
	},

	picture: {
		width: 40,
		height: 40,
		borderRadius: 50,
	},
});
