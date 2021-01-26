import React, { useState } from "react";
import { Button, Modal, StyleSheet, TextInput, View } from "react-native";

function GoalInput(props) {
	const [enteredGoal, setEnteredGoal] = useState("");

	function goalInputHandler(enteredText) {
		setEnteredGoal(enteredText);
	}

	const addGoalHandler = () => {
		props.addGoal(enteredGoal);
		setEnteredGoal("");
	};

	return (
		<Modal visible={props.visible} animationType="slide">
			<View style={styles.inputContainer}>
				<TextInput
					placeholder="Course Goal"
					style={styles.input}
					onChangeText={goalInputHandler}
					value={enteredGoal}
				/>
				<View style={styles.buttonsContainer}>
					<View style={styles.button}>
						<Button title="CANCEL" color="red" onPress={props.onCancel} />
					</View>
					<View style={styles.button}>
						<Button title="ADD" onPress={addGoalHandler} />
					</View>
				</View>
				{/* <Button title="ADD" onPress={() => props.addGoal(enteredGoal)} /> */}
			</View>
		</Modal>
	);
}

const styles = StyleSheet.create({
	input: {
		width: "80%",
		borderBottomColor: "black",
		borderBottomWidth: 2,
		padding: 10,
		marginBottom: 10,
	},
	inputContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	buttonsContainer: {
		flexDirection: "row",
		justifyContent: "space-around",
		width: "60%",
	},
	button: {
		width: "40%",
	},
});

export default GoalInput;
