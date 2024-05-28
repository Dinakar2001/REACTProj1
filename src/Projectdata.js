import  { useEffect, useState } from 'react';
import axios from 'axios';

const ProjectData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://192.168.1.166:8080/project/get/');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching the data', error);
      }
    };

    fetchData();
  }, []);

  return data;
};


export default ProjectData;
