export interface Car {
  vehicleId: number;
  year: number;
  make: string;
  model: string;
  trim: string;
  price: {
    total: number
  };
  imageUrl: string;
}
