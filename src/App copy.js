// import React,{Component} from "react";
// import PropTypes from "prop-types"


// function Food({name, rating}) {
//   return <h3>I like {name} {rating}/5.0</h3>;
// }


// const foodIlike = [
//   {id:"1", name:'라면', rating:4.0}, 
//   {id:"2", name:'족발', rating:3.7}, 
//   {id:"3", name:'보쌈', rating:5.0},
//   {id:"4", name:'치킨', rating:5.0}];

// Food.propTypes={
//   name:PropTypes.string.isRequired,
//   rating:PropTypes.number.isRequired
// }

// JSX와 props 로 가능한 결과.

// function renderFood(dish){
//   return <Food key={dish.id} name={dish.name} rating={dish.rating} />;
// }

//react 는 Class component의 render 메소드를 자동적으로 그려낸다.
//Class component 가 state를 handling 할 수 있으므로, Class Copmonent 를 사용한다.


// class App extends React.Component {
//   constructor(props){
//     console.log("hello");
//     super(props);
//   }
//   state = {
//     //변경될 수 있는 Data.
//     count:0,
//   }
//   plusCount =() => {
//     this.setState(current => ({count : current.count + 1}));
//   }
//   miusCount = () => {
//     this.setState(current => ({count : current.count - 1}));
//   }
//   componentDidMount(){
//     console.log("component rendered");
//   }
//   componentDidUpdate(){
//     console.log("I just updated");
//   }

//   render(){
//     console.log("rendering ~ ");
//     return (
//     <div>
//       <h1>The number is : {this.state.count}</h1>
//       <button onClick={this.plusCount}>Plus</button>
//       <button onClick={this.miusCount}>Minus</button>
//     </div>
//     );
//   }
// }

// export default App;
