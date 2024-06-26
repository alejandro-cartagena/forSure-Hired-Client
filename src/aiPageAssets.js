export const softwareEngineerJobDescription = `Job Title: Software Engineer

Role Summary: We are looking for a Software Engineer to join our diverse and dedicated team. This position is an excellent opportunity for those seeking to grow their skills and experience in software development while working on projects with significant impact.

Responsibilities:
- Develop and implement new software solutions.
- Collaborate with teams to understand objectives, design features, and meet specific requirements.
- Improve and maintain existing software to ensure strong functionality and optimization.
- Recommend changes to existing software applications, as necessary, to ensure excellent functionality.
- Write efficient, secure, well-documented, and clean JavaScript code.
- Participate in all phases of the development life cycle.

Requirements:
- Degree in Computer Science or related field.
- 0-3 years of experience in software development.
- Demonstrated problem-solving abilities and attention to detail.
- Proficiency with at least one programming language.
- Familiarity with various operating systems and platforms.
- Good understanding of software development principles.
- Excellent communication and teamwork skills.
- Demonstrated ability to manage and prioritize tasks independently.`;

export const openAIPrompt = `Based on the job description I will provide you at the end of my prompt, I need you to generate 10 interview questions relevant to the role, responsibilities, and qualifications mentioned, divided between technical and behavioral aspects. 

Guidelines for Formatting:
1. Behavioral Questions:
- Generate five behavioral questions relevant to the role, responsibilities, and qualifications mentioned in the job description.
- For each question, provide one correct answer that a candidate might actually give in response to the question. Do not give me the answer in third person like "The candidate should...". The answer should be a direct, first-person response from the candidate. The answer should be detailed and specific, demonstrating the candidate's fit for the position.
Incorrect Answers Guidelines (DO NOT IGNORE):
- Generate three incorrect answers that are plausible and related to the job description. These answers should:
     -- Be similar in structure or content to the correct answer.
     -- Include common misconceptions or mistakes.
     -- Use relevant technical jargon.
     -- Be nuanced and subtly incorrect, making them challenging to distinguish from the correct answer. Incorrect answers should be believable and not obviously wrong.

2. Technical Questions:
- Generate five technical questions relevant to the role, responsibilities, and qualifications mentioned in the job description.
- For each question, generate one correct answer that demonstrates the candidate's technical skills and knowledge. Ensure this is a direct, first-person response from the candidate.
Incorrect Answers Guidelines (DO NOT IGNORE):
- Generate three incorrect answers that are plausible and related to the job description. These answers should:
     -- Be similar in structure or content to the correct answer.
     -- Include common misconceptions or mistakes.
     -- Use relevant technical jargon.
     -- Be nuanced and subtly incorrect, making them challenging to distinguish from the correct answer. Incorrect answers should be believable and not obviously wrong.


Guidelines for Incorrect Answer Structure:
- The incorrect answers will be stored in an attribute called "incorrectAnswers" within a JSON object.
- "incorrectAnswers" will be a 2D array, where each sub-array contains three generated incorrect answers relevant to a specific question.
- Refer to the Incorrect Answers Guidelines to generate each incorrect answer
- Each index in the "incorrectAnswers" array corresponds to the related question.
     -- For example:
          --- incorrectAnswers[0] will contain three incorrect answers for Behavioral Question 1.
          --- incorrectAnswers[1] will contain three incorrect answers for Behavioral Question 2, and so forth.
- Ensure that the incorrect answers are plausible and relevant, making them challenging to distinguish from the correct answer.


Guidelines for JSON Structure:
- Please generate the response in the following JSON format, strictly adhering to the structure provided,  
and ensure there are no backticks, no additional text, or formatting. 
- My goal is to use a JSON.parse  so make sure that the response you generate is in the perfect JSON format and free of bugs and typos.  
- Review the JSON you generate twice if possible to make sure that I can parse it 100% of the time. 
- A common error I have been getting is this: 
Error parsing JSON: SyntaxError: Unexpected token ']', ...", 
        ], 
       "... is not valid JSON 
    at JSON.parse 
- Another error I got is: 
Error parsing JSON: SyntaxError: Unexpected token ']', ...""],
      ]
    },
 "... is not valid JSON
- Make sure to not have any errors when I run JSON.parse.
- I emphasize, PLEASE no errors in the JSON, triple check if you have to. 
- Remember, everything that is between angle brackets should be generated by you and relevant to the  
instructions I have provided
- Generate exactly the amount of questions, answers, and incorrect answers I have provided in the JSON structure. 
 
JSON Structure to be Generated:      
{ 
  response: { 
    behavioral: { 
      questions: [ 
        "<generated behavioral question 1>", 
        "<generated behavioral question 2>", 
        "<generated behavioral question 3>", 
        "<generated behavioral question 4>", 
        "<generated behavioral question 5>", 
      ], 
      correctAnswers: [ 
        "<correct answer for behavioral question 1>", 
        "<correct answer for behavioral question 2>", 
        "<correct answer for behavioral question 3>", 
        "<correct answer for behavioral question 4>", 
        "<correct answer for behavioral question 5>", 
      ], 
      incorrectAnswers: [ 
        [ 
          "<incorrect answer 1 for behavioral question 1>", 
          "<incorrect answer 2 for behavioral question 1>", 
          "<incorrect answer 3 for behavioral question 1>", 
        ], 
        [ 
          "<incorrect answer 1 for behavioral question 2>", 
          "<incorrect answer 2 for behavioral question 2>", 
          "<incorrect answer 3 for behavioral question 2>", 
        ], 
        [ 
          "<incorrect answer 1 for behavioral question 3>", 
          "<incorrect answer 2 for behavioral question 3>", 
          "<incorrect answer 3 for behavioral question 3>", 
        ], 
        [ 
          "<incorrect answer 1 for behavioral question 4>", 
          "<incorrect answer 2 for behavioral question 4>", 
          "<incorrect answer 3 for behavioral question 4>", 
        ], 
        [ 
          "<incorrect answer 1 for behavioral question 5>", 
          "<incorrect answer 2 for behavioral question 5>", 
          "<incorrect answer 3 for behavioral question 5>", 
        ], 
      ], 
    }, 
    technical: { 
      questions: [ 
        "<generated technical question 1>", 
        "<generated technical question 2>", 
        "<generated technical question 3>", 
        "<generated technical question 4>", 
        "<generated technical question 5>", 
      ], 
      correctAnswers: [ 
        "<correct answer for technical question 1>", 
        "<correct answer for technical question 2>", 
        "<correct answer for technical question 3>", 
        "<correct answer for technical question 4>", 
        "<correct answer for technical question 5>", 
      ], 
      incorrectAnswers: [ 
        [ 
          "<incorrect answer 1 for technical question 1>", 
          "<incorrect answer 2 for technical question 1>", 
          "<incorrect answer 3 for technical question 1>", 
        ], 
        [ 
          "<incorrect answer 1 for technical question 2>", 
          "<incorrect answer 2 for technical question 2>", 
          "<incorrect answer 3 for technical question 2>", 
        ], 
        [ 
          "<incorrect answer 1 for technical question 3>", 
          "<incorrect answer 2 for technical question 3>", 
          "<incorrect answer 3 for technical question 3>", 
        ], 
        [ 
          "<incorrect answer 1 for technical question 4>", 
          "<incorrect answer 2 for technical question 4>", 
          "<incorrect answer 3 for technical question 4>", 
        ], 
        [ 
          "<incorrect answer 1 for technical question 5>", 
          "<incorrect answer 2 for technical question 5>", 
          "<incorrect answer 3 for technical question 5>", 
        ], 
      ], 
    }, 
  }, 
}
  
- Run a JSON.parse on this JSON structure to test if it's valid. If it's not, try again until it's valid
`;

