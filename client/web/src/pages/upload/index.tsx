import PreviewImage from '@/components/PreviewImage';
import { generateReactHelpers } from '@uploadthing/react';
import { ChangeEvent, FormEvent, useState } from 'react';
import type { OurFileRouter } from '../api/server/uploadthing';
import SideBar from '@/components/Sidebar';
const { useUploadThing } = generateReactHelpers<OurFileRouter>();

type Props = {};

const Upload = (props: Props) => {
  const { getRootProps, getInputProps, isDragActive, files, startUpload } =
    useUploadThing('imageUploader');
  const [fileToUpload, setFileToUpload] = useState<string>('');
  const [previewImage, setPreviewImage] = useState(
    'https://datawow.s3.amazonaws.com/blog/43/image_1/facial-recognition-connected-real-estate.png'
  );
  const [image, setImage] = useState('');
  const [imageId, setImageId] = useState('');

  // 1) Get image data from input
  const onGetFiles = (e: ChangeEvent<HTMLFormElement>) => {
    const reader = new FileReader();

    if (!e.target.files) return;

    reader.onload = (onLoadEvent: any) => {
      setFileToUpload(onLoadEvent.target.result);
    };

    reader.readAsDataURL(e.target.files[0]);
    // setFileToUpload(e.target.files[0]);
    setPreviewImage(URL.createObjectURL(e.target.files[0]));
  };

  //2) Upload image to CLOUDINARY databse, then save img url to MongoDB database
  const handleOnSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    //2.1)
    let formData = new FormData();
    setImageId(imageId);

    formData.append('file', fileToUpload!);
    formData.append('upload_preset', 'car_images'); // car_images folder, inside of it image will be there with unique id

    // upload image using cloudinary UNSIGNED method
    const data = await fetch(
      'https://api.cloudinary.com/v1_1/dsqtfkqa1/image/upload',
      {
        method: 'POST',
        body: formData,
      }
    ).then((r) => r.json());

    //https://res.cloudinary.com/dsqtfkqa1/image/upload/v1683090996/car-images/fxgdz8ex2mhgwe7vylfe.avif
    setImage(data.secure_url);

    //2.2) Save image URL to mongoDb
    //2.3) Save car informations to mongoDb
    //2.4) Get user data from mongoDb for checking if user is admin or not!!!!!
  };

  const [toggle, setToggle] = useState(1);

  const toggleTab = (index: number) => {
    setToggle(index);
  };

  return (
    <>
      <div className='mx-auto w-4/5 h-[700px] bg-white flex flex-col items-center  '>
        <div className='lg:w-1/3 md:w-1/3 w-2/3 mx-auto h-[40px] bg-[#393939]  rounded-xl flex justify-center items-center'>
          <div className='w-5/6 mx-auto h-[35px] flex flex-row items-center px-[3xl] rounded-xl overflow-hidden shadow-2xl shadow-900/20 transition bg-[#393939]'>
            <div
              className={
                toggle === 1
                  ? 'tabs active-tabs bg-[#ff2f01] w-1/2 h-full rounded-xl flex items-center justify-center '
                  : 'tabs w-1/2 flex items-center justify-center'
              }
              onClick={() => toggleTab(1)}
            >
              <span className='text-white text-center text-xs lg:text-base md:text-sm'>
                {' '}
                My Rentals
              </span>
            </div>
            <div
              className={
                toggle === 2
                  ? 'tabs active-tabs bg-[#ff2f01] w-1/2 h-full rounded-xl flex items-center justify-center'
                  : 'tabs w-1/2 flex items-center justify-center'
              }
              onClick={() => toggleTab(2)}
            >
              <span className='text-white text-xs lg:text-base md:text-sm'>
                {' '}
                My profile
              </span>
            </div>
          </div>
        </div>
        <div className='mt-6 relative rounded-3xl bg-white w-full h-[300px] flex justify-center'>
          <div
            className={
              toggle === 1
                ? ' w-full h-[650px] absolute visible top-0  opacity-1 p-6 transition duration-300 bg-white'
                : ' invisible opacity-0'
            }
          >
            {/* <MyRental data={data} /> */}
          </div>
          <div
            className={
              toggle === 2
                ? 'w-full h-[650px] absolute visible top-0  opacity-1 p-8 transition duration-300 bg-white'
                : ' invisible opacity-0 '
            }
          >
            {/* <MyProfile data={data} /> */}
          </div>
        </div>
      </div>

      <form method='post' onChange={onGetFiles} onSubmit={handleOnSubmit}>
        <input
          type='file'
          className='file-input file-input-bordered file-input-accent w-full max-w-xs '
          max='6'
          required
        />
        <button className='btn btn-accent'>Upload image</button>
      </form>
      {/* <PreviewImage previewImage={previewImage} /> */}
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <div className='h-[200px]'>
          {files.length > 0 && (
            <button
              onClick={() =>
                startUpload().then((image) => console.log('IMAGE URL', image))
              }
            >
              Upload {files.length} files
            </button>
          )}
        </div>
        <button className='btn'> Drop files here!</button>
      </div>
    </>
  );
};
export default Upload;

//https://www.youtube.com/watch?v=7lhUsK-FxYI&t=259s
