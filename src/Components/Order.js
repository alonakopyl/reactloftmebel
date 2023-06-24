import React, { Component } from 'react';
import { MdDelete } from 'react-icons/md'

export class Order extends Component {
  constructor(props){
    super(props)
    this.state = {
      count: 1,
      amount: 0
    }
    
    }
  
  render() {
    let amountItem = this.props.item.price * this.state.count;
    
    return (
      <div className='item-in-orders'>
        <h2>{this.props.item.title}</h2>
        <b>Цена: {this.props.item.price}&#8381;</b>
        <b>Общая сумма за товар: {amountItem}</b>
        <div className='order-button-wrapper'>
        <button className='order-button' onClick={()=>this.setState({count: this.state.count+1})}>+</button>
        <b>Количество: {this.state.count}</b>
        <button className='order-button' onClick={()=>this.state.count>1 ? this.setState({count:this.state.count-1}) : this.props.off(this.props.item.id)}>-</button>
        </div>
        <MdDelete className='del-icon' size={20}
        onClick={()=>this.props.off(this.props.item.id)}
        />
        
      </div>
    )
  }
}

export default Order
