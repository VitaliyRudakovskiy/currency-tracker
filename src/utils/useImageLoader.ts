import { useEffect, useState } from 'react';

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
				throw new Error(`Error loading image: ${error}`);
			}
		};

		loadImage();
	}, [imagePath]);

	return imageSrc;
}
