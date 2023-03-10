import {expect, test} from 'vitest'
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
    const startAt = new Date()
    const endAt = new Date()

    startAt.setDate(startAt.getDate() + 2);
    endAt.setDate(endAt.getDate() + 1)

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

    endAt.setDate(startAt.getDate() - 1)
    endAt.setDate(endAt.getDate() + 3)
    expect(()=>{
        return new Scheduling({
            costumer: 'andre',
            startAt,
            endAt,
        })
    }).toThrow()
});