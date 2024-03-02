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
			loggedBreakfast: [],
			lunch: {
				calories: 0,
				carbs: 0,
				protein: 0,
				fats: 0
			},
			loggedFood: [],
			dinner: {
				calories: 0,
				carbs: 0,
				protein: 0,
				fats: 0
			},
			loggedDinner: [],
			snacks: {
				calories: 0,
				carbs: 0,
				protein: 0,
				fats: 0
			},
			loggedSnacks: [],
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

			fetchMacros: async (ingr, amount, loggedFood, meal) => {
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
				let loggedFoods = [];

				if (meal == 'breakfast') {
					currentCal = getStore().breakfast.calories;
					currentCarbs = getStore().breakfast.carbs;
					currentProtein = getStore().breakfast.protein;
					currentFats = getStore().breakfast.fats;
					loggedFoods = getStore().loggedBreakfast;
					let newLogs = [...loggedFoods, loggedFood];

					let macronutrients = {
						calories: currentCal + calories,
						carbs: currentCarbs + carbs,
						protein: currentProtein + protein,
						fats: currentFats + fats
					}
					console.log(macronutrients);
					setStore({ breakfast: macronutrients });
					setStore({ loggedBreakfast: newLogs });
					localStorage.setItem('breakfast', JSON.stringify(macronutrients));
					localStorage.setItem('loggedBreakfast', JSON.stringify(newLogs))
					setTimeout(() => {
						localStorage.removeItem('breakfast')
						localStorage.removeItem('loggedBreakfast')
					}, 600000);
				}
				else if (meal == 'lunch') {
					currentCal = getStore().lunch.calories;
					currentCarbs = getStore().lunch.carbs;
					currentProtein = getStore().lunch.protein;
					currentFats = getStore().lunch.fats;
					loggedFoods = getStore().loggedLunch;
					let newLogs = [...loggedFoods, loggedFood];

					let macronutrients = {
						calories: currentCal + calories,
						carbs: currentCarbs + carbs,
						protein: currentProtein + protein,
						fats: currentFats + fats
					}
					console.log(macronutrients);
					setStore({ lunch: macronutrients });
					setStore({ loggedLunch: newLogs });
					localStorage.setItem('lunch', JSON.stringify(macronutrients));
					localStorage.setItem('loggedLunch', JSON.stringify(newLogs));
					setTimeout(() => {
						localStorage.removeItem('lunch');
						localStorage.removeItem('loggedLunch');
					}, 600000);
				}
				else if (meal == 'dinner') {
					currentCal = getStore().dinner.calories;
					currentCarbs = getStore().dinner.carbs;
					currentProtein = getStore().dinner.protein;
					currentFats = getStore().dinner.fats;
					loggedFoods = getStore().loggedDinner;
					let newLogs = [...loggedFoods, loggedFood];

					let macronutrients = {
						calories: currentCal + calories,
						carbs: currentCarbs + carbs,
						protein: currentProtein + protein,
						fats: currentFats + fats
					}
					console.log(macronutrients);
					setStore({ dinner: macronutrients });
					setStore({ loggedDinner: newLogs });
					localStorage.setItem('dinner', JSON.stringify(macronutrients));
					localStorage.setItem('loggedDinner', JSON.stringify(newLogs));
					setTimeout(() => {
						localStorage.removeItem('dinner')
						localStorage.removeItem('loggedDinner')
					}, 600000);
				}
				else if (meal == 'snacks') {
					currentCal = getStore().snacks.calories;
					currentCarbs = getStore().snacks.carbs;
					currentProtein = getStore().snacks.protein;
					currentFats = getStore().snacks.fats;
					loggedFoods = getStore().loggedSnacks;
					let newLogs = [...loggedFoods, loggedFood];

					let macronutrients = {
						calories: currentCal + calories,
						carbs: currentCarbs + carbs,
						protein: currentProtein + protein,
						fats: currentFats + fats
					}
					console.log(macronutrients);
					setStore({ snacks: macronutrients });
					setStore({ loggedSnacks: newLogs })
					localStorage.setItem('snacks', JSON.stringify(macronutrients));
					localStorage.setItem('loggedSnacks', JSON.stringify(newLogs));
					setTimeout(() => {
						localStorage.removeItem('snacks')
						localStorage.removeItem('loggedSnacks')
					}, 600000);
				}
				getActions().calculateIntake();
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
				const breakfastLogs = localStorage.getItem('loggedBreakfast') ? JSON.parse(localStorage.getItem('loggedBreakfast')) : [];
				setStore({ loggedBreakfast: breakfastLogs });
				const lunchLogs = localStorage.getItem('loggedLunch') ? JSON.parse(localStorage.getItem('loggedLunch')) : [];
				setStore({ loggedLunch: lunchLogs });
				const dinnerLogs = localStorage.getItem('loggedDinner') ? JSON.parse(localStorage.getItem('loggedDinner')) : [];
				setStore({ loggedDinner: dinnerLogs })
				const snackLogs = localStorage.getItem('loggedSnacks') ? JSON.parse(localStorage.getItem('loggedSnacks')) : [];
				setStore({ loggedSnacks: snackLogs })
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
