import { fetchVehicles } from '@/api/fetchVehicle';
import CarsList from '@/app/components/CarsList';
import { Params } from '@/interfaces/interfaces';
import { Suspense } from 'react';
import { CircleLoader } from 'react-spinners';

interface ResultPageProps {
  params: {};
}
type TParams = Promise<{ makeId: string; year: string }>;

export const generateStaticParams = async (): Promise<Params[]> => {
  const makes = await fetchVehicles();

  return makes.map((make: Params) => ({
    makeId: make.makeId,
    year: make.year,
  }));
};

const ResultPage = async ({ params }: { params: TParams }) => {
  const { makeId, year } = await params;

  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center absolute top-0 left-0 w-full h-full ">
          <CircleLoader color="#ffffff" />
        </div>
      }
    >
      <CarsList makeId={makeId} year={year} />
    </Suspense>
  );
};

export default ResultPage;
