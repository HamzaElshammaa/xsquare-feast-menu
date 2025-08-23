import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MapPin, Clock, Phone } from 'lucide-react';

// Sample locations for the burger truck
const locations = [
  {
    id: 1,
    name: "Downtown Square",
    address: "123 Main Street, Downtown",
    coordinates: [-74.006, 40.7128], // NYC coordinates as example
    hours: "11:00 AM - 9:00 PM",
    phone: "+1 (555) 123-4567",
    description: "Our main location in the heart of downtown"
  },
  {
    id: 2,
    name: "Business District",
    address: "456 Business Ave, Financial District", 
    coordinates: [-74.008, 40.7118],
    hours: "11:00 AM - 3:00 PM",
    phone: "+1 (555) 123-4567",
    description: "Perfect for your lunch break"
  },
  {
    id: 3,
    name: "University Campus",
    address: "789 College Way, University Area",
    coordinates: [-74.004, 40.7138],
    hours: "12:00 PM - 10:00 PM",
    phone: "+1 (555) 123-4567", 
    description: "Serving hungry students daily"
  }
];

const LocationsMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [needsToken, setNeedsToken] = useState(true);

  const initializeMap = (token: string) => {
    if (!mapContainer.current || !token) return;

    mapboxgl.accessToken = token;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [-74.006, 40.7128], // Centered on first location
      zoom: 13,
    });

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    // Add markers for each location
    locations.forEach((location) => {
      // Create popup content
      const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(`
        <div class="p-3">
          <h3 class="font-semibold text-lg mb-2">${location.name}</h3>
          <p class="text-sm text-gray-600 mb-2">${location.address}</p>
          <p class="text-sm mb-1"><strong>Hours:</strong> ${location.hours}</p>
          <p class="text-sm mb-1"><strong>Phone:</strong> ${location.phone}</p>
          <p class="text-sm">${location.description}</p>
        </div>
      `);

      // Create custom marker element
      const markerElement = document.createElement('div');
      markerElement.className = 'w-8 h-8 bg-primary rounded-full border-2 border-white shadow-lg flex items-center justify-center cursor-pointer';
      markerElement.innerHTML = '<div class="w-3 h-3 bg-white rounded-full"></div>';

      // Add marker to map
      new mapboxgl.Marker(markerElement)
        .setLngLat(location.coordinates as [number, number])
        .setPopup(popup)
        .addTo(map.current!);
    });

    setNeedsToken(false);
  };

  const handleTokenSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mapboxToken.trim()) {
      initializeMap(mapboxToken.trim());
    }
  };

  return (
    <section id="locations" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Find Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Visit our food truck at these locations throughout the city
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Location Cards */}
          <div className="lg:col-span-1 space-y-4">
            {locations.map((location) => (
              <div key={location.id} className="bg-card border border-border rounded-lg p-6 shadow-soft hover:shadow-brand transition-all duration-300">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      {location.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {location.address}
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-sm">
                        <Clock className="w-4 h-4 text-primary" />
                        <span>{location.hours}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <Phone className="w-4 h-4 text-primary" />
                        <span>{location.phone}</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">
                      {location.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Map Container */}
          <div className="lg:col-span-2">
            {needsToken ? (
              <div className="bg-muted rounded-lg p-8 h-96 flex flex-col items-center justify-center">
                <h3 className="text-lg font-semibold mb-4">Mapbox Setup Required</h3>
                <p className="text-muted-foreground mb-6 text-center max-w-md">
                  To display the interactive map, please enter your Mapbox public token. 
                  You can get one free at <a href="https://mapbox.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">mapbox.com</a>
                </p>
                <form onSubmit={handleTokenSubmit} className="w-full max-w-md space-y-4">
                  <Input
                    type="text"
                    placeholder="Enter your Mapbox public token..."
                    value={mapboxToken}
                    onChange={(e) => setMapboxToken(e.target.value)}
                    className="w-full"
                  />
                  <Button type="submit" variant="cta" className="w-full">
                    Load Map
                  </Button>
                </form>
              </div>
            ) : (
              <div 
                ref={mapContainer} 
                className="w-full h-96 rounded-lg shadow-soft"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationsMap;