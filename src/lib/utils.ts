export function formatNumber(num: number): string {
	return new Intl.NumberFormat('en', {
		notation: 'compact',
		compactDisplay: 'short',
		maximumFractionDigits: 2
	}).format(num);
}

export function shortNumberText(num: number): string {
	const names = [
		'double',
		'triple',
		'quadruple',
		'quintuple',
		'sextuple',
		'septuple',
		'octuple',
		'nonuple',
		'decuple',
	];
	return names[num - 2] || `${num}x`;
}

export function capitalize(str: string): string {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

export function randomBetween(min: number, max: number): number {
	return Math.random() * (max - min) + min;
}
