import React, { useEffect, useRef } from 'react';
import NotificationContainer from './styled';

interface NotificationProps {
	show: boolean;
	onHide: () => void;
}

const Notification: React.FC<NotificationProps> = ({ show, onHide }) => {
	const notificationTimeoutRef = useRef<NodeJS.Timeout | null>(null);

	useEffect(() => {
		if (show) {
			notificationTimeoutRef.current = setTimeout(() => {
				onHide();
			}, 2000);
		}

		return () => {
			if (notificationTimeoutRef.current) {
				clearTimeout(notificationTimeoutRef.current);
			}
		};
	}, [show, onHide]);

	return (
		<NotificationContainer show={show}>
			{show && <p>The graph has been succesfully created!</p>}
		</NotificationContainer>
	);
};

export default Notification;
