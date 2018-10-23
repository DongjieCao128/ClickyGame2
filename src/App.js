import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    currentFriends: friends,
    score: 0,
    highScore: 0
  };



  randomize = (id, clicked) => {
    //you win =>
    if (clicked === "false") {
      let mixedUpFriendsJson = this.state.currentFriends;
      console.log(mixedUpFriendsJson);

      for (let i = mixedUpFriendsJson.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [mixedUpFriendsJson[i], mixedUpFriendsJson[j]] = [mixedUpFriendsJson[j], mixedUpFriendsJson[i]];
      }

      mixedUpFriendsJson.forEach(item => {
        if (item.id === id) {
          item.clicked = "true";
        }
      })

      // var newScore;
      if (this.state.score +1 > this.state.highScore) {
        // newScore = this.state.score;
        // console.log("hi", newScore);

        this.setState({highScore: this.state.score + 1})
      }
      // else (
      //   newScore = this.state.highScore
      // )



      this.setState({
        currentFriends: mixedUpFriendsJson,
        score: this.state.score + 1
      });

    }
    //you lose =>
    else {

      let array2 = [];
      this.state.currentFriends.forEach(item => {
        item.clicked = "false";
        array2.push(item);
      })

      let mixedUpFriendsJson2 = array2;
      console.log(mixedUpFriendsJson2);

      for (let i = mixedUpFriendsJson2.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [mixedUpFriendsJson2[i], mixedUpFriendsJson2[j]] = [mixedUpFriendsJson2[j], mixedUpFriendsJson2[i]];
      }
      //state of current friends is changed to mixedUpFriendsJson2 (jumbled up and reset version of friends.json)
      this.setState({ currentFriends: mixedUpFriendsJson2, score: 0})
    }


  }

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Friends List</Title>
        <h1>Score: {this.state.score}</h1>
        <h1>Highscore: {this.state.highScore}</h1>
        {this.state.currentFriends.map(item => (
          <FriendCard
            id={item.id}
            key={item.id}
            name={item.name}
            image={item.image}
            randomize={this.randomize}
            clicked={item.clicked}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
