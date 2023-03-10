import { Scheduling } from "../entities/scheduling";
import { SchedulingRepository } from "../repositories/scheduling-repository";

interface CreateSchdulingRequest {
    costumer: string;
    startAt: Date;
    endAt: Date;
}
type CreateSchdulingResponse = Scheduling

export class CreateSchduling {

    constructor(
        private schedulerRepository: SchedulingRepository
    ){}

    async execute({
        costumer, 
        startAt, 
        endAt
    } : CreateSchdulingRequest) : Promise<CreateSchdulingResponse>{

        const overLappinSchedule = await this.schedulerRepository.findConflictingSchedulings(startAt, endAt)
        if(overLappinSchedule){
            throw new Error('Overlappin schedule')
        }

        const scheduling = new Scheduling({
            costumer,
            startAt,
            endAt
        })

        await this.schedulerRepository.create(scheduling)
        return scheduling
    }
}