const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			targetIntake: {
				calories: 0,
				carbs: 0,
				protein: 0,
				fats: 0
			},
			breakfast: {
				calories: 0,
				carbs: 0,
				protein: 0,
				fats: 0
			},
			lunch: {
				calories: 0,
				carbs: 0,
				protein: 0,
				fats: 0
			},
			dinner: {
				calories: 0,
				carbs: 0,
				protein: 0,
				fats: 0
			},
			snacks: {
				calories: 0,
				carbs: 0,
				protein: 0,
				fats: 0
			},
			currentIntake: {
				calories: 0,
				carbs: 0,
				protein: 0,
				fats: 0
			},
		},
		actions: {
			
		}
	};
};

export default getState;
