interface AnalysisResponse {
  userId: string;
  result: string;
  timestamp: Date;
}

let mockDatabase: AnalysisResponse[] = [];

export const insertResponse = (response: AnalysisResponse): void => {
  mockDatabase.push(response);
  console.log("Current mock DB: ", mockDatabase);
};

export const getResponsesByUserId = (userId: string): AnalysisResponse[] => {
  return mockDatabase.filter((response) => response.userId === userId);
};
