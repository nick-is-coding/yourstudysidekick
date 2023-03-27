import React from 'react';
import { withRouter } from "react-router-dom";

const GoBack = () => {

  const goBack = () => {
    window.location.href = '/login';
  };

  return (
    <>
      <button className="goback-button" onClick={goBack}><strong>CLICK TO RE-PICK YOUR SIDEKICK</strong></button>
    </>
  );
};

export default withRouter(GoBack);