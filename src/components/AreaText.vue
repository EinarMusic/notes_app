<template>
	<div>
		<div class="wrap-text">
			<p class="date">
				{{ new Date().toLocaleString() }}
			</p>
			<!-- para hacer editable una div, etc: contenteditable="true".
			texarea ya es editable pero no hace lo que tengo en mente.
			seguir investigando.--->
			<textarea
				contenteditable="true"
				v-bind:value="clickerNote.note"
				v-on:input="handle_note($event.target.value)"
				@keyup.enter="handle_charecter_for_title(char)"
				class="text-note"
				cols="30"
				rows="38"
			></textarea>
		</div>
	</div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
	props: ["forTitle", "obj_id"],
	data() {
		return {
			char: "",
			enter: 0,
		};
	},
	computed: { ...mapState(["clickerNote", "notes"]) },
	methods: {
		...mapMutations(["charactersForTitle"]),
		handle_note($event) {
			this.$emit("handleNote", $event);
			this.char = $event;
		},
		handle_charecter_for_title(char) {
			this.enter++;
			if (this.enter == 1) {
				this.charactersForTitle(char);
			}
		},
	},
};
</script>

<style scoped>
.wrap-text {
	width: 100%;
	height: 94vh;
	overflow: hidden;
}

.date {
	text-align: center;
	color: rgb(131, 131, 131);
	font-size: 14px;
	padding: 5px;
}

.text-note {
	outline: none;
	resize: none;
	border: none;

	width: 100%;
	height: 95%;

	padding: 20px 25px;
	font-size: 14px;

	color: rgb(95, 94, 94);
}
</style>
