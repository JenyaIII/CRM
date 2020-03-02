import React, { Map, GoogleApiWrapper } from "google-maps-react";

const Maps = () => {
  return (
    <Map
      google={this.props.google}
      zoom={8}
      initialCenter={{ lat: 47.444, lng: -122.176 }}
    />
  );
};

export default GoogleApiWrapper({
  apiKey: "crmproject-262123"
});
