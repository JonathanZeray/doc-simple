interface AnalysisResponse {
  userId: string;
  result: string;
  timestamp: Date;
}

const STORAGE_KEY = "mockDatabase";

const getStoredData = (): AnalysisResponse[] => {
  if (typeof window === "undefined") return [];

  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

const saveToLocalStorage = (data: AnalysisResponse[]): void => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};

export const insertResponse = (response: AnalysisResponse): void => {
  const currentData = getStoredData();
  currentData.push(response);
  saveToLocalStorage(currentData);
};

export const getResponsesByUserId = (userId: string): AnalysisResponse[] => {
  const currentData = getStoredData();
  return currentData.filter((response) => response.userId === userId);
};
