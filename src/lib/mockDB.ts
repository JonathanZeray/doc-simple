interface AnalysisResponse {
  userId: string;
  timestamp: Date;
}

let mockDatabase: AnalysisResponse[] = [];

export const insertResponse = (response: AnalysisResponse): void => {
  mockDatabase.push(response);
};

export const getResponsesByUserId = (userId: string): AnalysisResponse[] => {
  return mockDatabase.filter((response) => response.userId === userId);
};
