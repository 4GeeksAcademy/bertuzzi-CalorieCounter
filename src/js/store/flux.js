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
			}
		},
		actions: {

			setPreferences: (targetMacros) => {
				console.log(targetMacros);
				setStore({ targetIntake: targetMacros });
				localStorage.setItem('targetIntake', JSON.stringify(targetMacros));
			},

			fetchMacros: async (ingr, amount, meal) => {
				const url = 'https://api.edamam.com/api/nutrition-data?app_id=c6d34f6b&app_key=ad4f63207634378a114a5d09a9afb26a&nutrition-type=cooking&ingr=100%20g%20' + ingr;
				const options = {
					method: 'GET',
					headers: {
						'content-type': 'application/json'
					}
				}
				const response = await fetch(url, options);
				if (!response.ok) {
					console.log(response.status, response.statusText);
					return response.statusText;
				}
				const data = await response.json();
				const nutritionaValues = data.totalNutrients
				console.log(nutritionaValues);

				const calories = (Math.round((nutritionaValues.ENERC_KCAL.quantity) * (amount / 100)));
				const carbs = (Math.round((nutritionaValues.CHOCDF.quantity) * (amount / 100)));
				const protein = (Math.round((nutritionaValues.PROCNT.quantity) * (amount / 100)));
				const fats = (Math.round((nutritionaValues.FAT.quantity) * (amount / 100)));
				let currentCal = 0;
				let currentCarbs = 0;
				let currentProtein = 0;
				let currentFats = 0;

				if (meal == 'breakfast') {
					currentCal = getStore().breakfast.calories;
					currentCarbs = getStore().breakfast.carbs;
					currentProtein = getStore().breakfast.protein;
					currentFats = getStore().breakfast.fats;

					let macronutrients = {
						calories: currentCal + calories,
						carbs: currentCarbs + carbs,
						protein: currentProtein + protein,
						fats: currentFats + fats
					}
					console.log(macronutrients);
					setStore({ breakfast: macronutrients });
					localStorage.setItem('breakfast', JSON.stringify(macronutrients));
					setTimeout(() => {
						localStorage.removeItem('breakfast')
					}, 600000);
				}
				else if (meal == 'lunch') {
					currentCal = getStore().lunch.calories;
					currentCarbs = getStore().lunch.carbs;
					currentProtein = getStore().lunch.protein;
					currentFats = getStore().lunch.fats;

					let macronutrients = {
						calories: currentCal + calories,
						carbs: currentCarbs + carbs,
						protein: currentProtein + protein,
						fats: currentFats + fats
					}
					console.log(macronutrients);
					setStore({ lunch: macronutrients });
					localStorage.setItem('lunch', JSON.stringify(macronutrients));
					setTimeout(() => {
						localStorage.removeItem('lunch')
					}, 600000);
				}
				else if (meal == 'dinner') {
					currentCal = getStore().dinner.calories;
					currentCarbs = getStore().dinner.carbs;
					currentProtein = getStore().dinner.protein;
					currentFats = getStore().dinner.fats;

					let macronutrients = {
						calories: currentCal + calories,
						carbs: currentCarbs + carbs,
						protein: currentProtein + protein,
						fats: currentFats + fats
					}
					console.log(macronutrients);
					setStore({ dinner: macronutrients });
					localStorage.setItem('dinner', JSON.stringify(macronutrients));
					setTimeout(() => {
						localStorage.removeItem('dinner')
					}, 600000);
				}
				else if (meal == 'snacks') {
					currentCal = getStore().snacks.calories;
					currentCarbs = getStore().snacks.carbs;
					currentProtein = getStore().snacks.protein;
					currentFats = getStore().snacks.fats;

					let macronutrients = {
						calories: currentCal + calories,
						carbs: currentCarbs + carbs,
						protein: currentProtein + protein,
						fats: currentFats + fats
					}

					console.log(macronutrients);
					setStore({ snacks: macronutrients });
					localStorage.setItem('snacks', JSON.stringify(macronutrients));
					setTimeout(() => {
						localStorage.removeItem('snacks')
					}, 600000);
					getActions().calculateIntake();
				}
			},

			fetchStorage: () => {
				const macroGoals = localStorage.getItem('targetIntake') ? JSON.parse(localStorage.getItem('targetIntake')) : { calories: 0, carbs: 0, protein: 0, fats: 0 };
				setStore({ targetIntake: macroGoals });
				const loggedBreakfast = localStorage.getItem('breakfast') ? JSON.parse(localStorage.getItem('breakfast')) : { calories: 0, carbs: 0, protein: 0, fats: 0 };
				setStore({ breakfast: loggedBreakfast });
				const loggedLunch = localStorage.getItem('lunch') ? JSON.parse(localStorage.getItem('lunch')) : { calories: 0, carbs: 0, protein: 0, fats: 0 };
				setStore({ lunch: loggedLunch });
				const loggedDinner = localStorage.getItem('dinner') ? JSON.parse(localStorage.getItem('dinner')) : { calories: 0, carbs: 0, protein: 0, fats: 0 };
				setStore({ dinner: loggedDinner });
				const loggedSnacks = localStorage.getItem('snacks') ? JSON.parse(localStorage.getItem('snacks')) : { calories: 0, carbs: 0, protein: 0, fats: 0 };
				setStore({ snacks: loggedSnacks });
				const currentTotal = localStorage.getItem('currentIntake') ? JSON.parse(localStorage.getItem('currentIntake')) : { calories: 0, carbs: 0, protein: 0, fats: 0 };
				setStore({ currentIntake: currentTotal });
			},

			calculateIntake: () => {
				const totCalories = getStore().breakfast.calories + getStore().lunch.calories + getStore().dinner.calories + getStore().snacks.calories;
				const totCarbs = getStore().breakfast.carbs + getStore().lunch.carbs + getStore().dinner.carbs + getStore().snacks.carbs;
				const totProtein = getStore().breakfast.protein + getStore().lunch.protein + getStore().dinner.protein + getStore().snacks.protein;
				const totFats = getStore().breakfast.fats + getStore().lunch.fats + getStore().dinner.fats + getStore().snacks.fats;
				const totalIntake = {
					calories: totCalories,
					carbs: totCarbs,
					protein: totProtein,
					fats: totFats
				};
				setStore({ currentIntake: totalIntake });
				console.log(totalIntake);
				localStorage.setItem('currentIntake', JSON.stringify(totalIntake));
				setTimeout(() => {
					localStorage.removeItem('currentIntake')
				}, 600000);
			}

		}
	};
};

export default getState;
