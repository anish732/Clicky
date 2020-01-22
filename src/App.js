import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import Title from "./components/Title";
import Header from "./components/Header";

class App extends Component {
  state = {
    count: 0,
    friends,
    clickedImage: [],
    topScore: 0
  };

  //handleIncrement increase this.state.count by 1
  handleIncrement = id => {
    console.log(id);
    if (!this.state.clickedImage.includes(id)) {
      const oldArray = this.state.clickedImage;
      const newArray = oldArray.concat([id]);
      const shuffled = this.shuffle(this.state.friends);
      this.setState({
        count: this.state.count + 1,
        clickedImage: newArray,
        friends: shuffled,
        topScore: this.state.count + 1
      });
    } else {
      alert("You lost try again...");
      this.setState({
        count: 0,
        clickedImage: []
      });
    }
  };
  shuffle = a => {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
  };

  render() {
    console.log(this.state);
    return (
      <Wrapper>
        <Title count={this.state.count} topScore={this.state.topScore} />
        <Header></Header>
        {this.state.friends.map(friend => (
          <FriendCard
            id={friend.id}
            key={friend.id}
            image={friend.image}
            handleIncrement={this.handleIncrement}
          />
        ))}
        ,
      </Wrapper>
    );
  }
}

export default App;
