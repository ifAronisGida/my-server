import { Schema, type, ArraySchema } from '@colyseus/schema';
import { TalentBehaviors } from './TalentBehaviors';
import { TalentBehaviorContext } from './TalentBehaviorContext';

export class Talent extends Schema {
	@type('number') talentId: number;
	@type('string') name: string;
	@type('string') description: string;
	@type('number') tier: number;
	@type('number') activationRate: number;
	@type('string') image: string;
	@type(['string']) tags: ArraySchema<string>;

	executeBehavior(context: TalentBehaviorContext) {
		const behaviorKey = this.talentId as keyof typeof TalentBehaviors;
		const behavior = TalentBehaviors[behaviorKey];
		if (behavior) {
			const talentContext = { ...context, talent: this };
			behavior(talentContext);
		} else {
			throw new Error(`No behavior defined for talentId ${this.talentId}`);
		}
	}
}
