import React from "react";

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = { UserInfo: { name: "dummy", location: "default" } };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/SilambarasanBabu");
    const json = await data.json();
    this.setState({
      UserInfo: json,
    });
  }

  render() {
    const { name, location, avatar_url } = this.state.UserInfo;

    return (
      <div className="class-user">
        <img src={avatar_url} />
        <h1>Name: {name}</h1>
        <h3>Location: {location}</h3>
      </div>
    );
  }
}

export default User;
