function getDate30DaysAgo() {
	const today = new Date();

	today.setDate(today.getDate() - 30);

	const year = today.getFullYear();
	const month = String(today.getMonth() + 1).padStart(2, '0');
	const day = String(today.getDate()).padStart(2, '0');

	const formattedDate = `${year}-${month}-${day}`;

	return formattedDate;
}

export default getDate30DaysAgo;
