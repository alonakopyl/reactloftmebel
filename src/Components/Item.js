import React, { Component } from 'react'

export class Item extends Component {
  render() {
    return (
      <div className='wrapper-item'>
        <div className='item'>
            <img src={"./img/" + this.props.item.img}/>
            <h2>{this.props.item.title}</h2>
            <p>{this.props.item.subtitle}</p>
            <b>{this.props.item.price}&#8381;</b>
            <button className='add-to-cart' 
            onClick={()=>this.props.add(this.props.item)}>В корзину</button>
        </div>        
      </div>
    )
  }
}

export default Item
