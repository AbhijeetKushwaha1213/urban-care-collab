
import React, { useState } from 'react';
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Users, Clock, ArrowRight, User } from 'lucide-react';
import Navbar from '@/components/Navbar';

// Mock event data
const eventsData = [
  {
    id: "1",
    title: "Park Cleanup at Willowbrook",
    description: "Join us for a community cleanup event at Willowbrook Park. We'll be focusing on trash collection and bench repairs.",
    location: "Willowbrook Park, Main Avenue",
    date: "Saturday, June 15th, 2024",
    time: "10:00 AM - 1:00 PM",
    status: "Upcoming",
    timeRemaining: "In 3 days",
    categories: ["Cleanup", "Infrastructure"],
    volunteersCount: 12
  },
  {
    id: "2",
    title: "Drainage System Assessment at Pine Road",
    description: "A community meetup to assess the drainage blockage issues after recent rainfall and coordinate with local authorities.",
    location: "Pine Road, North District",
    date: "Tuesday, June 18th, 2024",
    time: "4:00 PM - 6:00 PM",
    status: "Scheduled",
    timeRemaining: "Next week",
    categories: ["Assessment", "Drainage"],
    volunteersCount: 8
  },
  {
    id: "3",
    title: "Community Garden Water System Installation",
    description: "Installing a new water system for the Maple Garden Community to address the ongoing water shortage issues.",
    location: "Maple Garden, East Side",
    date: "Sunday, June 23rd, 2024",
    time: "9:00 AM - 2:00 PM",
    status: "Scheduled",
    timeRemaining: "In 2 weeks",
    categories: ["Construction", "Water"],
    volunteersCount: 15
  }
];

const Events = () => {
  const { toast } = useToast();
  const [showCreateEventForm, setShowCreateEventForm] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: '',
    description: '',
    location: '',
    date: '',
    time: '',
    categories: ''
  });

  const handleCreateEvent = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Event Created",
      description: "Your event has been successfully created!",
    });
    setShowCreateEventForm(false);
    setNewEvent({
      title: '',
      description: '',
      location: '',
      date: '',
      time: '',
      categories: ''
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewEvent(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-32 pb-20 px-4 md:px-6 container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-semibold mb-6">Community Events</h1>
          <p className="text-xl text-muted-foreground mb-12">
            Join upcoming events organized by your community to solve local issues together.
          </p>
          
          {/* Create Event Button/Form */}
          {!showCreateEventForm ? (
            <Button 
              className="w-full mb-8 py-8 text-lg gap-3"
              onClick={() => setShowCreateEventForm(true)}
            >
              <span>Create New Event</span>
              <ArrowRight className="h-5 w-5" />
            </Button>
          ) : (
            <div className="bg-card border rounded-xl p-6 mb-8 animate-fade-in">
              <h2 className="text-2xl font-semibold mb-4">Create New Event</h2>
              <form onSubmit={handleCreateEvent} className="space-y-4">
                <div>
                  <label htmlFor="title" className="block text-sm font-medium mb-1">Event Title</label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={newEvent.title}
                    onChange={handleInputChange}
                    className="w-full p-2.5 rounded-lg border border-input bg-background"
                    placeholder="Enter event title"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="description" className="block text-sm font-medium mb-1">Description</label>
                  <textarea
                    id="description"
                    name="description"
                    value={newEvent.description}
                    onChange={handleInputChange}
                    className="w-full p-2.5 rounded-lg border border-input bg-background min-h-24"
                    placeholder="Describe your event"
                    required
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="location" className="block text-sm font-medium mb-1">Location</label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={newEvent.location}
                      onChange={handleInputChange}
                      className="w-full p-2.5 rounded-lg border border-input bg-background"
                      placeholder="Enter event location"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="categories" className="block text-sm font-medium mb-1">Categories</label>
                    <input
                      type="text"
                      id="categories"
                      name="categories"
                      value={newEvent.categories}
                      onChange={handleInputChange}
                      className="w-full p-2.5 rounded-lg border border-input bg-background"
                      placeholder="e.g. Cleanup, Water, Infrastructure"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium mb-1">Date</label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={newEvent.date}
                      onChange={handleInputChange}
                      className="w-full p-2.5 rounded-lg border border-input bg-background"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="time" className="block text-sm font-medium mb-1">Time</label>
                    <input
                      type="time"
                      id="time"
                      name="time"
                      value={newEvent.time}
                      onChange={handleInputChange}
                      className="w-full p-2.5 rounded-lg border border-input bg-background"
                      required
                    />
                  </div>
                </div>
                
                <div className="flex justify-end space-x-4 pt-4">
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={() => setShowCreateEventForm(false)}
                  >
                    Cancel
                  </Button>
                  <Button type="submit">Create Event</Button>
                </div>
              </form>
            </div>
          )}
          
          <div className="flex flex-col gap-6">
            {eventsData.map(event => (
              <div key={event.id} className="rounded-xl border p-6 bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <span className={`text-sm ${event.status === 'Upcoming' ? 'bg-primary/10 text-primary' : 'bg-secondary'} px-3 py-1 rounded-full`}>
                      {event.status}
                    </span>
                    <span className="text-sm text-muted-foreground">{event.timeRemaining}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold">{event.title}</h3>
                  <p className="text-muted-foreground">{event.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Users className="h-4 w-4 mr-2" />
                      <span>{event.volunteersCount} volunteers attending</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {event.categories.map((category, index) => (
                      <span key={index} className="text-xs px-2 py-1 bg-secondary rounded-md">{category}</span>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center mt-2">
                    <div className="flex -space-x-2">
                      {[...Array(Math.min(event.volunteersCount, 5))].map((_, i) => (
                        <div key={i} className="h-8 w-8 rounded-full bg-secondary border-2 border-background flex items-center justify-center overflow-hidden">
                          <User className="h-4 w-4" />
                        </div>
                      ))}
                    </div>
                    <Button variant="link" onClick={() => {
                      toast({
                        title: "Event Details",
                        description: `Viewing details for ${event.title}`,
                      });
                    }}>
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
