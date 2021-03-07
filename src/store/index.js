import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	strict: true,
	state: {
		getnotes: "",
		clickerNote: null,
		forTitle: 0,
		notes: [
			{
				id: 1,
				title: "",
				description: "",
				note: "",
				date: new Date().toLocaleDateString(),
				click: false,
			},
		],
	},
	mutations: {
		takeNote(state, note) {
			state.getnotes = note;
		},
		charactersForTitle(state, char) {
			state.forTitle = char.length;
		},
		findId(state, id) {
			// note clicker
			let click = state.notes.find((data) => {
				return data.id === id;
			});

			return (state.clickerNote = click);
		},
		createObjNote(state) {
			state.notes.unshift({
				id: state.notes.length + 1,
				title: "",
				description: "",
				note: "",
				date: new Date().toLocaleDateString(),
				click: false,
			});
		},
		updateNote(state) {
			if (state.clickerNote !== null) {
				state.clickerNote.note = state.getnotes;
				state.clickerNote.title = state.getnotes.slice(0, state.forTitle);
				state.clickerNote.description = state.getnotes.slice(state.forTitle);
			}
		},
		deleteNote(state) {
			let index = state.notes.findIndex((data) => {
				return data.id === state.clickerNote.id;
			});

			state.notes.splice(index, 1);
		},
		colorForClickerNote(state) {
			let index = state.notes.filter((data) => {
				return data.id === state.clickerNote.id;
			});
			//find the obj with the same value.
			let findRepeatedValues = state.notes.filter((data) => {
				return data.click === state.clickerNote.click;
			});
			// no repeat "true" to the same obj
			for (let value of state.notes) {
				if (
					findRepeatedValues.length >= 1 &&
					value.id != findRepeatedValues.id
				) {
					value.click = false;
				}
			}

			let some = index.find((data) => data);
			// change obj value.
			if (some.click === false) {
				return (some.click = true);
			} else {
				return (some.click = false);
			}
		},
		allClickerNoteFalse(state) {
			let index = state.notes.filter((data) => {
				return data.click == state.clickerNote.click;
			});

			let findTrue = index.find((data) => data);
			return (findTrue.click = false);
		},
	},
});
