import React from "react";
import ReactMapGL from "react-map-gl";

//https://github.com/visgl/react-map-gl
const Map = () => {
  return (
    <ReactMapGL
      initialViewState={{
        longitude: 106.91,
        latitude: 47.9,
        zoom: 11,
      }}
      style={{ width: "100%", height: "100%" }}
      mapStyle="mapbox://styles/ganzorig2022/clb9abvrx006714s3jvojleoc" //"https://studio.mapbox.com/styles/ganzorig2022" mapbox site-aas custom style-nii url-aa huulj tawina.
      mapboxAccessToken={process.env.MAPBOX_KEY} //vercel env
    />
  );
};

export default Map;
