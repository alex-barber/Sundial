export const ADD_TEST: string = 'ADD_TEST'

interface Actions{
    type: string,
    name?: string
}


export const addTest = (name: string): object =>(
    console.log(name),{
    type: ADD_TEST as string,
    name: name as string
} as Actions)


const testReducer = (testState: string, action: Actions): any => {
    switch (action.type){
        case ADD_TEST:
            return action.name;
        default: return testState
    }

}


export default testReducer
