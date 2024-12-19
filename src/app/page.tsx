'use client';

import { fetchVehicles } from '@/api/fetchVehicle';
import { useEffect, useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Button } from '@mui/material';
import Link from 'next/link';
import { CircleLoader } from 'react-spinners';

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
  const [loading, setLoading] = useState(true);

  const isDisabled = !selectedCar || !selectedYear;

  const currentYear = new Date().getFullYear();
  const yearsArray = Array.from({ length: currentYear - 2015 + 1 }, (_, i) =>
    (2015 + i).toString()
  );

  const getCars = async () => {
    const data = await fetchVehicles();

    setCars(data);
    setLoading(false);
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

  if (loading)
    return (
      <div className="flex items-center justify-center absolute top-0 left-0 w-full h-full ">
        <CircleLoader color="#ffffff" />
      </div>
    );
  return (
    <div className="flex flex-col items-center justify-center h-screen  ">
      <div className="bg-white p-10 rounded-xl  z-50">
        <div className="mb-10 text-3xl">Hello 👋</div>
        <div className="flex flex-col gap-4 w-[300px] mb-10">
          <FormControl fullWidth>
            <InputLabel id="cars-select-label">Vehicles makes</InputLabel>
            <Select
              labelId="cars-select-label"
              id="cars"
              value={selectedCar}
              label="Cars"
              onChange={handleCarChange}
            >
              {cars.map(({ MakeId, MakeName }) => (
                <MenuItem key={MakeId} value={MakeId}>
                  {MakeName}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="cars-years-select-label">Models years</InputLabel>
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
        <Button
          sx={{ backgroundColor: 'black' }}
          variant="contained"
          disabled={isDisabled}
        >
          <Link href={`/result/${selectedCar}/${selectedYear}`}>Next</Link>
        </Button>
      </div>
    </div>
  );
}
