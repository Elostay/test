import axios from 'axios';

const baseUrl = 'https://vpic.nhtsa.dot.gov/api/vehicles';

export const fetchVehicles = async () => {
  const getVehicle = await axios.get(
    `${baseUrl}/GetMakesForVehicleType/car?format=json`,
  );
  const data = getVehicle.data.Results;

  return data;
};

export const fetchModels = async (makeId: string, year: string) => {
  const getModels = await axios.get(
    `${baseUrl}/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`,
  );
  const data = getModels.data.Results;

  console.log('💖 ~ fetchModels ~ getModels:', getModels);
  console.log('💖 ~ fetchModels ~ data:', data);
  return data;
};
