export const TOGGLE_TIMER: string = 'TOGGLE_TIMER'

interface Actions{
    type: string,
}


export const toggleTimer = (): object =>({
    type: TOGGLE_TIMER as string,
} as Actions)


const timerStatusReducer = (timerStatus: string, action: Actions): any => {
    switch (action.type){
        case TOGGLE_TIMER:
            return !timerStatus;
        default: return timerStatus
    }

}


export default timerStatusReducer
