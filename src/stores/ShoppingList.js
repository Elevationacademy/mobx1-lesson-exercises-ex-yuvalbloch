import { observable, action } from 'mobx'
import { Item } from './Item'


export class ShoppingList {
    // your code here
    @observable list = [];
    @observable length;
    @action checkItem = (name) => {
        let item = this.list.find(i => i.name === name)
        item.completed = !item.completed
    }
@action addItem = (itemName) => {
        const item =  new Item(itemName)
       this.list.push(item)
    }
@action editItem = (name) => {
        let location = prompt("Please enter new location", "Super sell");
        let item = this.list.find(i => i.name === name)
        item.location = location
    }
@action deleteItem = (name) => {
        let item = this.list.indexOf(name)
        this.list.splice(item-1 , 1)
    } 
}

