import React from 'react';

const ProfilePage = (props) => {
  console.log(props);
  return (
    <p>profile page for user: {props.match.params.id}</p>
  );
};

export default ProfilePage;