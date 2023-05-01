import ReactMapGL from 'react-map-gl';
import { useRecoilState } from 'recoil';
import { closeModalState } from '../../atoms/closeModal';
import { loggedInState } from '../../atoms/loginAtom';

type Props = {};

const SignIn = (props: Props) => {
  const [closeModal, setCloseModal] = useRecoilState(closeModalState);
  const [loggedIn, setLoggedIn] = useRecoilState(loggedInState);
  const URL = process.env.NEXT_PUBLIC_MAPBOX_STYLE_URL!;
  const token = process.env.NEXT_PUBLIC_MAPBOX_KEY_SEARCK_ACCESS_TOKEN!;

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
            <ReactMapGL
              initialViewState={{
                longitude: 106.91,
                latitude: 47.9,
                zoom: 12,
              }}
              style={{ width: '100%', height: '100%' }}
              //"https://studio.mapbox.com/styles/ganzorig2022" mapbox site-aas custom style-nii url-aa huulj tawina.
              mapStyle={URL}
              mapboxAccessToken={token}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
