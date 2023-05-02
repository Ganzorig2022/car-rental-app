import React, { useState } from 'react';
import { generateReactHelpers } from '@uploadthing/react';
import type { OurFileRouter } from '../api/server/uploadthing';
import PreviewImage from '@/components/PreviewImage';
const { useUploadThing } = generateReactHelpers<OurFileRouter>();
import { buildImageUrl } from 'cloudinary-build-url';

type Props = {};

const Upload = (props: Props) => {
  const { getRootProps, getInputProps, isDragActive, files, startUpload } =
    useUploadThing('imageUploader');
  const [fileToUpload, setFileToUpload] = useState<File | null>(null);
  const [previewImage, setPreviewImage] = useState(
    'https://datawow.s3.amazonaws.com/blog/43/image_1/facial-recognition-connected-real-estate.png'
  );

  const imgURL = buildImageUrl('/car-images/id', {
    cloud: { cloudName: process.env.CLOUDINARY_CLOUD_NAME },
  });

  console.log('first', imgURL);

  // 1) Get image data from input
  const onGetFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    setFileToUpload(e.target.files[0]);
    setPreviewImage(URL.createObjectURL(e.target.files[0]));
  };

  const onSubmit = async () => {
    let formData = new FormData();

    formData.append('image', fileToUpload!);
    formData.append('folder', 'car-images');
    formData.append('public_id', 'id');

    try {
      const res = await fetch('/api/cloudinary', {
        method: 'POST',
        body: formData,
        headers: { 'Content-Key': 'application/json' },
      });
      console.log('RESPONSE from API', await res.json());
    } catch (error) {
      console.log('ERROR');
    }
  };

  return (
    <>
      <input
        type='file'
        className='file-input file-input-bordered file-input-accent w-full max-w-xs '
        onChange={onGetFiles}
        max='6'
        accept='image/*'
        // multiple
        required
      />
      <PreviewImage previewImage={previewImage} />
      <button className='btn btn-accent' onClick={onSubmit}>
        Upload image
      </button>
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

//https://www.youtube.com/watch?v=Hy6a1hO5BLM&t=912s
