import React from "react";
import { Button, Card } from "react-bootstrap";
import PropTypes from 'prop-types'; 

const Profile = ({ data, children, handleName }) => {
  console.log(handleName);

  const myStyle = {
    textAlign: "center",
    color: "rgb(9, 30, 90)",
    textTransform: "uppercase",
    fontFamily: "Roboto Condensed",
    margin: "auto",
  };

  return (
    <div className="profilePhoto">
      <Card>
        <img src={children} alt="" />
        <Card.Body>
          <Card.Title> 
            {data.fullName}
          </Card.Title>
            <p style={myStyle}>{data.bio}</p>
            <p style={{color:"red", fontSize: "1.5em" }}>{data.profession}</p>
          <button onClick={() => handleName(data.fullName)}>Info</button>
        </Card.Body>
      </Card> 
    </div>
  );
};
Profile.propTypes = {
  data: PropTypes.object
};
Profile.defaultProps = {
  data:{
    fullName :" unamed",
    bio :" none",
    profession :" unset",
  },
  children:""
}



export default Profile;
