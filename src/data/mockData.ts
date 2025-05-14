
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
      { status: "Checking", date: "21 Ene", time: "10:23 AM" },
      { status: "In transit", date: "25 Ene", time: "12:02 PM" },
      { status: "Delivered", date: "25 Ene", time: null },
    ],
    origin: {
      lat: -34.603684,
      lng: -58.381559,
      address: "Av. 9 de Julio 1925",
      city: "Buenos Aires",
      postalCode: "C1073",
    },
    destination: {
      lat: -31.420083,
      lng: -64.188776,
      address: "Av. Hipólito Yrigoyen 511",
      city: "Córdoba",
      postalCode: "X5000JHE",
    },
    currentLocation: {
      lat: -32.954971,
      lng: -60.654448,
      address: "Bv. Oroño 300",
      city: "Rosario",
      postalCode: "S2000",
    },
    stats: {
      currentLocation: "Rosario, Santa Fe",
      speed: "85 km/h",
      remainingDistance: "341 km",
      lastStop: "2 horas atrás",
    },
    vehicle: {
      manufacturer: "Mercedes-Benz",
      model: "Atego 1726",
      rating: 4.9,
      capacity: {
        usedPercentage: 71,
        totalPercentage: 100,
      },
      weight: "7,260 kg",
      volume: "372,45 m³",
      image: "/placeholder.svg",
    }
  },
  {
    id: "FR156KL89K",
    currentStatus: "Checking",
    progress: 15,
    trackingEvents: [
      { status: "Checking", date: "22 Ene", time: "11:28 AM" },
      { status: "In transit", date: "26 Ene", time: null },
      { status: "Delivered", date: "30 Ene", time: null },
    ],
    origin: {
      lat: -34.603684,
      lng: -58.381559,
      address: "Av. Corrientes 456",
      city: "Buenos Aires",
      postalCode: "C1043",
    },
    destination: {
      lat: -41.133472,
      lng: -71.310278,
      address: "Mitre 534",
      city: "Bariloche",
      postalCode: "R8400",
    }
  },
  {
    id: "LN236NB89R",
    currentStatus: "Checking",
    progress: 10,
    trackingEvents: [
      { status: "Checking", date: "23 Ene", time: "09:28 AM" },
      { status: "In transit", date: "27 Ene", time: null },
      { status: "Delivered", date: "1 Feb", time: null },
    ],
    origin: {
      lat: -34.603684,
      lng: -58.381559,
      address: "Av. del Libertador 4625",
      city: "Buenos Aires",
      postalCode: "C1426",
    },
    destination: {
      lat: -24.790925,
      lng: -65.410519,
      address: "Caseros 750",
      city: "Salta",
      postalCode: "A4400",
    }
  }
];
