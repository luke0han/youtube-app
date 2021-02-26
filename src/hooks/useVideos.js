import { useState, useEffect } from 'react'
import YouTube from '../apis/YouTube'

const useVideos = ({ defSearchTerm }) => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
      search(defSearchTerm);
    }, []);


  const search = async (term) => {
    const response = await YouTube.get("/search", {
      params: {
        q: term,
      },
    });

    setVideos(response.data.items);
  };

  return [videos, search]
}

export default useVideos
