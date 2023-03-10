import {expect, test} from 'vitest'
import { getFutureDate } from '../tests/utils/get-valid-date';
import { Scheduling } from './scheduling'

test('create an scheduling',  ()=> {
    const startAt = new Date()
    const endAt = new Date()

    startAt.setDate(startAt.getDate() + 1);
    endAt.setDate(endAt.getDate() + 2)

    const scheduling = new Scheduling({
        costumer: 'andre',
        startAt,
        endAt,
    })

    expect(scheduling).toBeInstanceOf(Scheduling)
    expect(scheduling.costumer).toEqual('andre')
});


test('cannot create an schedule with an invalid end date before startAt', ()=> {
    
    const startAt = getFutureDate('2022-02-24')
    const endAt = getFutureDate('2022-02-23')
    expect(()=>{
        return new Scheduling({
            costumer: 'andre',
            startAt,
            endAt,
        })
    }).toThrow()
});


test('cannot create an schedule with an invalid startAt before now', ()=> {
   
    const startAt = new Date()
    const endAt = new Date()
    
    startAt.setDate(startAt.getDate() - 1);
    endAt.setDate(endAt.getDate() + 3)
    expect(()=>{
        return new Scheduling({
            costumer: 'andre',
            startAt,
            endAt,
        })
    }).toThrow()
});