// Define a tuple type for subject scores to enforce a strict structure
// A tuple is used here to ensure each subject entry consists of exactly two elements: a string (subject name) and a number (score)
// Tuples provide type safety by guaranteeing the order and type of elements, unlike arrays which can have varying lengths and types
type SubjectScore = [string, number];

// Define an enum-like type for attendance status to restrict values to a predefined set
// This ensures attendance can only be one of these specific values, improving type safety and code clarity
type AttendanceStatus = "Present" | "Absent" | "Excused";

// Define an interface for the Student structure to enforce consistent shape of student objects
// Interfaces in TypeScript provide a contract for object shapes, ensuring all required properties are present with correct types
interface Student {
  studentId: string; // Unique identifier for the student
  name: string; // Student's full name
  gradeLevel: number; // Numeric grade level (e.g., 9 for freshman)
  subjects: SubjectScore[]; // Array of subject-score tuples for the student's grades
  attendance: AttendanceStatus; // Attendance status restricted to the defined options
}

// Define an interface for the overall school data structure
// This encapsulates the collection of students, ensuring the data structure is predictable and type-safe
interface SchoolData {
  students: Student[]; // Array of student objects
}

// Export a constant containing the school data
// The data is typed as SchoolData to ensure it adheres to the defined interface
// This makes the data accessible to other modules while maintaining type safety
export const schoolData: SchoolData = {
  students: [
    {
      studentId: "S001", // Unique student ID
      name: "Alice Johnson", // Student's full name
      gradeLevel: 9,
      subjects: [
        // Array of subject-score tuples for this student
        ["Math", 85],
        ["English", 92],
        ["Science", 88],
      ],
      attendance: "Present", // Attendance status for the day
    },
    {
      studentId: "S002",
      name: "Bob Smith",
      gradeLevel: 10,
      subjects: [
        ["Math", 78],
        ["English", 85],
        ["History", 90],
      ],
      attendance: "Absent",
    },
    {
      studentId: "S003",
      name: "Charlie Brown",
      gradeLevel: 9,
      subjects: [
        ["Math", 92],
        ["English", 87],
        ["Science", 95],
      ],
      attendance: "Present",
    },
    {
      studentId: "S004",
      name: "Diana Wilson",
      gradeLevel: 11,
      subjects: [
        ["Physics", 88],
        ["English", 91],
        ["History", 84],
      ],
      attendance: "Excused",
    },
    {
      studentId: "S005",
      name: "Emma Davis",
      gradeLevel: 10,
      subjects: [
        ["Math", 90],
        ["Chemistry", 86],
        ["English", 93],
      ],
      attendance: "Present",
    },
    {
      studentId: "S006",
      name: "Frank Miller",
      gradeLevel: 12,
      subjects: [
        ["Biology", 79],
        ["English", 82],
        ["Math", 85],
      ],
      attendance: "Absent",
    },
    {
      studentId: "S007",
      name: "Grace Lee",
      gradeLevel: 9,
      subjects: [
        ["Science", 94],
        ["Math", 89],
        ["History", 91],
      ],
      attendance: "Present",
    },
    {
      studentId: "S008",
      name: "Henry Taylor",
      gradeLevel: 11,
      subjects: [
        ["Physics", 83],
        ["English", 88],
        ["Math", 87],
      ],
      attendance: "Present",
    },
    {
      studentId: "S009",
      name: "Isabella Martinez",
      gradeLevel: 10,
      subjects: [
        ["Chemistry", 90],
        ["English", 85],
        ["History", 92],
      ],
      attendance: "Excused",
    },
    {
      studentId: "S010",
      name: "James Anderson",
      gradeLevel: 12,
      subjects: [
        ["Math", 81],
        ["Biology", 88],
        ["English", 90],
      ],
      attendance: "Present",
    },
  ],
};
