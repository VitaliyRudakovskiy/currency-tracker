import React, { PureComponent, ReactNode } from 'react';
import NotificationContainer from './styled';

interface NotificationProps {
	show: boolean;
	onHide: () => void;
}

class Notification extends PureComponent<NotificationProps> {
	notificationTimeoutRef: NodeJS.Timeout | null = null;

	componentDidUpdate() {
		const { show, onHide } = this.props;

		if (show === true) {
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
			<NotificationContainer
				show={show}
				data-cy="notification"
				data-testid="notification"
			>
				{isShown && <p>The graph has been successfully created!</p>}
			</NotificationContainer>
		);
	}
}

export default Notification;
