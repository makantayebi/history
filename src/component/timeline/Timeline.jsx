import React from "react";
import './Timeline.css';
// Sample data in (date, title) format

const events = [
    { date: "2025-01-01", title: "New Year's Day" },
    { date: "2025-01-15", title: "Event 2" },
    { date: "2025-02-01", title: "Event 3" },
    { date: "2025-04-05", title: "Event 5" },
  ];
  
// Sort the events by date
events.sort((a, b) => new Date(a.date) - new Date(b.date));

const Timeline = () => {
  return (
  <>
    {/* Vertical line */}
    <div className="timess"></div>
        <div className="container mt-5 w-75 bg-white p-4 border rounded shadow">
        <div className="row">
            {/* Timeline container */}
            <div className="col-12 text-start position-relative">
            
            {/* Event List */}
            {events.map((event, index) => (
                <div
                key={index}
                className={`col-4 w-40 mb-3 ms-0 bg-secondary text-white p-2 rounded ${
                    index % 2 === 0 ? "me-auto" : "ms-auto"
                }`}
                >

                {/* Event content */}
                <div
                    className={`timeline-content ms-4 ${
                    index % 2 === 0 ? "me-4" : "ms-4"
                    } p-3 rounded`}
                >
                    <h5>{event.title}</h5>
                    <p>{new Date(event.date).toLocaleDateString()}</p>
                </div>
                </div>
            ))}
            </div>
        </div>
        </div>
    </>
  );
};

export default Timeline;