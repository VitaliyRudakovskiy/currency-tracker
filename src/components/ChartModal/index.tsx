import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import ChartDropdown from '@components/ChartModal/ChartDropdown';
import ChartModalInputs from '@components/ChartModal/ChartModalInputs';
import { ChartDataContext } from '@providers/ChartDataProvider';

import { ChartModalState, ChartObserver, ChartSubjectInterface, CurrencyHistoryData, HistoryEntry, IFormData, PortalProps } from './interfaces';
import { ChartModalContainer, ChartModalOverlay, ChartModalTitle, CloseButton, SubmitButton } from './styled';

class ChartModal extends PureComponent<PortalProps, ChartModalState> {
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

		const updatedData: CurrencyHistoryData = chartData.map((item) => (item[0] === selectedDate ? newDataForSelectedDate : item));

		this.context.updateData(updatedData);
		this.props.onClose();
	};

	setSelectedData = (date: string) => {
		this.setState({ selectedDate: date });
	};

	setFormData = (data: IFormData) => {
		this.setState({ formData: data });
	};

	render() {
		const { onClose } = this.props;
		const { chartData, selectedDate, formData } = this.state;

		return ReactDOM.createPortal(
			<ChartModalOverlay>
				<ChartModalContainer data-cy="chart-modal">
					<CloseButton onClick={onClose} data-cy="chart-modal-close">
						&times;
					</CloseButton>
					<ChartModalTitle>Choose date</ChartModalTitle>
					<ChartDropdown selectedDate={selectedDate} setSelectedData={this.setSelectedData} data={chartData} setFormData={this.setFormData} />
					<ChartModalInputs formData={formData} setFormData={this.setFormData} />
					<SubmitButton onClick={this.handleSave}>Save</SubmitButton>
				</ChartModalContainer>
			</ChartModalOverlay>,
			document.body
		);
	}
}

export default ChartModal;
