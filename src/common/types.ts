export enum FightResultType {
	WIN = 'win',
	LOSE = 'lose',
	DRAW = 'draw',
}

export interface IStats {
	hp: number;
	attack: number;
	defense: number;
	attackSpeed: number;
  income: number;
  maxHp?: number;
}

export enum TriggerType {
	LEVEL_UP = 'level-up',
	SHOP_START = 'shop-start',
	ACTIVE = 'active',
	FIGHT_START = 'fight-start',
	FIGHT_END = 'fight-end',
	ON_ATTACKED = 'on-attacked',
	ON_ATTACK = 'on-attack',
	ON_DAMAGE = 'on-damage',
  BEFORE_REFRESH = 'before-refresh',
  AFTER_REFRESH = 'after-refresh',
  SHOP_PASSIVE = 'shop-passive',
}
