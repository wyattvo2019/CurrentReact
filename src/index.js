import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';


// import ShoppingList from './ShoppingList'


//====================
// The Tic Tac Toe Game
//=====================
//class Square extends React.Component {
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         value: null,
    //     };
    // }
    // render() {
    //   return (
    //     <button 
    //         className="square" 
    //         onClick={  () => this.props.onClick()  }
    //     >
    //       { this.props.value }
    //     </button>
    //   );
    // }
//}

// function Square(props){
//   return(
//     <button className="square"  onClick={props.onClick}>
//       {props.value}
//     </button>
//   );
// }
 

// class Board extends React.Component {
//     // constructor(props){
//     //   super(props);
//     //   this.state = {
//     //     squares: Array(9).fill(null),
//     //     xIsNext: true,
//     //   };
//     // }
    


//     renderSquare(i) {
//       return (
//         <Square 
//                   value={this.props.squares[i]}  
//                   onClick={ ()=>this.props.onClick(i) }
//         />
//       );
//     }
  
//     render() {
//       // const winner = calculateWinner(this.state.squares);
//       // let status;
//       // if(winner){
//       //   status = 'Winner is: '+ winner;
//       // }
//       // else{
//       //   status = 'Next player is:' + (this.state.xIsNext ? 'X' : 'O')
//       // }
//       //const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');  
//       return (
//         <div>
//           {/* <div className="status">{status}</div>  */}
//           <div className="board-row">
//             {this.renderSquare(0)}
//             {this.renderSquare(1)}
//             {this.renderSquare(2)}
//           </div>
//           <div className="board-row">
//             {this.renderSquare(3)}
//             {this.renderSquare(4)}
//             {this.renderSquare(5)}
//           </div>
//           <div className="board-row">
//             {this.renderSquare(6)}
//             {this.renderSquare(7)}
//             {this.renderSquare(8)}
//           </div>
//         </div>
//       );
//     }
//   }
  
// class Game extends React.Component {
//     constructor(props){
//       super(props);
//       this.state = {
//         history: [{
//           squares: Array(9).fill(null),
//         }],
//         xIsNext: true,
//         stepNumber: 0,
//       };
//     }
//     handleClick(i){
//       const history = this.state.history.slice(0,this.state.stepNumber +1);
//       const current = history[history.length - 1];
//       const squares = current.squares.slice();
//       //Ignoring a click if S.O won or a square had been clicked before
//       if(calculateWinner(squares) || squares[i]){
//         return;
//       }
//       squares[i] = this.state.xIsNext ? 'X' : 'O';
//       this.setState({
//         // squares: squares,
//         history: history.concat([{
//           squares: squares,
//         }]),
//         stepNumber: history.length,
//         xIsNext: !this.state.xIsNext,
//       });
//     } 

//     jumpTo(step){
//       this.setState({
//         stepNumber: step,
//         xIsNext: (step%2) === 0,
//       });
//     }
//     render() {
//       const history = this.state.history;
//       const current = history[this.state.stepNumber];
//       const winner = calculateWinner(current.squares);
//       const moves = history.map((step, move) => {
//         const desc = move ? 'Go to move #' + move : 'Goto game start' ;
//         return (
//           <li key={move}>
//             <button onClick={ ()=> this.jumpTo(move) }> {desc} </button>
//           </li>
//         );
//       });
//       let status;
//       if(winner){
//         status = 'Winner is: '+ winner;
//       }
//       else {
//         status = 'Nexplayer is:' + (this.state.xIsNext ? 'X' : 'O') ;
//       }

//       return(
//         <div className="game">
//           <div className="game-board">
//             <Board 
//               squares={current.squares}
//               onClick={(i)=>this.handleClick(i)}
//             />
//           </div>
//           <div className="game-info">
//             <div>{ status }</div>
//             <ol>{moves}</ol>
//           </div>
//         </div>
//       );
//     }
//   }
  
// ========================================
// function calculateWinner(squares){
//     const lines =[
//       [0,1,2],
//       [3,4,5],
//       [6,7,8],
//       [0,3,6],
//       [1,4,7],
//       [2,5,8],
//       [0,4,8],
//       [2,4,6],
//     ];
//     for(let i=0; i<lines.length;i++){
//       const [a,b,c] = lines[i];
//       if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
//         return squares[a];
//       }
//     }
//     return null;
//   }


//===================
// ReactDOM.render(
//     <Game />,
//     // <ShoppingList/>,
//     document.getElementById('root')
// );
 //====================
// Hello Name
 //=====================
// class HelloGuy extends Component{
//   render(){
//     return(
//        <div>Hello {this.props.name}</div>
//     );
//   }
// }   
// ReactDOM.render(< HelloGuy name="Wyatt" />,document.getElemantbyId('root')); 
//================================
// Plus/ Minus Game
// class Time extends React.Component{

//   constructor(props){
//     super(props);
//     this.state= {
//       counter: 0,
//     };
//   }

//   incrementTime(){
//     this.setState({
//       counter: this.state.counter + 1 ,
//     });
//   }

//   render(){
//     return <div>
//       <div>{this.state.counter}</div>
//       <button onClick={ 
//         () => {
//           this.setState({
//             counter: this.state.counter + 1 ,
//           })
//         } 
//       }> Pluss
//       </button>
//       <button 
//         onClick={ 
//           () => {
//             this.setState({
//               counter: this.state.counter - 1 ,
//             })
//           } 
//         }
//       > Minus
//       </button>
//     </div>;
//   }
// }
// ReactDOM.render(<Time/>,document.getElementById('root'));

