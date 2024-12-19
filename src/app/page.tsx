'use client';

import { fetchVehicles } from '@/api/fetchVehicle';
import { useEffect, useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Button } from '@mui/material';
import Link from 'next/link';

interface Cars {
  MakeId: number;
  MakeName: string;
  VehicleTypeId: number;
  VehicleTypeName: string;
}

export default function Home() {
  const [cars, setCars] = useState<Cars[]>([]);
  const [selectedCar, setSelectedCar] = useState('');
  const [selectedYear, setSelectedYear] = useState('');

  const currentYear = new Date().getFullYear();
  const yearsArray = Array.from({ length: currentYear - 2015 + 1 }, (_, i) =>
    (2015 + i).toString(),
  );

  const getCars = async () => {
    const data = await fetchVehicles();
    setCars(data);
  };

  const handleCarChange = (e: SelectChangeEvent) => {
    setSelectedCar(e.target.value);
  };

  const handleYearChange = (e: SelectChangeEvent) => {
    setSelectedYear(e.target.value);
  };

  useEffect(() => {
    getCars();
  }, []);

  return (
    <div>
      <div>
        <h1>Selected car is: {selectedCar}</h1>
        <h2>Selected year is: {selectedYear}</h2>
      </div>
      <div>
        <FormControl fullWidth>
          <InputLabel id="cars-select-label">Vehicle makes</InputLabel>
          <Select
            labelId="cars-select-label"
            id="cars"
            value={selectedCar}
            label="Cars"
            onChange={handleCarChange}
          >
            {cars.map(({ MakeId, MakeName }) => (
              <MenuItem key={MakeId} value={MakeName}>
                {MakeName}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="cars-years-select-label">Vehicle years</InputLabel>
          <Select
            labelId="cars-years-select-label"
            id="years"
            value={selectedYear}
            label="Years"
            onChange={handleYearChange}
          >
            {yearsArray.map((year) => (
              <MenuItem key={year} value={year}>
                {year}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      {selectedCar && selectedYear ? (
        <Button variant="contained">
          <Link href={`/result/${selectedCar}/${selectedYear}`}>Next</Link>
        </Button>
      ) : (
        <Button variant="contained" disabled>
          <Link href={`/result/${selectedCar}/${selectedYear}`}>Next</Link>
        </Button>
      )}
    </div>
  );
}
