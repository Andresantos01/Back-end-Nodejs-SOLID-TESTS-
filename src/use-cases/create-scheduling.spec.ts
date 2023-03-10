import {describe, expect, it} from 'vitest'
import { Scheduling } from '../entities/scheduling';
import { CreateSchduling } from './create-scheduling'

describe('create scheduling', () => {
    it('should create a schedule',()=>{
        const createSchduling = new CreateSchduling();
        const startAt = new Date()
        const endAt = new Date()
        
        startAt.setDate(startAt.getDate() + 1);
        endAt.setDate(endAt.getDate() + 2)

        expect(createSchduling.execute({
            costumer: 'andre',
            startAt,
            endAt
        })).resolves.toBeInstanceOf(Scheduling)
    })
})