<template>
	<div>
		<HeaderBar
			v-on:findId="findId"
			v-on:updateNote="update_Note"
			v-bind:notes="notes"
			v-bind:obj_id="obj_id"
		/>
		<div class="main">
			<div class="note-description">
				<div
					class="description"
					:style="
						n.click
							? { background: 'rgba(255, 245, 99, 0.959)' }
							: { background: 'white' }
					"
					v-for="n in notes"
					:key="n.id"
					v-on:click="findId(n.id), color_For_Clicker_Note(n.id)"
				>
					<p class="title">
						{{ n.title === "" ? "Nueva nota" : n.title }}
					</p>
					<div class="description-main">
						<p>
							<span>{{ n.date }}</span>
							{{ n.description === "" ? "No hay texto..." : n.description }}
						</p>
					</div>
				</div>
			</div>
			<div class="wrap-area">
				<AreaText v-on:handleNote="handleNote($event)" v-bind:obj_id="obj_id" />
			</div>
		</div>
	</div>
</template>

<script>
import AreaText from "./AreaText";
import HeaderBar from "./HeaderBar";
import { mapMutations, mapState } from "vuex";

export default {
	data() {
		return {
			obj_id: null,
		};
	},
	components: { AreaText, HeaderBar },
	computed: {
		...mapState({
			title: "getnotes",
			clickerNote: "clickerNote",
			notes: "notes",
			forTitle: "forTitle",
		}),
	},
	methods: {
		...mapMutations({
			take_note: "takeNote",
			find_Id: "findId",
			update_Note: "updateNote",
			create_Obj_Note: "createObjNote",
			color_For_Clicker_Note: "colorForClickerNote",
		}),
		handleNote($event) {
			this.take_note($event);
		},

		findId(id) {
			this.find_Id(id);
			this.obj_id = id;
		},
		createObjNote() {
			this.create_Obj_Note();
		},
	},
};
</script>

<style scoped>
.wrap-area {
	width: 100%;
	height: 94vh;
}

.main {
	display: flex;
	flex-wrap: nowrap;
	height: 94vh;

	margin-top: 38px;
}

.note-description {
	min-width: 200px;
	max-width: 200px;

	height: 94vh;

	border-right: 1px solid rgb(201, 201, 201);

	cursor: default;
}

.description {
	padding-left: 23px;
	padding-top: 13px;
	height: 65px;

	border-bottom: 1px solid rgb(201, 201, 201);
}

.title {
	font-weight: 550;
	font-size: 14px;

	overflow: hidden;
	text-overflow: ellipsis;
	width: 150px;
	height: 21px;

	margin: 0;
	padding-bottom: 3px;
}

.description-main {
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	width: 150px;
	height: 20px;

	margin: 0px;

	font-size: 14px;
	font-weight: 100;
}

.description-main p {
	color: rgb(131, 131, 131);

	overflow: hidden;
	text-overflow: ellipsis;
}

.description-main span {
	color: black;
	font-size: 13px;
}
</style>
