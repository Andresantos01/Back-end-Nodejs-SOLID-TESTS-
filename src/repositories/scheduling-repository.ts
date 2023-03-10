import { Scheduling } from "../entities/scheduling";

export interface SchedulingRepository {
    create (scheduling: Scheduling) : Promise<void>;
    findConflictingSchedulings (startAt : Date, endAt: Date) : Promise<Scheduling | null>;
}