
import { TICKET_INIT, TICKET_CHANGE } from './constants';

import * as io from 'socket.io-client';
export const socket = io.connect('http://localhost:8080');

const initTickets:number[][] = new Array()

function _change( tickets: number[][]) {
    return {
        type: TICKET_CHANGE,
        tickets: tickets
    }
}

export function initTicket(tickets: number[][]) {
    return (dispatch: any, getState: any) => {
            dispatch(_change(tickets))
        }
}

export function changeTicket(tickets: number[][]) {
    return (dispatch: any, getState: any) => {
            dispatch(_change(tickets))
        }
}

export function chooseTicket(x: number, y: number ) {
    return (dispatch: any, getState: any) => {
            let oldTicket = getState().tickets
            let newTicket = [...oldTicket]
            newTicket[x][y] = 1
            dispatch(_change(newTicket))
            socket.emit('changeTicket', newTicket)
        }
}

export function unChooseTicket(x: number, y: number ){
    return (dispatch: any, getState: any) => {
            let oldTicket = getState().tickets
            let newTicket = [...oldTicket]
            newTicket[x][y] = 0
            dispatch(_change(newTicket))
            socket.emit('changeTicket', newTicket)
        }
}