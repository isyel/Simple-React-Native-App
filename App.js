import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, FlatList, StyleSheet, TextInput, View } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
	const [courseGoals, setCourseGoals] = useState([]);
	const [isAddMode, setIsAddMode] = useState(false);

	const addGoalHandler = (enteredGoal) => {
		setCourseGoals((currentGoals) => [
			...currentGoals,
			{ id: Math.random().toString(), value: enteredGoal },
		]);
		setIsAddMode(false);
	};

	function removeGoalHandler(goalId) {
		setCourseGoals((currentGoals) => {
			return currentGoals.filter((goal) => goal.id !== goalId);
		});
	}

	const cancelGoalAdditionHandler = () => {
		setIsAddMode(false);
	};

	return (
		<View style={styles.screen}>
			<Button title="ADD NEW GOAL" onPress={() => setIsAddMode(true)} />
			<GoalInput
				addGoal={addGoalHandler}
				visible={isAddMode}
				onCancel={cancelGoalAdditionHandler}
			/>
			<FlatList
				keyExtractor={(item, index) => item.id}
				data={courseGoals}
				renderItem={(itemData) => (
					<GoalItem
						id={itemData.item.id}
						title={itemData.item.value}
						onDelete={removeGoalHandler}
					/>
				)}
			/>
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		padding: 50,
	},
});
