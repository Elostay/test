'use client';

import { ICarItem } from '@/interfaces/interfaces';
import { FC, useState } from 'react';

const CarItem: FC<ICarItem> = ({ makeName, modelName, modelId, year }) => {
  const [] = useState();

  return (
    <ul
      style={{ width: 'calc((100% - 40px) / 3)' }}
      className="flex flex-col gap-2 border-2 rounded-xl border-orange-300 p-2 text-xl  min-h-[200px] min-w-[200px]"
    >
      <li>
        <span className="font-bold">Make name:</span> {makeName}
      </li>
      <li>
        <span className="font-semibold">Year:</span> {year}
      </li>
      <li>Model name: {modelName}</li>
      <li>Model id: {modelId}</li>
    </ul>
  );
};

export default CarItem;
