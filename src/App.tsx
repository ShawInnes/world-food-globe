import Globe from 'react-globe.gl';

function App() {
  const gData = [
    {
      lat: 48.864716,
      lng: 2.3514,
      size: 0.1,
      color: 'green',
      label: 'The French Table',
    },
    {
      lat: 19.4326,
      lng: -99.1332,
      size: 0.1,
      color: 'red',
      label: 'Chockie Bakehouse',
    },
    {
      lat: -33.4489,
      lng: -70.6693,
      size: 0.1,
      color: 'red',
      label: 'Bite Me Cafe',
    },
  ];

  return (
    <>
      <Globe
        globeImageUrl="/earth-night.jpg"
        backgroundImageUrl="/night-sky.png"
        pointsData={gData}
        pointAltitude="size"
        pointColor="color"
        pointLabel="label"
        pointRadius={0.2}
        pointResolution={50}

        labelsData={gData}
        labelText="label"
        labelDotRadius={2}
        labelColor={() => 'rgba(255, 165, 0, 0.75)'}
        labelSize={2}
      />
    </>
  );
}

export default App;
