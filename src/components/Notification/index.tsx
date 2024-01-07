import React, { Component } from 'react';
import NotificationContainer from './styled';

interface NotificationProps {
	show: boolean;
	onHide: () => void;
}

class Notification extends Component<NotificationProps> {
	notificationTimeoutRef: NodeJS.Timeout | null = null;

	componentDidUpdate() {
		const { show } = this.props;

		if (show) {
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
		const isShown: boolean = this.props.show === true;
		return (
			<NotificationContainer show={this.props.show}>
				{isShown && <p>The graph has been succesfully created!</p>}
			</NotificationContainer>
		);
	}
}

export default Notification;
