<template>
	<div>
		<div class="some">
			<div>
				<span
					class="wrap-btn"
					v-on:click="handleCreateObjNote(), handelFindId()"
				>
					<i class="fa fa-pencil-square-o" aria-hidden="true"></i>
				</span>
				<span class="wrap-btn" v-on:click="deleteNote()">
					<i class="fa fa-trash-o" aria-hidden="true"></i>
				</span>
			</div>
		</div>
	</div>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
	props: ["obj_id"],
	data() {
		return {
			some: 0,
		};
	},
	computed: { ...mapState(["notes", "clickerNote"]) },
	methods: {
		...mapMutations(["createObjNote", "deleteNote", "allClickerNoteFalse"]),
		handleCreateObjNote() {
			this.$emit("updateNote");
			this.createObjNote();
			this.allClickerNoteFalse();
		},
		handelFindId() {
			let len = this.notes.length;

			this.$emit("findId", len);
		},
	},
	created() {
		this.$emit("findId", 1);
	},
};
</script>

<style scoped>
.some {
	padding: 10px;
	position: fixed;
	top: 0;
	width: 100%;

	background: rgb(194, 192, 192);
}

button {
	padding: 3px 10px;
	border-radius: 2px;
	border: 1px solid black;
}

.wrap-btn {
	background: rgb(238, 236, 236);
	border-radius: 5px;

	padding: 4px 10px 2px 12px;
	margin: 0px 5px;

	cursor: pointer;
}
</style>
