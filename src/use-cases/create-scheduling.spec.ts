import {describe, expect, it} from 'vitest'
import { Scheduling } from '../entities/scheduling';
import { getFutureDate } from '../tests/utils/get-valid-date';
import { CreateSchduling } from './create-scheduling'
import { InMemorySchedulingRepository } from '../in-memory/in-memory-scheduling-repository';
describe('create scheduling', () => {
    it('should create a schedule',()=>{

        const startAt = getFutureDate('2022-02-24')
        const endAt = getFutureDate('2022-02-26')

        const schedulerRepository = new InMemorySchedulingRepository()
        const createSchduling = new CreateSchduling(schedulerRepository);
        
      

        expect(createSchduling.execute({
            costumer: 'andre',
            startAt,
            endAt
        })).resolves.toBeInstanceOf(Scheduling)
    })



    it('should not create a schedule with overLapping dates', async ()=>{
        const startAt = getFutureDate('2022-02-20')
        const endAt = getFutureDate('2022-02-26')

        const schedulerRepository = new InMemorySchedulingRepository()
        const createSchduling = new CreateSchduling(schedulerRepository);
        
       

        await createSchduling.execute({
            costumer: 'andre',
            startAt,
            endAt
        })
        expect(createSchduling.execute({
            costumer: 'andre',
            startAt : getFutureDate('2022-02-25'),
            endAt: getFutureDate('2022-02-28')
        })).rejects.toBeInstanceOf(Error)
    })
})