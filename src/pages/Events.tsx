
import React from 'react';
import Navbar from '@/components/Navbar';

const Events = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-32 pb-20 px-4 md:px-6 container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-semibold mb-6">Community Events</h1>
          <p className="text-xl text-muted-foreground mb-12">
            Join upcoming events organized by your community to solve local issues together.
          </p>
          
          <div className="flex flex-col gap-6">
            {/* Placeholder for future events listing */}
            <div className="rounded-xl border p-6 bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">Upcoming</span>
                  <span className="text-sm text-muted-foreground">In 3 days</span>
                </div>
                <h3 className="text-xl font-semibold">Park Cleanup at Willowbrook</h3>
                <p className="text-muted-foreground">Join us for a community cleanup event at Willowbrook Park. We'll be focusing on trash collection and bench repairs.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs px-2 py-1 bg-secondary rounded-md">Cleanup</span>
                  <span className="text-xs px-2 py-1 bg-secondary rounded-md">Infrastructure</span>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-sm text-muted-foreground">12 volunteers attending</span>
                  <button className="text-primary font-medium text-sm hover:underline">View Details</button>
                </div>
              </div>
            </div>
            
            <div className="rounded-xl border p-6 bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm bg-secondary px-3 py-1 rounded-full">Scheduled</span>
                  <span className="text-sm text-muted-foreground">Next week</span>
                </div>
                <h3 className="text-xl font-semibold">Drainage System Assessment at Pine Road</h3>
                <p className="text-muted-foreground">A community meetup to assess the drainage blockage issues after recent rainfall and coordinate with local authorities.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs px-2 py-1 bg-secondary rounded-md">Assessment</span>
                  <span className="text-xs px-2 py-1 bg-secondary rounded-md">Drainage</span>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-sm text-muted-foreground">8 volunteers attending</span>
                  <button className="text-primary font-medium text-sm hover:underline">View Details</button>
                </div>
              </div>
            </div>
            
            <div className="rounded-xl border border-dashed p-6 bg-secondary/30 flex flex-col items-center justify-center text-center gap-4">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Create New Event</h3>
              <p className="text-muted-foreground max-w-md">
                Want to organize a community event to address a local issue? Create a new event and invite others to join.
              </p>
              <button className="text-primary font-medium hover:underline">Create Event</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
