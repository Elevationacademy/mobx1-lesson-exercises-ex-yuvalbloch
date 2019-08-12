import React, { Component } from 'react';
import { observer } from 'mobx-react'

@observer
class Item extends Component {
    checkItem = (e) => {
        this.props.store.checkItem(e.target.value)
    }
      editItem = (e) => {
          this.props.store.editItem(e.target.name)
      }
      deleteItem = (e) => {
        this.props.store.deleteItem(e.target.name)
      }
    render() {
        return (
            <div className = {this.props.item.completed? "corect" : ""}>
                <input type="checkbox"  value={this.props.item.name} onClick={this.checkItem}/>
                {this.props.item.name +"  "}
                {this.props.item.location}
                <button  name = {this.props.item.name} onClick={this.editItem}> edit</button>
                <button  name = {this.props.item.name} onClick={this.deleteItem}>delete</button>
            </div>)
    }
}

export default Item