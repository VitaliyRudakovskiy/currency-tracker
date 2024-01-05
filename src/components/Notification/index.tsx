import React, { Component } from 'react';
import NotificationContainer from './styled';

interface NotificationProps {
	show: boolean;
	onHide: () => void;
}

class Notification extends Component<NotificationProps> {
	notificationTimeoutRef: NodeJS.Timeout | null = null;

	componentDidUpdate(prevProps: NotificationProps) {
		if (this.props.show) {
			if (this.notificationTimeoutRef) {
				clearTimeout(this.notificationTimeoutRef);
			}
			this.notificationTimeoutRef = setTimeout(() => {
				this.props.onHide();
			}, 2000);
		}
	}

	componentWillUnmount() {
		if (this.notificationTimeoutRef) {
			clearTimeout(this.notificationTimeoutRef);
		}
	}

	render() {
		return (
			<NotificationContainer show={this.props.show}>
				{this.props.show && <p>The graph has been succesfully created!</p>}
			</NotificationContainer>
		);
	}
}

export default Notification;
