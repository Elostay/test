import { fetchModels, fetchVehicles } from '@/api/fetchVehicle';
import { FC } from 'react';

interface Params {
  makeId: string;
  year: string;
}
interface ResultPageProps {
  params: Params;
}

export const generateStaticParams = async (): Promise<Params[]> => {
  const makes = await fetchVehicles();

  return makes
    .filter((make: Params) => make.makeId && make.year)
    .map((make: Params) => ({
      makeId: make.makeId.toString(),
      year: make.year.toString(),
    }));
};

const ResultPage: FC<ResultPageProps> = ({ params }) => {
  const { makeId, year } = params;
  return (
    <div>
      <h1>Результати</h1>
      <p>Make ID: {makeId}</p>
      <p>Year: {year}</p>
    </div>
  );
};

export default ResultPage;
