import React, { useState , useEffect} from 'react';
import './Timeline.css';

// Read and parse CSV
function csvToJson(csvContent) {

    // Split the CSV content by lines
    const lines = csvContent.trim().split("\n");
    
    // Create an array to store the JSON objects
    const jsonData = [];

    // Iterate through each line
    lines.forEach(line => {
        const [rawDate, title] = line.split(","); // Split the line into columns

        // Add the row as a JSON object to the array
        jsonData.push({ date: rawDate, title: title.trim() });
    });
    return jsonData;
}

const Timeline = () => {
    const [historicEvents, setHistoricEvents] = useState('');
    const [error, setError] = useState('');
    // Function to fetch and read the CSV file
    const fetchCSV = async () => {
      try {
        const response = await fetch("/history/data.csv"); // Path to the CSV file in the public folder

        if (!response.ok) {
          throw new Error('Failed to fetch CSV file');
        }

        const text = await response.text();  // Read the CSV file as text
        setHistoricEvents(csvToJson(text));  // Set the content of the CSV to state
      } catch (err) {
        setError('Error fetching CSV file');
        console.error(err);
      }
    };

    useEffect(() => {
      fetchCSV();  // Fetch the CSV file when the component mounts
    }, []);

  return (
  <>
    {/* Vertical line */}
    <div className="timeline"></div>
      <div className="container mt-5 w-75 bg-white p-4 border rounded shadow">
        <div className="row">
          <div className="col-12 text-start position-relative">
          {/* Event List */}
          {historicEvents && historicEvents.map((event, index) => (
            <>
              {index % 2 === 0 &&
                <>
                  <div className="col-6 row me-auto">
                    <div key={index} className="col-md-6 bg-secondary w-40 mb-3 ms-0 text-white p-2 rounded me-auto" >
                      <div className = "timeline-content rounded">
                        <h5 className='title'>{event.title}</h5>
                        <p>{new Date(event.date).toLocaleDateString()}</p>
                      </div>
                    </div>
                    <div class="col-md-6 event-line my-3 bg-secondary ms-auto"></div>
                  </div>
                </>
              }
              {index %2===1 &&
                <>
                  <div className="col-6 row ms-auto">
                    <div class="col-md-6 event-line my-3 bg-secondary me-auto"></div>
                    <div key={index} className="col-6 w-40 mb-3 ms-0 bg-secondary text-white p-2 rounded ms-auto" >
                      <div className="timeline-content ms-4 p-3 rounded">
                        <h5 className='title'>{event.title}</h5>
                        <p>{new Date(event.date).toLocaleDateString()}</p>
                      </div>
                    </div>
                  </div>
                </>
              }
            </>
          ))}
          </div>
        </div>
        {(!historicEvents || error) && <div className="alert alert-danger">error</div>}
      </div>
    </>
  );
};

export default Timeline;