//====================
//Plus/ Minus Game
//=======================
// class FancyButton extends React.Component{
//   render(){
//     return <button onClick={this.props.onClick}>
//       <i className={"fa" + this.props.icon}></i>
//       <span> {this.props.text}</span>
//      </button>;
//   }
// }
// class Time extends React.Component{
//   constructor(props){
//     super(props);
//     this.state ={
//       counter: 0,
//     }
//   }
//   render(){
//     return <div>
//       <div>
//         {this.state.counter}
//       </div>
//       <FancyButton text="Increment" icon="fa-arrow-circle-o-up" onClick={
//         ()=>{ 
//           this.setState ({counter: this.state.counter+1,})
//         }
//       }></FancyButton>
//       <FancyButton text="Minus" icon="fa-arrow-circle-o-up" onClick={
//         ()=>{ 
//           this.setState ({counter: this.state.counter-1,})
//         }
//       }></FancyButton>
//     </div>;
//   }
// }
// ReactDOM.render(<Time />,document.getElementById('root'));
//=====================
//TODO Application
//=========================================
//ticking clock example
//=========================
// function tick(){
//     const element = (
//         <div>
//             <h1>
//                 Good morning!
//             </h1>
//             <h2>
//                 It is {new Date().toLocaleTimeString()}.
//             </h2>
//         </div>
//     );
//     ReactDOM.render(element,document.getElementById('root'));
// }
// setInterval(tick,1000);  
//=========================
//Function and Component
//========================
// const name ="Funny";
// function Welcome(props){
//     return (<h1>Hello,  {props.name}</h1>);
// }
// ReactDOM.render(Welcome(name),document.getElementById('root'));
//=================
//Function & Component
//=======================
//
// class Welcome extends React.Component{
//     // constructor(props){
//     //     super(props);
//     //     this.props ={
//     //         name: 'Wyatt', 
//     //     } 
//     // }
//     render(){
//         return (<h1>Hello you,{this.props.name}</h1>);
//     }
// }
// ReactDOM.render(<Welcome name="Nodin"/>,document.getElementById('root'));
//==================
//
//=============================
// function Welcome(props){
//     return (<h1>Good Morning {props.name}</h1>);
// }
// const element = <Welcome name="Lysa" />;
// ReactDOM.render(element,document.getElementById('root'));
//=============================
//
//================================
// function Button(){
//     return(<button>Send a message</button>);
// }
// function Welcome(props){
//     return(
//         <div>
//             <h1>Hello {props.name}</h1>
//             <Button />
//         </div>
//     );
// }
// function App(){
//     return (
//         <div>
//             <Welcome name="sara" />
//             <Welcome name="Lysa"/>
//         </div>
//     );
// }
// ReactDOM.render(<App />,document.getElementById('root'));
//===============================
//Split Component
//================================
// function formatDate(date){
//     return date.toLocaleDateString();
// }
// const comment = {
//     date: new Date(),
//     text: "She is a good mentor",
//     author: {
//         name: "Bavelly",
//         avatarUrl:'https://placekitten.com/g/64/64',
//     }
// }
// function Avatar(props){
//     return(
//         <img 
//             className="Avatar" 
//             height="200px" 
//             src={props.user.avatarUrl} 
//             alt={props.user.name}
//         />
//     );
// }
// function Name(props){
//     return(
//         <div className="UserInfo-name">
//         {props.user.name}
//         </div>
//     );
// }
// function UserInfo(props){
//     return(
//         <div className="UserInfo">
//             <Avatar user={props.user} />
//             <Name user={props.user} />
//         </div>
//     );
// }
// function Text(props){
//     return(
//         <div className="Comment-text">
//             {props.text}
//         </div>
//     );
// }
// function Comment(props){
//     return(
//         <div className="Comment">
//             <div className="UserInfo">
//                 <UserInfo user={props.author}/>
//                 <Text text={props.text}/>
//                 <div className="Comment-date">
//                     {formatDate(props.date)}
//                 </div>
//             </div>
//         </div>
//     );
// }
// ReactDOM.render(<Comment date={comment.date} text={comment.text} author={comment.author} />,document.getElementById('root'));
//==============================================================
//Clock reusable
//==============================================================
// function Clock(props){
//     return(
//         <div>
//             <h1>Good night</h1>
//             <h2>It is {props.date.toLocaleTimeString()}</h2>
//         </div>
//     );
// }
// function tick(){
//     ReactDOM.render(
//         <Clock date={new Date()} />,
//         document.getElementById('root')
//     );
// }
// setInterval(tick,1000);
//======================
//Clock with Class Clock
//===========================================
// class Clock extends React.Component{
//     render(){
//         return(
//             <div>
//                 <h1>Hello</h1>
//                 <h2>It is {this.props.date.toLocaleTimeString()}</h2>
//             </div>
//         );
//     }
// }
// function tick(){
//     ReactDOM.render(<Clock date={new Date()}/>,document.getElementById('root'));
// }
// setInterval(tick,1000);
//===================================
//Clock with Sate
//=======================================
class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            date: new Date()
        };
    }
    componentDidMount(){
        this.timerID = setInterval(
            () => this.tick(), 1000
        );
    }
    componentWillUnmount(){
        clearInterval(this.timerID);
    }
    tick(){
        this.setState({
            date: new Date()
        });
    }
    render(){
        return(
            <div>
                <h1>Hello</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}</h2>
            </div>
        );
    }
}
ReactDOM.render(<Clock/>,document.getElementById('root'));
