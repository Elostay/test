import axios from 'axios';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const fetchVehicles = async () => {
  try {
    const getVehicle = await axios.get(
      `${baseUrl}/GetMakesForVehicleType/car?format=json`,
    );
    const data = getVehicle.data.Results;

    return data;
  } catch (error) {
    console.error('Error fetching vehicles:', error);
    throw new Error('Failed to fetch vehicle makes.');
  }
};

export const fetchModels = async (makeId: string, year: string) => {
  try {
    const getModels = await axios.get(
      `${baseUrl}/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`,
    );
    const data = getModels.data.Results;

    return data;
  } catch (error) {
    console.error('Error fetching models:', error);
    throw new Error('Failed to fetch models.');
  }
};
