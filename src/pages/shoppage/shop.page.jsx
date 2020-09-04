import React from 'react'
import SHOP_DATA from '../../shop.data'

export class ShopPage extends React.Component {
  constructor(props){
    super(props)
    
    this.state = {
      collection: SHOP_DATA
    }

  }

  render() {
    {console.log(this.state.collection)}
    return (
    <div>
      hello world
      {this.state.collection.map((collect) => <ul key={collect.id}>{collect.items.map(item => <li key={item.id}>{item.name}</li> )}</ul>)}
    </div>

    )
  }
}
