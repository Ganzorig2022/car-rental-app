import { geocodeCenter } from '@/atoms/geocodeCenter';
import ReactMapGL, { Marker } from 'react-map-gl';
import { useRecoilState } from 'recoil';
import { closeModalState } from '../../atoms/closeModal';
import { loggedInState } from '../../atoms/loginAtom';
import { MapPinIcon } from '@heroicons/react/24/solid';
import 'mapbox-gl/dist/mapbox-gl.css';

type Props = {};

const SignIn = (props: Props) => {
  const [closeModal, setCloseModal] = useRecoilState(closeModalState);
  const [loggedIn, setLoggedIn] = useRecoilState(loggedInState);
  const URL = process.env.NEXT_PUBLIC_MAPBOX_STYLE_URL!;
  const token = process.env.NEXT_PUBLIC_MAPBOX_KEY_SEARCK_ACCESS_TOKEN!;
  const [geoCenter, setGeoCenter] = useRecoilState(geocodeCenter); //[106.9177016, 47.9184676]

  return (
    <>
      <input type='checkbox' id='map' className='modal-toggle' />
      <div className='modal modal-middle'>
        <div className='modal-box max-h-screen !scrollbar-thin !scrollbar-track-transparent !scrollbar-thumb-transparent'>
          <label
            htmlFor='map'
            className='btn-sm btn-circle btn absolute right-2 top-2 z-10'
            onClick={() => setCloseModal(false)}
          >
            ✕
          </label>
          <div className='h-[500px]'>
            {geoCenter.length > 0 && (
              <ReactMapGL
                initialViewState={{
                  longitude: geoCenter[0],
                  latitude: geoCenter[1],
                  zoom: 12,
                }}
                style={{ width: '100%', height: '100%' }}
                //"https://studio.mapbox.com/styles/ganzorig2022" mapbox site-aas custom style-nii url-aa huulj tawina.
                mapStyle={URL}
                mapboxAccessToken={token}
              >
                <Marker
                  longitude={geoCenter[0]}
                  latitude={geoCenter[1]}
                  anchor='top'
                >
                  <MapPinIcon className='h-8 text-red-primary animate-bounce ' />
                </Marker>
              </ReactMapGL>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
