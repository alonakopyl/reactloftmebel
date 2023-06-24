import React, { Component } from 'react'
import Header from './Components/Header'
import Items from './Components/Items'
import Footer from './Components/Footer'

export class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      items:[
        {
          id: 1,
          img:'valencia-beige.svg',
          title:'Валенися Beige',
          subtitle:'Барные стулья',
          price: 2300
        },
        {
          id: 2,
          img:'tolix2-white-gloss.svg',
          title:'Толикс-2 White Gloss',
          subtitle:'Барные стулья',
          price: 4690
        },
        {
          id: 3,
          img:'dins-velvet-yellow.svg',
          title:'Динс Velvet Yellow',
          subtitle:'Диваны',
          price: 28490
        },
        {
          id: 4,
          img:'kusken-navy-blue.svg',
          title:'Кускен Navy Blue',
          subtitle:'Диваны',
          price: 20300
        },
        {
          id: 5,
          img:'sherona-barhat-grey.svg',
          title:'Шерона Barhat Grey',
          subtitle:'Двухспальные кровати',
          price: 21990
        },
        {
          id: 6,
          img:'avinion-1.svg',
          title:'Авиньон-1',
          subtitle:'Буфеты',
          price: 18990
        },
        {
          id: 7,
          img:'stella-dub-sonoma.svg',
          title:'Стелла Дуб Сонома',
          subtitle:'Комоды',
          price: 8990
        },
        {
          id: 8,
          img:'ravenna-1-light.svg',
          title:'Равенна-1 Light',
          subtitle:'Комоды',
          price: 14990
        }
      ],
      orders:[]
    }

    this.addToOrder = this.addToOrder.bind(this)
    this.removeFromOrder = this.removeFromOrder.bind(this)
  }


  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <Header orders={this.state.orders} off={this.removeFromOrder}/>
          <Items items={this.state.items}
          add={this.addToOrder}/>
          <Footer/>
        </div>
    </div>
    )
  }

  removeFromOrder(id){
    this.setState({orders:this.state.orders.filter(el=>el.id !== id)})
  }

  addToOrder(item){
    let newOrders = false;
    this.state.orders.forEach(el=>{
      if(el.id === item.id)
        newOrders = true
    })
      if(!newOrders)
      this.setState({orders:[...this.state.orders, item]})
  }

}

export default App
