import { Scheduling } from "../entities/scheduling";

interface CreateSchdulingRequest {
    costumer: string;
    startAt: Date;
    endAt: Date;
}
type CreateSchdulingResponse = Scheduling

export class CreateSchduling {
    async execute({
        costumer, 
        startAt, 
        endAt
    } : CreateSchdulingRequest) : Promise<CreateSchdulingResponse>{
        const scheduling = new Scheduling({
            costumer,
            startAt,
            endAt
        })
        return scheduling
    }
}