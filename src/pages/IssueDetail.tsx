
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  MapPin, Calendar, MessageSquare, Users, ArrowLeft, 
  Send, ThumbsUp, Share, Flag, User, Clock
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Button from '@/components/Button';

// Sample issue data (in a real app, you'd fetch this based on the id)
const issueData = {
  id: "1",
  title: "Broken Park Benches in Willowbrook Park",
  description: "Several park benches in Willowbrook Park have been damaged and need repair. This has been an ongoing issue for several months, making it difficult for elderly visitors to enjoy the park. The damage appears to be from regular wear and tear, but some benches may have been vandalized as well.\n\nThe most affected area is near the central fountain, where at least 5 benches are unusable. This is especially problematic because this area is popular with senior citizens who need places to rest during their walks.",
  location: "Willowbrook Park, Main Avenue",
  category: "Infrastructure",
  images: [
    "https://images.unsplash.com/photo-1604357209793-fca5dca89f97?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1551884831-bbf3cdc6469e?q=80&w=1200&auto=format&fit=crop"
  ],
  date: "June 15, 2023",
  status: "Active",
  author: {
    name: "Jane Cooper",
    avatar: "https://randomuser.me/api/portraits/women/12.jpg"
  },
  comments: [
    {
      id: "c1",
      author: {
        name: "Robert Johnson",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg"
      },
      content: "I noticed this too! The benches near the playground are also damaged. We should organize a community repair day.",
      date: "June 16, 2023",
      likes: 12
    },
    {
      id: "c2",
      author: {
        name: "Sarah Williams",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg"
      },
      content: "I've contacted the parks department about this issue. They said they'll look into it, but it might take some time due to budget constraints.",
      date: "June 17, 2023",
      likes: 8
    },
    {
      id: "c3",
      author: {
        name: "David Miller",
        avatar: "https://randomuser.me/api/portraits/men/75.jpg"
      },
      content: "I know a local carpenter who might be willing to help if we organize a community effort. I can reach out to him if others are interested.",
      date: "June 18, 2023",
      likes: 15
    }
  ],
  volunteers: 12,
  eventDate: "July 2, 2023",
  eventTime: "10:00 AM - 2:00 PM"
};

const IssueDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [commentText, setCommentText] = useState('');
  const [isVolunteering, setIsVolunteering] = useState(false);
  
  // In a real app, use the id to fetch the correct issue
  const issue = issueData; // Normally: useQuery(['issue', id], () => fetchIssue(id))
  
  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitting comment:", commentText);
    setCommentText('');
    // In a real app, you would send this to your backend
  };
  
  const handleVolunteer = () => {
    setIsVolunteering(!isVolunteering);
    // In a real app, you would send this to your backend
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="pt-28 pb-20 flex-1">
        <div className="container mx-auto px-4 md:px-6">
          {/* Back Button */}
          <Link to="/issues" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6 group">
            <ArrowLeft className="h-4 w-4 mr-2 transition-transform group-hover:-translate-x-1" />
            <span>Back to Issues</span>
          </Link>
          
          {/* Issue Header */}
          <div className="mb-8 animate-fade-in">
            <div className="inline-flex px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-4">
              {issue.category}
            </div>
            <h1 className="text-3xl md:text-4xl font-semibold mb-4">{issue.title}</h1>
            <div className="flex flex-wrap gap-y-3 gap-x-6 text-muted-foreground">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span>{issue.location}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                <span>Reported on {issue.date}</span>
              </div>
              <div className="flex items-center">
                <MessageSquare className="h-4 w-4 mr-2" />
                <span>{issue.comments.length} comments</span>
              </div>
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-2" />
                <span>{issue.volunteers} volunteers</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Image Gallery */}
              <div className="mb-8 animate-scale-in">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {issue.images.map((image, index) => (
                    <div 
                      key={index} 
                      className={`rounded-xl overflow-hidden ${index === 0 && issue.images.length > 1 ? 'md:col-span-2' : ''}`}
                    >
                      <img 
                        src={image} 
                        alt={`${issue.title} - Image ${index + 1}`} 
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Description */}
              <div className="mb-8 bg-card rounded-xl shadow-subtle p-6 animate-slide-up">
                <div className="flex items-center mb-4">
                  <img 
                    src={issue.author.avatar} 
                    alt={issue.author.name} 
                    className="h-10 w-10 rounded-full mr-3"
                  />
                  <div>
                    <div className="font-medium">{issue.author.name}</div>
                    <div className="text-sm text-muted-foreground">Issue Reporter</div>
                  </div>
                </div>
                <div className="prose max-w-none">
                  {issue.description.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="mb-4 text-foreground/90 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
                <div className="flex gap-3 mt-6 pt-4 border-t border-border/30">
                  <Button variant="outline" size="sm">
                    <ThumbsUp className="h-4 w-4 mr-2" />
                    Support
                  </Button>
                  <Button variant="outline" size="sm">
                    <Share className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                  <Button variant="outline" size="sm">
                    <Flag className="h-4 w-4 mr-2" />
                    Report
                  </Button>
                </div>
              </div>
              
              {/* Comments */}
              <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
                <h2 className="text-xl font-semibold mb-4">Comments ({issue.comments.length})</h2>
                
                {/* Comment Form */}
                <form onSubmit={handleSubmitComment} className="mb-6">
                  <div className="flex gap-3">
                    <div className="flex-shrink-0">
                      <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center">
                        <User className="h-5 w-5 text-muted-foreground" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <textarea
                        className="w-full p-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 min-h-[100px]"
                        placeholder="Add your comment..."
                        value={commentText}
                        onChange={(e) => setCommentText(e.target.value)}
                      ></textarea>
                      <div className="flex justify-end mt-2">
                        <Button disabled={!commentText.trim()}>
                          <Send className="h-4 w-4 mr-2" />
                          Post Comment
                        </Button>
                      </div>
                    </div>
                  </div>
                </form>
                
                {/* Comments List */}
                <div className="space-y-4">
                  {issue.comments.map((comment) => (
                    <div 
                      key={comment.id} 
                      className="bg-secondary/30 rounded-xl p-4 animate-slide-up"
                      style={{ animationDelay: `${0.2 + parseInt(comment.id.substring(1)) * 0.1}s` }}
                    >
                      <div className="flex gap-3">
                        <img 
                          src={comment.author.avatar} 
                          alt={comment.author.name} 
                          className="h-10 w-10 rounded-full flex-shrink-0"
                        />
                        <div className="flex-grow">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                            <div className="font-medium">{comment.author.name}</div>
                            <div className="text-xs text-muted-foreground flex items-center">
                              <Clock className="h-3 w-3 mr-1" />
                              {comment.date}
                            </div>
                          </div>
                          <p className="text-foreground/90 mb-3">{comment.content}</p>
                          <div className="flex items-center text-sm">
                            <button className="flex items-center text-muted-foreground hover:text-foreground transition-colors">
                              <ThumbsUp className="h-3 w-3 mr-1" />
                              <span>{comment.likes}</span>
                            </button>
                            <span className="mx-2 text-muted-foreground">•</span>
                            <button className="text-muted-foreground hover:text-foreground transition-colors">
                              Reply
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Status Card */}
              <div className="bg-card rounded-xl shadow-subtle p-6 mb-6 animate-slide-up">
                <h3 className="text-lg font-semibold mb-4">Issue Status</h3>
                <div className="flex items-center mb-4">
                  <div className="h-3 w-3 rounded-full bg-green-500 mr-2"></div>
                  <span className="font-medium">{issue.status}</span>
                </div>
                <p className="text-muted-foreground text-sm mb-4">
                  This issue has been verified and is currently being addressed by the community.
                </p>
                <div className="flex justify-between items-center pt-4 border-t border-border/30">
                  <div className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">{issue.volunteers}</span> people volunteering
                  </div>
                  <Button 
                    variant={isVolunteering ? "secondary" : "primary"}
                    size="sm"
                    onClick={handleVolunteer}
                  >
                    {isVolunteering ? "Volunteering" : "Volunteer"}
                  </Button>
                </div>
              </div>
              
              {/* Event Card */}
              <div className="bg-card rounded-xl shadow-subtle p-6 mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                <h3 className="text-lg font-semibold mb-4">Community Event</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <Calendar className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium">Date</div>
                      <div className="text-muted-foreground">{issue.eventDate}</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium">Time</div>
                      <div className="text-muted-foreground">{issue.eventTime}</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium">Location</div>
                      <div className="text-muted-foreground">{issue.location}</div>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <Button className="w-full">RSVP For This Event</Button>
                </div>
              </div>
              
              {/* Similar Issues */}
              <div className="bg-card rounded-xl shadow-subtle p-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <h3 className="text-lg font-semibold mb-4">Similar Issues</h3>
                <div className="space-y-4">
                  <Link to="/issues/5" className="flex gap-3 group">
                    <div className="h-16 w-16 rounded-lg overflow-hidden flex-shrink-0">
                      <img 
                        src="https://images.unsplash.com/photo-1621556712457-1ec8a586daa7?q=80&w=200&auto=format&fit=crop" 
                        alt="Faulty Street Lights" 
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium group-hover:text-primary transition-colors line-clamp-2">
                        Faulty Street Lights on Maple Avenue
                      </h4>
                      <div className="text-xs text-muted-foreground mt-1">
                        Infrastructure • 5 days ago
                      </div>
                    </div>
                  </Link>
                  
                  <Link to="/issues/6" className="flex gap-3 group">
                    <div className="h-16 w-16 rounded-lg overflow-hidden flex-shrink-0">
                      <img 
                        src="https://images.unsplash.com/photo-1601325979086-d54da2c7419c?q=80&w=200&auto=format&fit=crop" 
                        alt="Graffiti on Community Center" 
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium group-hover:text-primary transition-colors line-clamp-2">
                        Graffiti on Community Center Wall
                      </h4>
                      <div className="text-xs text-muted-foreground mt-1">
                        Other • 1 week ago
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-secondary/80 py-8 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="h-6 w-6 rounded-full bg-primary flex items-center justify-center mr-2">
                <MapPin className="h-3 w-3 text-white" />
              </div>
              <span className="text-lg font-semibold">UrbanCare</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} UrbanCare. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default IssueDetail;
