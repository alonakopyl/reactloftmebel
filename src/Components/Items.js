import React, { Component } from 'react'
import Item from './Item'

export class Items extends Component {
  render() {
    return (
        <main>
            <div className='items-wrapper'>
                {this.props.items.map(el=>(<Item item={el}
                add={this.props.add}/>))}
            </div>
        </main>
    )
  }
}

export default Items
