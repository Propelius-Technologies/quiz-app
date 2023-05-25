export interface mockDataType {
  question: string;
  option: {
    1: string;
    2: string;
    3: string;
    4: string;
  };
  type: string;
}

export interface TestDataType {
  id: number;
  questions: mockDataType[];
}