// export const openAIPrompt = `Based on this job description, I need you to generate 10 interview questions relevant to the role,
// responsibilities, and qualifications mentioned, divided between technical and behavioural aspects. There should be exactly five
// behavioral questions and five technical questions. Each question should be suitable for assessing the candidate's fit for the
// position.

// Furthermore, for each question, please write three incorrect answers and one correct answer.
// Make sure that the attribute "incorrectAnswers" is a 2D array, with each array inside containing
// three incorrect answers relevant to the question asked. For example, in the "incorrectAnswers" 2D
// array, each index represents the question relevant. To further explain what I mean, incorrectAnswers[0]
// represents the array containing the three incorrect answers for behavioral question 1,
// incorrectAnswers[1] represents the array containing the three incorrect answers for behavioral
// question 2, and so on.

// Please generate the response in the following JSON format, strictly adhering to the structure provided,
// and ensure there are no backticks, no additional text, or formatting. My goal is to use a JSON.parse
// so make sure that the response you generate is in the perfect JSON format and free of bugs and typos.
// Review the JSON you generate twice if possible to make sure that I am able to parse it 100% of the time.
// A common error I have been getting is this: Error parsing JSON: SyntaxError: Unexpected token ']', ...",
//         ],
//        "... is not valid JSON
//     at JSON.parse
// Make sure to not have any errors when I run JSON.parse.
// Remember, everything that is between angle brackets should be generated by you and relevant to the
// instructions I have provided:

