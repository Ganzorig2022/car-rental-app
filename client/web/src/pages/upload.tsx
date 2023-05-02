import React from 'react';
import { generateReactHelpers } from '@uploadthing/react';
import type { OurFileRouter } from '../../server/uploadthing';
const { useUploadThing } = generateReactHelpers<OurFileRouter>();

type Props = {};

const Upload = (props: Props) => {
  const { getRootProps, getInputProps, isDragActive, files, startUpload } =
    useUploadThing('imageUploader');

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <div className='h-[200px]'>
        {files.length > 0 && (
          <button
            onClick={() =>
              startUpload().then((e) => console.log('IMAGE URL', e))
            }
          >
            Upload {files.length} files
          </button>
        )}
      </div>
      <button className='btn'> Drop files here!</button>
    </div>
  );
};
export default Upload;
