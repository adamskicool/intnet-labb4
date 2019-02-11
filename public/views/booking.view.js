Vue.component('route-booking', {
	data() {
		return {
			slots: []
		}
	},
	methods: {
		redirect(instructor, time) {
			this.$router.push(`/book/${instructor}`);
		}
	},
	created() {
		fetch('/api/timeslotList')
			.then(res => res.json())
			.then(data => {
				this.slots = data.list;
				console.log(this.slots);
			})
	},
  template:
	`
	<div class="booking">
		<section class="col-md-10 col-md-offset-1">
			<div class="row" style="text-align: left;">
				<h1>Booking:</h1>
			</div>

			<div class="row">
				<div class="well timeslot" v-for="slot in slots" v-on:click="redirect(slot.instructor, slot.time)">
					<div class="row" style="text-align: center;">
						<h4>
						<span>{{ slot.instructor }} {{ slot.time }}</span>
						</h4>
					</div>
				</div>
			</div>
		</section>
	</div>
	`
});
