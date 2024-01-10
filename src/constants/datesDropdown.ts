import { CurrencyHistoryData } from '@interfaces/interfaces';

const datesDropdown = (dropdownDates: CurrencyHistoryData) => {
	const subarraysWithoutFirst = dropdownDates.slice(1);
	return subarraysWithoutFirst.map((item) => item[0]);
};

export default datesDropdown;
