function begin()
{
    const hr = document.querySelector('.hr')
		const min = document.querySelector('.min')
		const sec = document.querySelector('.sec')

		setInterval(() => {

			let day = new Date()
			let hour = day.getHours()
			let minutes = day.getMinutes()
			let seconds = day.getSeconds()

	
			let hrrotation = (30 * hour) + (0.5 * minutes);
			let minrotation = 6 * minutes;
			let secrotation = 6 * seconds;

			hr.style.transform =
				`rotate(${hrrotation}deg)`
			min.style.transform =
				`rotate(${minrotation}deg)`
			sec.style.transform =
				`rotate(${secrotation}deg)`
		});
}