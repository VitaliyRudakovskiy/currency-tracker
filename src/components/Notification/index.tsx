import React, { Component, ReactNode } from 'react';
import NotificationContainer from './styled';

interface NotificationProps {
	show: boolean;
	onHide: () => void;
}

class Notification extends Component<NotificationProps> {
	notificationTimeoutRef: NodeJS.Timeout | null = null;

	componentDidUpdate() {
		const { show, onHide } = this.props;

		if (show) {
			if (this.notificationTimeoutRef) {
				clearTimeout(this.notificationTimeoutRef);
			}
			this.notificationTimeoutRef = setTimeout(() => {
				onHide();
			}, 2000);
		}
	}

	componentWillUnmount() {
		if (this.notificationTimeoutRef) {
			clearTimeout(this.notificationTimeoutRef);
		}
	}

	render(): ReactNode {
		const { show } = this.props;
		const isShown: boolean = show === true;
		return (
			<NotificationContainer show={show}>
				{isShown && <p>The graph has been successfully created!</p>}
			</NotificationContainer>
		);
	}
}

export default Notification;
