import { useState, useEffect } from 'react';

export default function useImageLoader(imagePath: string) {
	const [imageSrc, setImageSrc] = useState<string | undefined>(undefined);

	useEffect(() => {
		const loadImage = async () => {
			try {
				const module = await import(
					`@assets/currency-icons/${imagePath} Icon.png`
				);
				setImageSrc(module.default);
			} catch (error) {
				console.error('Error loading image:', error);
			}
		};

		loadImage();
	}, [imagePath]);

	return imageSrc;
}
