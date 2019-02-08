import React, { Component} from "react";
import "./TodoList.css";
import FlipMove from "react-flip-move";

class TodoItems extends Component {

    constructor(props) {
       super(props);
               
       this.createTasks = this.createTasks.bind(this);

    }

    delete(key) {
         console.log("key is:"  + key);
        this.props.delete(key);
    }

    createTasks(item) {

        return <li onClick = {() => this.delete(item.key)}
        
        key = {item.key}>{item.text}</li>
    }


    render() {
        var todoEntries = this.props.entries;
        var ListItems = todoEntries.map(this.createTasks);

        return (
      
               <ul className= "theList">
               <FlipMove duration={150} easing="ease-out">
                 {ListItems}

                </FlipMove>
        </ul>

        );
        

    }
}







export default TodoItems;