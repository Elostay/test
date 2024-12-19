'use client';

import { FC, useEffect, useState } from 'react';
import CarItem from './CarItem';
import { Params, ICarsItems } from '@/interfaces/interfaces';
import { fetchModels } from '@/api/fetchVehicle';
import { uid } from 'uid';
import { CircleLoader } from 'react-spinners';

const CarsList: FC<Params> = ({ makeId, year }) => {
  const [cars, setCars] = useState<ICarsItems[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCars = async () => {
      try {
        const data = await fetchModels(makeId, year);

        setCars(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching cars:', error);
        setCars([]);
      }
    };
    getCars();
  }, [makeId, year]);

  if (loading)
    return (
      <div className="flex items-center justify-center absolute top-0 left-0 w-full h-full ">
        <CircleLoader color="#ffffff" />
      </div>
    );
  return (
    <ul className="flex flex-wrap  gap-5 justify-center items-center  text-white z-50">
      {cars.length > 0 ? (
        cars.map(({ Model_ID, Model_Name, Make_Name }: ICarsItems) => {
          const id = uid();
          return (
            <CarItem
              key={id}
              makeName={Make_Name}
              modelName={Model_Name}
              modelId={Model_ID}
              year={year}
            />
          );
        })
      ) : (
        <li className="text-3xl flex items-center justify-center absolute top-0 left-0 w-full h-full ">
          No cars available.
        </li>
      )}
    </ul>
  );
};

export default CarsList;
