import {profile} from '../../profiler/decorator';
import {Task} from '../Task';


export type transferAllTargetType = StructureStorage | StructureTerminal | StructureContainer;

export const transferAllTaskName = 'transferAll';

@profile
export class TaskTransferAll extends Task {

	// @ts-ignore

	declare target: transferAllTargetType;
	data: {
		skipEnergy?: boolean;
	};

	constructor(target: transferAllTargetType, skipEnergy = false, options = {} as TaskOptions) {
		super(transferAllTaskName, target, options);
		this.data.skipEnergy = skipEnergy;
	}

	isValidTask() {
		for (const resourceType in this.creep.store) {
			if (this.data.skipEnergy && resourceType == RESOURCE_ENERGY) {
				continue;
			}
			const amountInCarry = this.creep.store[<ResourceConstant>resourceType] || 0;
			if (amountInCarry > 0) {
				return true;
			}
		}
		return false;
	}

	isValidTarget() {
		return this.target.store.getUsedCapacity() < this.target.storeCapacity;
	}

	work() {
		for (const resourceType in this.creep.store) {
			if (this.data.skipEnergy && resourceType == RESOURCE_ENERGY) {
				continue;
			}
			const amountInCarry = this.creep.store[<ResourceConstant>resourceType] || 0;
			if (amountInCarry > 0) {
				return this.creep.transfer(this.target, <ResourceConstant>resourceType);
			}
		}
		return -1;
	}
}
