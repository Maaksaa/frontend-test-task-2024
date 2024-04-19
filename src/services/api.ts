import { Specialization, Doctor } from '@/types/types';

const BASE_URL = 'http://localhost:3002';

async function fetchData<T>(endpoint: string): Promise<T | null> {
  try {
    const url = `${BASE_URL}/${endpoint}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json() as T;
  } catch (e) {
    console.error(`Ошибка при загрузке данных из ${endpoint}:`, e);
    return null;  
  }
}


export async function fetchSpecializations(): Promise<Specialization[] | null> {
  return fetchData<Specialization[]>('specialisations');
}


export async function fetchDoctors(): Promise<Doctor[] | null> {
  return fetchData<Doctor[]>('doctors');
}