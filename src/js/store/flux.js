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
			logBreakfast: (macros)=>{
				const calories = getStore().breakfast.calories
				const carbs = getStore().breakfast.carbs
				const protein = getStore().breakfast.protein
				const fats = getStore().breakfast.fats
				const newMacros = {
					calories: calories + parseInt(macros.calories),
					carbs: carbs + parseInt(macros.carbs),
					protein: protein + parseInt(macros.protein),
					fats: fats + parseInt(macros.fats)
				}
				setStore({ breakfast : newMacros });
				localStorage.setItem('breakfast', JSON.stringify(newMacros));
				setTimeout(()=>{
					localStorage.removeItem('breakfast')
				},600000);
			},
			logLunch: (macros)=>{
				const calories = getStore().lunch.calories
				const carbs = getStore().lunch.carbs
				const protein = getStore().lunch.protein
				const fats = getStore().lunch.fats
				const newMacros = {
					calories: calories + parseInt(macros.calories),
					carbs: carbs + parseInt(macros.carbs),
					protein: protein + parseInt(macros.protein),
					fats: fats + parseInt(macros.fats)
				}
				setStore({ lunch : newMacros });
				localStorage.setItem('lunch', JSON.stringify(newMacros));
				setTimeout(()=>{
					localStorage.removeItem('lunch')
				},600000);
			},
			logDinner: (macros)=>{
				const calories = getStore().dinner.calories
				const carbs = getStore().dinner.carbs
				const protein = getStore().dinner.protein
				const fats = getStore().dinner.fats
				const newMacros = {
					calories: calories + parseInt(macros.calories),
					carbs: carbs + parseInt(macros.carbs),
					protein: protein + parseInt(macros.protein),
					fats: fats + parseInt(macros.fats)
				}
				setStore({ dinner : newMacros });
				localStorage.setItem('dinner', JSON.stringify(newMacros));
				setTimeout(()=>{
					localStorage.removeItem('dinner')
				},600000);
			},
			logSnacks: (macros)=>{
				const calories = getStore().snacks.calories
				const carbs = getStore().snacks.carbs
				const protein = getStore().snacks.protein
				const fats = getStore().snacks.fats
				const newMacros = {
					calories: calories + parseInt(macros.calories),
					carbs: carbs + parseInt(macros.carbs),
					protein: protein + parseInt(macros.protein),
					fats: fats + parseInt(macros.fats)
				}
				setStore({ snacks : newMacros });
				localStorage.setItem('snacks', JSON.stringify(newMacros));
				setTimeout(()=>{
					localStorage.removeItem('snacks')
				},600000);
			}
		}
	};
};

export default getState;
