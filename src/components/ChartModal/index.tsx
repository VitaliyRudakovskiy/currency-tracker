import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import { ChartDataContext } from '@providers/ChartDataProvider';
import {
	ChartObserver,
	ChartSubjectInterface,
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
				<ChartModalContainer data-cy="chart-modal">
					<CloseButton onClick={onClose} data-cy="chart-modal-close">
						&times;
					</CloseButton>
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
