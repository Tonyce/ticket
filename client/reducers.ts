

import { TICKET_INIT, TICKET_CHANGE } from './constants';
interface IAction {
    type: string;
    tickets: number[][];
}

const initTickets: number[][] = []

export function tickets(state = initTickets, action: IAction): number[][]{
    if(action.type === TICKET_INIT) {
        return action.tickets 
    }else if(action.type === TICKET_CHANGE) {
        return action.tickets 
    }
    return state
}
