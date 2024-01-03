function getDateMonthAgo() {
	const today = new Date();

	let currentMonth = today.getMonth();
	let currentYear = today.getFullYear();

	currentMonth -= 1;
	if (currentMonth < 0) {
		currentMonth = 11;
		currentYear -= 1;
	}

	const year = currentYear;
	const month = String(currentMonth + 1).padStart(2, '0');
	const day = String(today.getDate()).padStart(2, '0');

	const formattedDate = `${year}-${month}-${day}`;

	return formattedDate;
}

export default getDateMonthAgo;
