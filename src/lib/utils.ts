const SUFFIXES = [
	"",
	"K",
	"M",
	"B",
	"T",
	"Qa",
	"Qi",
	"Sx",
	"Sp",
	"Oc",
	"No",
	"Dc",
	"UDc",
	"DDc",
	"TDc",
	"QaDc",
	"QiDc",
	"SxDc",
	"SpDc",
	"OcDc",
	"NoDc",
	"Vg",
	"UVg",
	"DVg",
	"TVg",
	"QaVg",
	"QiVg",
	"SxVg",
	"SpVg",
	"OcVg",
	"NoVg",
	"Tg",
	"UTg",
	"DTg",
	"TTg",
	"QaTg",
	"QiTg",
	"SxTg",
	"SpTg",
	"OcTg",
	"NoTg",
	"Qag",
	"UQag",
	"DQag",
	"TQag"
];

export function formatNumber(num: number): string {
	if (!Number.isFinite(num)) {
		throw new Error("Le nombre doit être fini.");
	}

	const absNum = Math.abs(num);
	const sign = num < 0 ? "-" : "";

	if (absNum < 1000) {
		return `${num}`;
	}

	const exponent = Math.floor(Math.log(absNum) / Math.log(1000));
	const suffixIndex = Math.min(exponent, SUFFIXES.length - 1);
	const suffix = SUFFIXES[suffixIndex];
	const scaled = num / Math.pow(1000, suffixIndex);

	return `${sign}${scaled.toFixed(2)}${suffix}`;
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
