import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends
  };

friendClick = e =>{
    this.shuffleCharacters()
}


  shuffleCharacters = () => {
    this.setState(this.state.friends = this.shuffleArray(this.state.friends))
  }
  shuffleArray = (a) => {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
  }


  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
     <Title/>
      <Wrapper>
        {this.state.friends.map(friend => (
          <FriendCard
            friendClick={this.friendClick}
            id={friend.id}
            key={friend.id}
            image={friend.image}
          />
        ))}
      </Wrapper>
      </div>
    );
  }
}

export default App;