// {
//   response: {
//     behavioral: {
//       questions: [
//         "<generated behavioral question 1>",
//         "<generated behavioral question 2>",
//         "<generated behavioral question 3>",
//         "<generated behavioral question 4>",
//         "<generated behavioral question 5>",
//       ],
//       correctAnswers: [
//         "<correct answer for behavioral question 1>",
//         "<correct answer for behavioral question 2>",
//         "<correct answer for behavioral question 3>",
//         "<correct answer for behavioral question 4>",
//         "<correct answer for behavioral question 5>",
//       ],
//       incorrectAnswers: [
//         [
//           "<incorrect answer 1 for behavioral question 1>",
//           "<incorrect answer 2 for behavioral question 1>",
//           "<incorrect answer 3 for behavioral question 1>",
//         ],
//         [
//           "<incorrect answer 1 for behavioral question 2>",
//           "<incorrect answer 2 for behavioral question 2>",
//           "<incorrect answer 3 for behavioral question 2>",
//         ],
//         [
//           "<incorrect answer 1 for behavioral question 3>",
//           "<incorrect answer 2 for behavioral question 3>",
//           "<incorrect answer 3 for behavioral question 3>",
//         ],
//         [
//           "<incorrect answer 1 for behavioral question 4>",
//           "<incorrect answer 2 for behavioral question 4>",
//           "<incorrect answer 3 for behavioral question 4>",
//         ],
//         [
//           "<incorrect answer 1 for behavioral question 5>",
//           "<incorrect answer 2 for behavioral question 5>",
//           "<incorrect answer 3 for behavioral question 5>",
//         ],
//       ],
//     },
//     technical: {
//       questions: [
//         "<generated technical question 1>",
//         "<generated technical question 2>",
//         "<generated technical question 3>",
//         "<generated technical question 4>",
//         "<generated technical question 5>",
//       ],
//       correctAnswers: [
//         "<correct answer for technical question 1>",
//         "<correct answer for technical question 2>",
//         "<correct answer for technical question 3>",
//         "<correct answer for technical question 4>",
//         "<correct answer for technical question 5>",
//       ],
//       incorrectAnswers: [
//         [
//           "<incorrect answer 1 for technical question 1>",
//           "<incorrect answer 2 for technical question 1>",
//           "<incorrect answer 3 for technical question 1>",
//         ],
//         [
//           "<incorrect answer 1 for technical question 2>",
//           "<incorrect answer 2 for technical question 2>",
//           "<incorrect answer 3 for technical question 2>",
//         ],
//         [
//           "<incorrect answer 1 for technical question 3>",
//           "<incorrect answer 2 for technical question 3>",
//           "<incorrect answer 3 for technical question 3>",
//         ],
//         [
//           "<incorrect answer 1 for technical question 4>",
//           "<incorrect answer 2 for technical question 4>",
//           "<incorrect answer 3 for technical question 4>",
//         ],
//         [
//           "<incorrect answer 1 for technical question 5>",
//           "<incorrect answer 2 for technical question 5>",
//           "<incorrect answer 3 for technical question 5>",
//         ],
//       ],
//     },
//   },
// }`;
