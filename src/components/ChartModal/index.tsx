// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import {
// 	ChartDataContext,
// 	ChartObserver,
// 	ChartSubjectInterface,
// } from '@providers/ChartDataProvider';
// import {
// 	CurrencyHistoryData,
// 	HistoryEntry,
// 	IFormData,
// } from '@interfaces/interfaces';
// import ChartModalInputs from '@components/ChartModalInputs';
// import ChartDropdown from '@components/ChartDropdown';
// import {
// 	ChartModalContainer,
// 	ChartModalOverlay,
// 	ChartModalTitle,
// 	CloseButton,
// 	SubmitButton,
// } from './styled';

// interface PortalProps {
// 	onClose: () => void;
// }

// interface ChartModalState {
// 	chartData: CurrencyHistoryData;
// 	selectedDate: string;
// 	formData: IFormData;
// }

// class ChartModal extends Component<PortalProps, ChartModalState> {
// 	context!: ChartSubjectInterface;

// 	observer!: ChartObserver;

// 	static get contextType() {
// 		return ChartDataContext;
// 	}

// 	constructor(props: PortalProps) {
// 		super(props);
// 		this.state = {
// 			chartData: [],
// 			selectedDate: '',
// 			formData: {
// 				newLowRate: '',
// 				newOpenRate: '',
// 				newCloseRate: '',
// 				newHighRate: '',
// 			},
// 		};
// 	}

// 	componentDidMount() {
// 		const { addObserver, getData } = this.context;

// 		this.observer = {
// 			update: (newData: CurrencyHistoryData) => {
// 				this.setState({ chartData: newData });
// 			},
// 		};
// 		addObserver(this.observer);
// 		this.setState({ chartData: getData() });
// 	}

// 	componentWillUnmount() {
// 		const { removeObserver } = this.context;
// 		removeObserver(this.observer);
// 	}

// 	handleSave = () => {
// 		const { selectedDate, formData, chartData } = this.state;
// 		const { updateData } = this.context;
// 		const { onClose } = this.props;

// 		const newDataForSelectedDate: HistoryEntry = [
// 			selectedDate,
// 			Number(formData.newLowRate),
// 			Number(formData.newOpenRate),
// 			Number(formData.newCloseRate),
// 			Number(formData.newHighRate),
// 		];

// 		const updatedData: CurrencyHistoryData = chartData.map((item) =>
// 			item[0] === selectedDate ? newDataForSelectedDate : item
// 		);

// 		updateData(updatedData);
// 		onClose();
// 	};

// 	render() {
// 		const { onClose } = this.props;
// 		const { chartData, selectedDate, formData } = this.state;

// 		return ReactDOM.createPortal(
// 			<ChartModalOverlay>
// 				<ChartModalContainer>
// 					<CloseButton onClick={onClose}>&times;</CloseButton>
// 					<ChartModalTitle>Choose date</ChartModalTitle>
// 					<ChartDropdown
// 						selectedDate={selectedDate}
// 						setSelectedData={(date: string) =>
// 							this.setState({ selectedDate: date })
// 						}
// 						data={chartData}
// 						setFormData={(data: IFormData) => this.setState({ formData: data })}
// 					/>
// 					<ChartModalInputs
// 						formData={formData}
// 						setFormData={(data: IFormData) => this.setState({ formData: data })}
// 					/>
// 					<SubmitButton onClick={this.handleSave}>Save</SubmitButton>
// 				</ChartModalContainer>
// 			</ChartModalOverlay>,
// 			document.body
// 		);
// 	}
// }

// export default ChartModal;

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
	ChartDataContext,
	ChartObserver,
	ChartSubjectInterface,
} from '@providers/ChartDataProvider';
import {
	CurrencyHistoryData,
	HistoryEntry,
	IFormData,
} from '@interfaces/interfaces';
import ChartModalInputs from '@components/ChartModalInputs';
import ChartDropdown from '@components/ChartDropdown';
import {
	ChartModalContainer,
	ChartModalOverlay,
	ChartModalTitle,
	CloseButton,
	SubmitButton,
} from './styled';

interface PortalProps {
	onClose: () => void;
}

interface ChartModalState {
	chartData: CurrencyHistoryData;
	selectedDate: string;
	formData: IFormData;
}

class ChartModal extends Component<PortalProps, ChartModalState> {
	static contextType = ChartDataContext;
	context!: ChartSubjectInterface;
	observer!: ChartObserver;

	constructor(props: PortalProps) {
		super(props);
		this.state = {
			chartData: [],
			selectedDate: '',
			formData: {
				newLowRate: '',
				newOpenRate: '',
				newCloseRate: '',
				newHighRate: '',
			},
		};
	}

	componentDidMount() {
		this.observer = {
			update: (newData: CurrencyHistoryData) => {
				this.setState({ chartData: newData });
			},
		};
		this.context.addObserver(this.observer);
		this.setState({ chartData: this.context.getData() });
	}

	componentWillUnmount() {
		this.context.removeObserver(this.observer);
	}

	handleSave = () => {
		const { selectedDate, formData, chartData } = this.state;
		const newDataForSelectedDate: HistoryEntry = [
			selectedDate,
			Number(formData.newLowRate),
			Number(formData.newOpenRate),
			Number(formData.newCloseRate),
			Number(formData.newHighRate),
		];

		const updatedData: CurrencyHistoryData = chartData.map((item) =>
			item[0] === selectedDate ? newDataForSelectedDate : item
		);

		this.context.updateData(updatedData);
		this.props.onClose();
	};

	render() {
		const { onClose } = this.props;
		const { chartData, selectedDate, formData } = this.state;

		return ReactDOM.createPortal(
			<ChartModalOverlay>
				<ChartModalContainer>
					<CloseButton onClick={onClose}>&times;</CloseButton>
					<ChartModalTitle>Choose date</ChartModalTitle>
					<ChartDropdown
						selectedDate={selectedDate}
						setSelectedData={(date: string) =>
							this.setState({ selectedDate: date })
						}
						data={chartData}
						setFormData={(data: IFormData) => this.setState({ formData: data })}
					/>
					<ChartModalInputs
						formData={formData}
						setFormData={(data: IFormData) => this.setState({ formData: data })}
					/>
					<SubmitButton onClick={this.handleSave}>Save</SubmitButton>
				</ChartModalContainer>
			</ChartModalOverlay>,
			document.body
		);
	}
}

export default ChartModal;
