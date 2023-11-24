import React from 'react';
import useFetch from '../../hooks/useFetch';

export default function App() {
  const { loading, data, error } = useFetch('http://localhost:1337/api/galleries?populate=*');
  console.log(data);

  return (
    <div>
      <p className='text-black font-medium text-5xl font-display text-center py-5 '>Gallery</p>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && data.data ? (
        <div className='grid grid-cols-4 gap-10 w-fit h-fit px-10 my-5'>
          {data.data.map((gallery) => (
            <div key={gallery.id}>
              {gallery.attributes.media && gallery.attributes.media.data && gallery.attributes.media.data.length > 0 && (
                <div>
                  {gallery.attributes.media.data.map((media) => (
                <img key={media.id} src={`http://localhost:1337${media.attributes.url}`} alt={`Gallery ${gallery.id}`} />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
