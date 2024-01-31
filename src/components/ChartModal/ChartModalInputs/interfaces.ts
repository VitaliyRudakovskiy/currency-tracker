export interface IFormData {
	[key: string]: string;
	newHighRate: string;
	newLowRate: string;
	newOpenRate: string;
	newCloseRate: string;
}

export interface IChartInputsProps {
	formData: IFormData;
	setFormData: (data: IFormData) => void;
}
