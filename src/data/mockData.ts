
export interface TrackingPoint {
  lat: number;
  lng: number;
  address: string;
  city: string;
  postalCode: string;
}

export interface TrackingEvent {
  status: 'Checking' | 'In transit' | 'Delivered';
  date: string;
  time: string | null;
}

export interface ShipmentData {
  id: string;
  trackingEvents: TrackingEvent[];
  origin: TrackingPoint;
  destination: TrackingPoint;
  currentLocation?: TrackingPoint;
  currentStatus: 'Checking' | 'In transit' | 'Delivered';
  progress: number;
  vehicle?: {
    manufacturer: string;
    model: string;
    rating: number;
    capacity: {
      usedPercentage: number;
      totalPercentage: number;
    };
    weight: string;
    volume: string;
    image: string;
  };
  stats?: {
    currentLocation: string;
    speed: string;
    remainingDistance: string;
    lastStop: string;
  };
}

export const mockShipments: ShipmentData[] = [
  {
    id: "AD345Jk758",
    currentStatus: "In transit",
    progress: 60,
    trackingEvents: [
      { status: "Checking", date: "21 Jan", time: "10:23 AM" },
      { status: "In transit", date: "25 Jan", time: "12:02 PM" },
      { status: "Delivered", date: "25 Jan", time: null },
    ],
    origin: {
      lat: 52.5200,
      lng: 13.4050,
      address: "Mohrenstrasse 37",
      city: "Berlin",
      postalCode: "10117",
    },
    destination: {
      lat: 52.5300,
      lng: 13.4200,
      address: "Goethestraße 1",
      city: "Berlin",
      postalCode: "10115",
    },
    currentLocation: {
      lat: 52.5260,
      lng: 13.4150,
      address: "Torstraße",
      city: "Berlin",
      postalCode: "10117",
    },
    stats: {
      currentLocation: "Torstraße 10117",
      speed: "60 mph",
      remainingDistance: "24 km",
      lastStop: "2 hours ago",
    },
    vehicle: {
      manufacturer: "Hyundai",
      model: "Cargo Track HD320",
      rating: 4.9,
      capacity: {
        usedPercentage: 71,
        totalPercentage: 100,
      },
      weight: "7,260 kg",
      volume: "372,45 in³",
      image: "/placeholder.svg",
    }
  },
  {
    id: "FR156KL89K",
    currentStatus: "Checking",
    progress: 15,
    trackingEvents: [
      { status: "Checking", date: "22 Jan", time: "11:28 AM" },
      { status: "In transit", date: "26 Jan", time: null },
      { status: "Delivered", date: "30 Jan", time: null },
    ],
    origin: {
      lat: 52.5100,
      lng: 13.3900,
      address: "Friedrichstraße 123",
      city: "Berlin",
      postalCode: "10117",
    },
    destination: {
      lat: 52.5150,
      lng: 13.4100,
      address: "Alexanderplatz 5",
      city: "Berlin",
      postalCode: "10178",
    }
  },
  {
    id: "LN236NB89R",
    currentStatus: "Checking",
    progress: 10,
    trackingEvents: [
      { status: "Checking", date: "23 Jan", time: "09:28 AM" },
      { status: "In transit", date: "27 Jan", time: null },
      { status: "Delivered", date: "1 Feb", time: null },
    ],
    origin: {
      lat: 52.5050,
      lng: 13.3850,
      address: "Potsdamer Platz 1",
      city: "Berlin",
      postalCode: "10785",
    },
    destination: {
      lat: 52.5200,
      lng: 13.4300,
      address: "Karl-Marx-Allee 33",
      city: "Berlin",
      postalCode: "10178",
    }
  }
];
