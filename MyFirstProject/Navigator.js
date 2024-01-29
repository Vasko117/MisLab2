import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Addclothes from './Addclothes';

const Stack = createStackNavigator();

const Navigator = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerStyle: {
					backgroundColor: '#009688', // Background color of the header
				},
				headerTitleStyle: {
					fontWeight: 'bold',
					color: '#fff', // Text color of the header title
				},
				headerTintColor: '#fff', // Color of the back button and header buttons
			}}
		>
			<Stack.Screen
				name="Addclothes"
				component={Addclothes}
				options={({ route }) => ({
					title: `213178`,
				})}
			/>
		</Stack.Navigator>
	);
};

export default Navigator;
