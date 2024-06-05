## 0x04. Typescript

**0. Creating an interface for a student** `[task_0/js/main.ts, task_0/package.json, task_0/.eslintrc.js, task_0/tsconfig.json, task_0/webpack.config.js]` >> Typescript script that defines an interface named `Student`, that has the following properties; `firstName(string)`, `lastName(string)`, `age(number)`, and `location(string)`. It also defines an array named `studentList` that contains two `Student` variables. It uses Vanilla Javascript to render a table for each element in the array, appending a new row (that contains the first name and location of the student) to the table.

**1. Let's build a Teacher interface** `[task_1/js/main.ts, task_1/webpack.config.js, task_1/tsconfig.json, task_1/package.json]` >> Typescript script that defines an interface named `Teacher`, that has the following properties:
	- `firstName(string)` (should be modifiable)
	- `lastName(string)` (should be modifiable)
	- `fullTimeEmployee(boolean)` (should always be defined)
	- `yearsOfExperience(number)` (is optional)
	- `location(string)` ((should always be defined)
The interface also has the possibility to add any attribute to the Object like `contract(boolean)` without specifying the name of the attribute.

**2. Extending the Teacher class** `[task_1/js/main.ts]` >> Typescript script that defines an interface named `Directors` with a required attribute named `numberOfReports(number)`, that extends `Teacher` interface.

**3. Printing teachers** `[task_1/js/main.ts]` >> Typescript script that defines a function called `printTeacher`, that accepts two arguments (`firstName` and `lastName`) and returns the first letter of the first name, and the full lastName. It also defines an interface for the function named `printTeacherFunction`.

**4. Writing a class** `[task_1/js/main.ts]` >> Typescript script that defines a class named `StudentClass`, that has a constructor that accepts `firstName(string)` and `lastName(string)` arguments. It has a method named `workOnHomework` that returns the string `Currently working`, and another method named `displayName` that returns the firstName of the student. The class is described through an interface.

**5. Advanced types Part 1** `[task_2/js/main.ts, task_2/webpack.config.js, task_2/tsconfig.json, task_2/package.json]` >> Typescript script that defines interfaces `DirectorInterface` and `TeacherInterface`, classes `Director ` (that implements `DirectorInterface`) and `Teacher` (that implements `TeacherInterface`), and a function `createEmployee` that returns either a `Director` or a `Teacher` instance, and accepts 1 argument named `salary` (which is either a number ot string).

**6. Creating functions specific to employees** `[task_2/js/main.ts]` >> Typescript script that defines the functions `isDirector` and `executeWork`.

**7. String literal types** `[task_2/js/main.ts]` >> Typescript script that defines a string literal type named `Subjects`, that allows a variable to have the value `Math` or `History` only. It also defines a function named `teachClass` that takes `todayClass` as an argument and returns the string `Teaching Math` if `todayClass` is `Math`, or the string `Teaching History` if `todayClass` is `History`.

**8. Ambient Namespaces** `[task_3/js/main.ts, task_3/js/interface.ts, task_3/js/crud.d.ts]` >> Create TypeScript scripts `interface.ts` and `crud.d.ts` that further define various functionality.

**9. Namespace & Declaration merging** `[task_4/package.json, task_4/tsconfig.json, task_4/js/subjects/Cpp.ts, task_4/js/subjects/Java.ts, task_4/js/subjects/React.ts, task_4/js/subjects/Subject.ts, task_4/js/subjects/Teacher.ts]` >> Create TypeScript scripts `Teacher.ts`, `Subject.ts`, `Cpp.ts`, `React.ts`, `Java.ts` that further define various functionality.

**10. Update task_4/js/main.ts** `[task_4/js/main.ts]` >> Typescript script that creates and exports constants `cpp`, `java` and `react`, and creates and exports one Teacher object `cTeacher` with `experienceTeachingC = 10`. For each constant (which are the subjects), it logs to the console `<subject name>`, sets `cTeacher` as the teacher, and calls two methods namely `getRequirements` and `getAvailableTeacher` and prints the strings they return.

**11. Brand convention & Nominal typing** `[task_5/js/main.ts, task_5/package.json, task_5/webpack.config.js, task_5/tsconfig.json]` >> Typescript script that defines the interfaces `MajorCredits` and `MinorCredits`, and the functions `sumMajorCredits` and `sumMinorCredits`.
