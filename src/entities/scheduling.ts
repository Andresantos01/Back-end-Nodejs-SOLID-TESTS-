export interface SchedulingProps{
    costumer: string;
    startAt: Date;
    endAt: Date;
}

export class Scheduling {
    private props: SchedulingProps
    
    get costumer(){
        return this.props.costumer
    }

    get startAt(){
        return this.props.startAt
    }
   
    get endAt(){
        return this.props.endAt
    }
    constructor(props: SchedulingProps){
        const {endAt , startAt} = props
        if(endAt <= startAt){
            throw new Error("Invalid end date");
        }
        this.props = props
    }
}