import { areIntervalsOverlapping } from 'date-fns'
import { Scheduling } from "../entities/scheduling";
import { SchedulingRepository } from "../repositories/scheduling-repository";

export class InMemorySchedulingRepository implements SchedulingRepository {

    public items: Scheduling[] = []

    async create(scheduling: Scheduling): Promise<void> {
        this.items.push(scheduling)
    }

    async findConflictingSchedulings(startAt: Date, endAt: Date): Promise<Scheduling | null> {
        const overlappingSchedulings = this.items.find(Schedule => {
            return areIntervalsOverlapping(
                {start: startAt,end: endAt},
                {start: Schedule.startAt, end: Schedule.endAt},
                {inclusive: true}
            )
        })

        if(!overlappingSchedulings){
            return null
        }
        return overlappingSchedulings
    }
}