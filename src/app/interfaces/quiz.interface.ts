export interface Quiz {
    question: string;
    imgUrl: string;
    options: string[];
    correctOption: string;
    type: string;
    selectedOption: string;
}