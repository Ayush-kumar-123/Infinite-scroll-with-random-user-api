import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

const style = {
  border: "1px solid green",
  margin: 12,
  padding: 8,
  height: '70px',
};

const App = () => {
  const [data, setData] = useState(Array.from({ length: 20 }));
  const [hasMore, setHasMore] = useState(true);
  const [data1, setData1] = useState([]);

  const fetchMoreData = () => {
    if (data.length < 200) {
      setTimeout(() => {
        setData(data.concat(Array.from({ length: 20 })));
      }, 1000);
    } else {
      setHasMore(false);
    }
  };

  const fetchData = async () => {
    try {
      const response = await fetch('https://randomuser.me/api/?results=1100');
      const json = await response.json();
      setData1(json.results);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleLogout = () => {
    window.location.reload(); // Refreshes the browser
  };

  return (
    <div className='App'>
      <button
        onClick={handleLogout}
        style={{
          padding: '8px 16px',
          backgroundColor: 'red',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Logout
      </button>
      <InfiniteScroll
        dataLength={data.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<p><b>Loading...</b></p>}
        endMessage={<p>End.</p>}
      >
        {data.map((item, index) => (
          <div
            style={{
              ...style,
              backgroundColor: index % 2 === 0 ? '#f0f0f0' : '#fff',
            }}
            key={index}
          >
            {data1.length > 0 && (
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ marginRight: '10px' }}>
                  <img
                    src={data1[index + 1]['picture']['medium']}
                    alt="User"
                  />
                </div>
                <div>
                  <p style={{ marginBottom: '5px' }}>
                    <i>{data1[index + 1].name.first}{' '}
                    {data1[0].name.last}</i>
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default App;
