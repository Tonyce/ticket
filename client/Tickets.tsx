import * as React from 'react';
import { connect } from 'react-redux';

import { socket, initTicket, changeTicket, chooseTicket, unChooseTicket} from './actions';


export class Tickets extends React.Component<any, any> {
    socket = socket
    
    componentWillMount() {
        this.socket.on('connect',  () => {
            socket.emit('initTicket');
            socket.on('initTicket', (data: any) => {
                this.props.initTicket(data)
            })
            socket.on('changeTicket', (data: any) => {
                this.props.changeTicket(data)
            })
        });
    }
    chooseTicket(e: Event, x: number, y: number) {
        // console.log(x, y)
        if ((e.target as HTMLInputElement).checked === true) {
            this.props.chooseTicket(x, y)
        }else {
            this.props.unChooseTicket(x, y)
        }
        
    }
    render() {
        // console.log(this.props.tickets)
        let tickets = this.props.tickets
        return (
            <div>
                {tickets.map((datas: any, x: number) => {
                    return <div>
                        {datas.map((data: any, y: number) => {
                            return <input type='checkbox' checked= {data === 1 ? true:false} 
                                    onChange={(e: Event) => this.chooseTicket(e, x, y)}/>
                        })}
                    </div>
                })}
            </div>
        )
    }
}

const mapStateToProps = (state: any) => ({ 
    tickets: state.tickets
})


export default connect(
    mapStateToProps,
    { initTicket, changeTicket, chooseTicket, unChooseTicket}
)(Tickets)