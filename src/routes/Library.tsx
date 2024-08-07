import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Library.css';
import { MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';

// Define the type for a poster
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

// Define the type for the response from the API
interface PostersResponse {
  posters: Poster[];
}

const Library: React.FC = () => {
  const [posters, setPosters] = useState<Poster[]>([]);

  useEffect(() => {
    axios.get<PostersResponse>('http://192.168.86.66:3000/posters')
      .then(response => {
        setPosters(response.data.posters);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  // Event handler for when a poster is clicked
  // const handlePosterClick = (event: MouseEvent) => {
  //   const id = event.currentTarget.getAttribute('key');
  //   console.log(event.currentTarget);
  // }

  const navigate = useNavigate();

  return (
    <div>
      <h1>Your Library</h1>
      <div className="grid-container">
        {posters.map(poster => (
          <div
            className="grid-item"
            key={poster._id}
            style={{ backgroundImage: `url(http://192.168.86.66:3000/${poster.imageNameFull})` }}
            onClick={() => navigate(`/admin/library/${poster._id}`)}
          />
        ))}
      </div>
    </div>
  );
}

export default Library;
