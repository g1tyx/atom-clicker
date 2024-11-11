export const BUILDINGS = {
	molecule: {
		cost: 20,
		rate: 0.1,
		name: 'Molecule',
	},
	crystal: {
		cost: 300,
		rate: 1.5,
		name: 'Crystal',
	},
	nanostructure: {
		cost: 9000,
		rate: 16,
		name: 'Nanostructure',
	},
	microorganism: {
		cost: 251_000,
		rate: 100,
		name: 'Micro-organism',
	},
	rock: {
		cost: 8_808_080,
		rate: 4000,
		name: 'Rock',
	},
	planet: {
		cost: 450_200_000,
		rate: 35_000,
		name: 'Planet',
	},
	star: {
		cost: 9_850_000_000,
		rate: 245_000,
		name: 'Star',
	},
	neutronStar: {
		cost: 77_700_000_000,
		rate: 1_700_000,
		name: 'Neutron Star',
	},
	blackHole: {
		cost: 1_000_000_000_000,
		rate: 12_000_000,
		name: 'Black Hole',
	},
} as const;

export const BUILDING_TYPES = Object.keys(BUILDINGS) as BuildingType[];

export type BuildingType = keyof typeof BUILDINGS;
export type BuildingData = typeof BUILDINGS[BuildingType];
