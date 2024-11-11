export const BUILDINGS = {
	molecule: {
		cost: 20,
		rate: 0.1,
		name: 'Molecule',
	},
	crystal: {
		cost: 100,
		rate: 2,
		name: 'Crystal',
	},
	nanostructure: {
		cost: 1000,
		rate: 8,
		name: 'Nanostructure',
	},
	microorganism: {
		cost: 10_000,
		rate: 47,
		name: 'Micro-organism',
	},
	rock: {
		cost: 100_000,
		rate: 260,
		name: 'Rock',
	},
	planet: {
		cost: 1_000_000,
		rate: 1400,
		name: 'Planet',
	},
	star: {
		cost: 10_000_000,
		rate: 7800,
		name: 'Star',
	},
	neutronStar: {
		cost: 100_000_000,
		rate: 44_000,
		name: 'Neutron Star',
	},
	blackHole: {
		cost: 1_000_000_000,
		rate: 260_000,
		name: 'Black Hole',
	},
} as const;

export const BUILDING_TYPES = Object.keys(BUILDINGS) as BuildingType[];

export type BuildingType = keyof typeof BUILDINGS;
export type BuildingData = typeof BUILDINGS[BuildingType];
