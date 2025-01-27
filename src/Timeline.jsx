import React from "react";
import './Timeline.css'
// Sample data in (date, title) format
const events = [
    { date: "2025-01-01", title: "New Year's Day" },
    { date: "2025-01-15", title: "Event 2" },
    { date: "2025-02-01", title: "Event 3" },
    { date: "2025-04-05", title: "Event 5" },
  ];
  
// Sort the events by date
events.sort((a, b) => new Date(a.date) - new Date(b.date));
const teststyle = {
    border: "2px solid blue",
};

const Timeline = () => {
  return (
  <>
    {/* Vertical line */}
    <div
        style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: "50%",
            width: "4px",
            backgroundColor: "black",
            zIndex: 1
        }}
    ></div>
        <div className="d-flex justify-content-center container mt-5">
        <div className="row" style={teststyle}>
            {/* Timeline container */}
            <div className="col-12 text-start position-relative" style={{width: "40em"}}>
            
            {/* Event List */}
            {events.map((event, index) => (
                <div
                key={index}
                className={`col-5 timeline-event position-relative mb-4 d-flex ${
                    index % 2 === 0 ? "text-start" : "text-end"
                }`}
                >
                <div
                    className="timeline-marker position-absolute"
                    style={{
                    left: "50%",
                    top: "0",
                    transform: "translateX(-50%)",
                    backgroundColor: "black",
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    border: "2px solid white",
                    }}
                ></div>

                {/* Event content */}
                <div
                    className={`timeline-content ms-4 ${
                    index % 2 === 0 ? "me-4" : "ms-4"
                    } bg-light p-3 rounded`}
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