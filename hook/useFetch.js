import { useState, useEffect } from "react";
import axios from 'axios';


const useFetch = (endPoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endPoint}`,
        headers: {
            'x-rapidapi-key': '98db57b0c2msh28f62742e8dfcd2p15b217jsnfaa50688c7a5',
            'x-rapidapi-host': 'jsearch.p.rapidapi.com'
          },
        params: { ...query},
      };

      const fetchData = async () => {
        setIsLoading(true);

        try {
            const response = await axios.request(options);
            setData(response.data.data);
            setIsLoading(false);
        } catch (error) {
            setError(error);
            alert("There is an error!")
        } finally {
            setIsLoading(false);
        }
      }

      useEffect(() => {
        fetchData();
      }, [])

      const refetch = () => {
        setIsLoading(true);
        fetchData();
      }

      return {data, isLoading, error, refetch}
};

export default useFetch;