const BASE_URL = 'http://localhost:3002';

async function fetchData(endpoint) {
  try {
    const url = `${BASE_URL}/${endpoint}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (e) {
    console.error(`Ошибка при загрузке данных из ${endpoint}:`, e);
    return null;  
  }
}

export async function fetchspecializations() {
  return fetchData('specialisations');
}

export async function fetchDoctors() {
  return fetchData('doctors');
}
