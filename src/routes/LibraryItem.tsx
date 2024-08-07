import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import IconButton from '@mui/material/IconButton';
import { ArrowBackIosNew } from '@mui/icons-material';

interface Poster {
  artist: string;
  title: string;
  isBackgroundImageSizeContain: boolean;
  _id: string;
  description: string;
  imageHeight: number;
  imageWidth: number;
  imageType: string;
  imageNameFull: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

const LibraryItem: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [poster, setPoster] = useState<Poster | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPoster = async () => {
      try {
        const response = await axios.get<Poster>(`http://192.168.86.66:3000/posters/${id}`);
        setPoster(response.data);
      } catch (err) {
        setError('Failed to fetch poster');
      } finally {
        setLoading(false);
      }
    };

    fetchPoster();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <IconButton aria-label="back">
        <ArrowBackIosNew />
      </IconButton>
      {poster ? (
        <div>
          <h1>{poster.title}</h1>
          <p>Artist: {poster.artist}</p>
          <p>Description: {poster.description}</p>
          <p>Image Size: {poster.imageWidth}x{poster.imageHeight}</p>
          <p>Created At: {new Date(poster.createdAt).toLocaleString()}</p>
          <p>Updated At: {new Date(poster.updatedAt).toLocaleString()}</p>
          <img
            src={`http://192.168.86.66:3000/${poster.imageNameFull}`}
            alt={poster.title}
            style={{ maxWidth: '100%' }}
          />
        </div>
      ) : (
        <div>No poster found</div>
      )}
    </div>
  );
};

export default LibraryItem;
