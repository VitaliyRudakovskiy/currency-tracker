import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
	ChartDropdown,
	ChartModalContainer,
	ChartModalInput,
	ChartModalOverlay,
	ChartModalTitle,
	CloseButton,
	InputsContainer,
} from './styled';
import Input from '@components/UI-Kit/Input';

interface PortalProps {
	onClose: () => void;
}

class ChartModal extends Component<PortalProps> {
	private el: HTMLDivElement;

	constructor(props: PortalProps) {
		super(props);
		this.el = document.createElement('div');
	}

	componentDidMount() {
		document.body.appendChild(this.el);
	}

	componentWillUnmount() {
		document.body.removeChild(this.el);
	}

	render() {
		return ReactDOM.createPortal(
			<ChartModalOverlay>
				<ChartModalContainer>
					<CloseButton onClick={this.props.onClose}>&times;</CloseButton>
					<ChartModalTitle>Choose date</ChartModalTitle>
					<ChartDropdown />
					<InputsContainer>
						<Input placeholder="Input new high rate" />
						<Input placeholder="Input new low rate" />
						<Input placeholder="Input new open rate" />
						<Input placeholder="Input new close rate" />
					</InputsContainer>
				</ChartModalContainer>
			</ChartModalOverlay>,

			this.el
		);
	}
}

export default ChartModal;
