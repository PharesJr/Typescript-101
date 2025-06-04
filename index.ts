// Import the schoolData object from the data.ts file
// This provides access to the SchoolData interface and the student records
import { schoolData } from "./data/data";

// Define a function to print a student's record based on their ID
// The function takes a string parameter (studentId) and returns void since it only logs to the console
function printStudentRecord(studentId: string): void {
  // Use the Array.find method to locate the student with the matching studentId
  // The find method returns the first element that satisfies the provided testing function or undefined if none is found
  const student = schoolData.students.find((s) => s.studentId === studentId);

  // Check if the student was not found
  // If no student matches the provided ID, log an error message and exit the function
  if (!student) {
    console.log(`Student with ID ${studentId} not found.`);
    return;
  }

  // Log the student's record details to the console
  console.log(`Student Record:`);
  console.log(`ID: ${student.studentId}`); // Display the student's unique ID
  console.log(`Name: ${student.name}`); // Display the student's full name
  console.log(`Grade Level: ${student.gradeLevel}`); // Display the student's grade level
  console.log(`Subjects:`); // Header for the list of subjects and scores
  // Iterate over the subjects array (which contains [string, number] tuples)
  // Destructure each tuple into subject and score for clear logging
  student.subjects.forEach(([subject, score]) => {
    console.log(`  ${subject}: ${score}`); // Log each subject and its corresponding score
  });
  console.log(`Attendance: ${student.attendance}`); // Display the student's attendance status
}

// Example usage: Call the function with a sample student ID
// This demonstrates how to use the function to print the record of the student with ID "S006"
printStudentRecord("S006");