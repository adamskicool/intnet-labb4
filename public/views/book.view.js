/**
Den här är verkligen inte klar och används ingenstans...

Tanken är att när man klickar på en bokning, så skall routern ta oss
till denna view, som för följande:
1. Hämtar information om bokningen: vilken tid, vilken assistent
2. Skickar information via Socket.io att alla klienter skall uppdateras
   och visa att denna tiden nu är reserverad
3. Inkluderar input fält för vem som bokar: name, book it
4. Ifall användaren inputtar ett namn och bokar, skall information via Socket.io
   skickas till alla klienter att timesloten nu är upptagen
5. Ifall användaren avbryter skall information skickas via Socket.io att alla
   klienter nu kan boka timesloten igen.
**/

Vue.component('route-book', {
	data() {
		return {
			instructor : this.$route.params.instructor
      // time : this.$route.params.time
		}
	},
	created() {
		fetch(`/api/timeslotList/${this.instructor}`) //inte säker på syntaxen här.
			.then(res => res.json())
			.then(data => {
				this.slots = data.list;
			})
    //fixa resterande punkter från lista högst upp.
	},
  template:
	`
	<div class="book">
		<h3>Skit också!</h3>
	</div>
	`
});
