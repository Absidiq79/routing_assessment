// import React, { Component } from 'react';
// //import our service
// import JeopardyService from "../../services/jeopardyService";
// class Jeopardy extends Component {
//   //set our initial state and set up our service as this.client on this component
//   constructor(props){
//     super(props);
//     this.client = new JeopardyService();
//     this.state = {
//       data: {},
//       score: 0,
//       answer: ''
//     }
//   }
//   //get a new random question from the API and add it to the data object in state
//   getNewQuestion() {
//     return this.client.getQuestion().then(result => {
//       this.setState({
//         data: result.data[0]
//       })
//     })
//   }
//  handleChange = ()=> {
//      let score = this.state.score;
//      if (this.state.answer.toLowerCase () === his.state.data.answer.toLowerCase ()) {
//         score += this.state.data.value;
//      }else {
//         score -= this.state.data.value;  
//      }
//      this.setState({
//          score,
//          answer: ''
//      })
//      this.getNewQuestion()
//  }


//   handleChange = (event) => {
//     let data = {...this.state}
//     data[event.target.name] = event.target.value

//     this.setState(data);
//   }
//   //when the component mounts, get a the first question
//   componentDidMount() {
//     this.getNewQuestion();
//   }
//   //display the results on the screen
//   render() {
//       let question = this.state.data.question;
//       let category = this.state.data.question && this.state.data.category.title;
//       let pv = this.state.data.value;
//     return (
//       <div>
//         <div>
//           Question: {question}
//         </div>
//         <div>
//           Category: {category}
//         </div>
//         <div>
//           Point Value: {pv}
//         </div>
//         <div>
//           Users score:(this.state.score)
//           </div>
//           <div>
//       <input name="aanswer" type="text" value={this.state.answer} onChange={this.handleChange}/>
//       <button onClick={this.handleAnswer}>click me</button>
//       </div>
//       </div>
      
//     );
//   }
// }
// export default Jeopardy;