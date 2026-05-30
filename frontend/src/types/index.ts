export interface Question {
  question_id: number;
  question: string;
  hint: string;
  answer_index: number;
  choices: string[];
}
