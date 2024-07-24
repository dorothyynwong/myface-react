import React, { useState, useEffect } from "react";

// Define the type for your data
type DataType = {
  id: number;
  name: string;
  username: string;
  email: string;
};

const Myfetch: React.FC = () => {
  const [data, setData] = useState<DataType | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:3001/posts")
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data: DataType) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((error: Error) => {
        setError(error);
        setIsLoading(false);
      });
  }, []); // Empty dependency array means this effect will only run once, similar to componentDidMount

  if (isLoading) {
    return (
      <div>
        Loading ....
      </div>
      
    )

  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    // No data yet
    return null;
  }

  // Render your component with data
  return (
    <div>
      {/* Render your data here */}
      display our posts here ...
    </div>
  );
};

export default Myfetch;