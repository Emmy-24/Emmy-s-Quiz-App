// Questions Array
const Questions = [
     {
          number: 1,
          Question: "What does HTML stand for?",
          answer: "Hyper Text Markup Language",
          Option: [
               "Hyper Text Markup Language",
               "High Tech Modern Language",
               "Hyperlink and Text Markup Language",
          ]
     },
     {
          number: 2,
          Question: "Which HTML tag is used to create a hyperlink?",
          answer: "<a>",
          Option: [
               "<link>",
               "<a>",
               "<href>",
          ]
     },
     {
          number: 3,
          Question: "Which tag is used for inserting an image in HTML?",
          answer: "<img>",
          Option: [
               "<img>",
               "<picture>",
               "<src>",
          ]
     },
     {
          number: 4,
          Question: "What is the correct way to define the document type in HTML5?",
          answer: "<!DOCTYPE html>",
          Option: [
               "<doctype html>",
               "<html doctype>",
               "<!DOCTYPE html>",
          ]
     },
     {
          number: 5,
          Question: "Which tag is used to define a table row?",
          answer: "<tr>",
          Option: [
               "<td>",
               "<tr>",
               "<th>",
          ]
     },
     {
          number: 6,
          Question: "Which HTML element is used to define important text?",
          answer: "<strong>",
          Option: [
               "<important>",
               "<b>",
               "<strong>",
          ]
     },
     {
          number: 7,
          Question: "What is the purpose of the <head> tag in HTML?",
          answer: "It contains metadata and links to external resources",
          Option: [
               "It defines the body of the document",
               "It contains metadata and links to external resources",
               "It is used to structure the main content",
          ]
     },
     {
          number: 8,
          Question: "Which HTML element is used for the largest heading?",
          answer: "<h1>",
          Option: [
               "<h1>",
               "<h6>",
               "<head>",
          ]
     },
     {
          number: 9,
          Question: "Which attribute specifies the alternative text for an image?",
          answer: "alt",
          Option: [
               "alt",
               "src",
               "title",
          ]
     },
     {
          number: 10,
          Question: "Which tag is used to create a list with bullet points?",
          answer: "<ul>",
          Option: [
               "<ol>",
               "<ul>",
               "<ol>",
          ]
     },
     {
          number: 11,
          Question: "Which property is used to change text color in CSS?",
          answer: "color",
          Option: [
               "font-color",
               "text-color",
               "color",
          ]
     },
     {
          number: 12,
          Question: "Which property controls the space between elements?",
          answer: "margin",
          Option: [
               "spacing",
               "margin",
               "padding",
          ]
     },
     {
          number: 13,
          Question: "Which of the following is NOT a valid CSS unit?",
          answer: "dp",
          Option: [
               "px",
               "em",
               "dp",
          ]
     },
     {
          number: 14,
          Question: "What does display: flex; do?",
          answer: "Makes an element flexible for layout",
          Option: [
               "Hides the element",
               "Makes an element flexible for layout",
               "Centers the element",
          ]
     },
     {
          number: 15,
          Question: "Which pseudo-class selects the first child of an element?",
          answer: ":first-child",
          Option: [
               ":nth-child(1)",
               ":first-child",
               ":first",
          ]
     },
     {
          number: 16,
          Question: "Which CSS property is used to make text bold?",
          answer: "font-weight",
          Option: [
               "font-weight",
               "text-style",
               "bold",
          ]
     },
     {
          number: 17,
          Question: "Which property is used to change the background color?",
          answer: "background-color",
          Option: [
               "background-color",
               "bg-color",
               "color",
          ]
     },
     {
          number: 18,
          Question: "How do you apply CSS to a specific element with an ID?",
          answer: "#elementID",
          Option: [
               "#elementID",
               ".elementID",
               "elementID",
          ]
     },
     {
          number: 19,
          Question: "Which CSS property is used to control the transparency of an element?",
          answer: "opacity",
          Option: [
               "opacity",
               "visibility",
               "transparency",
          ]
     },
     {
          number: 20,
          Question: "What is the default position of an HTML element?",
          answer: "static",
          Option: [
               "relative",
               "absolute",
               "static",
          ]
     },
     {
          number: 21,
          Question: "Which keyword is used to declare a variable in JavaScript?",
          answer: "var",
          Option: [
               "var",
               "int",
               "string",
          ]
     },
     {
          number: 22,
          Question: "How do you write a comment in JavaScript?",
          answer: "// comment",
          Option: [
               "<!-- comment -->",
               "// comment",
               "/* comment */",
          ]
     },
     {
          number: 23,
          Question: "Which method is used to remove the last item from an array?",
          answer: "pop()",
          Option: [
               "pop()",
               "shift()",
               "remove()",
          ]
     },
     {
          number: 24,
          Question: "Which symbol is used for strict equality in JavaScript?",
          answer: "===",
          Option: [
               "==",
               "===",
               "!=",
          ]
     },
     {
          number: 25,
          Question: "Which function is used to convert a string to an integer?",
          answer: "parseInt()",
          Option: [
               "parseInt()",
               "toInteger()",
               "stringToInt()",
          ]
     },
     {
          number: 26,
          Question: "Which keyword is used to define a constant in JavaScript?",
          answer: "const",
          Option: [
               "var",
               "let",
               "const",
          ]
     },
     {
          number: 27,
          Question: "What will console.log(typeof []) print?",
          answer: "object",
          Option: [
               "object",
               "array",
               "undefined",
          ]
     },
     {
          number: 28,
          Question: "Which method is used to add an element to an array?",
          answer: "push()",
          Option: [
               "append()",
               "push()",
               "add()",
          ]
     },
     {
          number: 29,
          Question: "Which function is used to execute code at a specific time interval?",
          answer: "setInterval()",
          Option: [
               "setTimeout()",
               "setInterval()",
               "clearTimeout()",
          ]
     },
     {
          number: 30,
          Question: "Which JavaScript framework/library is most commonly used for front-end development?",
          answer: "React",
          Option: [
               "Node.js",
               "React",
               "Django",
          ]
     },
     {
          number: 31,
          Question: "What is React?",
          answer: "A JavaScript library for building user interfaces",
          Option: [
               "A programming language",
               "A JavaScript library for building user interfaces",
               "A database management system",
          ]
     },
     {
          number: 32,
          Question: "Which command is used to create a new React app?",
          answer: "npx create-react-app my-app",
          Option: [
               "npm create-react-app my-app",
               "npx create-react-app my-app",
               "react init my-app",
          ]
     },
     {
          number: 33,
          Question: "What is JSX in React?",
          answer: "A JavaScript extension that allows writing HTML in JavaScript",
          Option: [
               "A JavaScript extension that allows writing HTML in JavaScript",
               "A CSS preprocessor",
               "A database query language",
          ]
     },
     {
          number: 34,
          Question: "Which function is used to update state in React?",
          answer: "setState()",
          Option: [
               "setState()",
               "updateState()",
               "changeState()",
          ]
     },
     {
          number: 35,
          Question: "What is a React component?",
          answer: "A function or class that returns JSX",
          Option: [
               "A function or class that returns JSX",
               "A built-in JavaScript object",
               "A database model",
          ]
     },
     {
          number: 36,
          Question: "Which hook is used to manage state in functional components?",
          answer: "useState",
          Option: [
               "useEffect",
               "useState",
               "useReducer",
          ]
     },
     {
          number: 37,
          Question: "Which method is called when a React component is first rendered?",
          answer: "componentDidMount()",
          Option: [
               "componentDidMount()",
               "componentWillUpdate()",
               "render()",
          ]
     },
     {
          number: 38,
          Question: "How do you pass data from a parent component to a child component in React?",
          answer: "Using props",
          Option: [
               "Using props",
               "Using state",
               "Using hooks",
          ]
     },
     {
          number: 39,
          Question: "What is the purpose of the useEffect hook in React?",
          answer: "To handle side effects in functional components",
          Option: [
               "To modify state variables",
               "To fetch data from an API",
               "To handle side effects in functional components",
          ]
     },
     {
          number: 40,
          Question: "Which React function is used to handle user events?",
          answer: "onClickHandler",
          Option: [
               "handleEvent",
               "onClickHandler",
               "eventHandler",
          ]
     },
     {
          number: 41,
          Question: "What is Git?",
          answer: "A version control system",
          Option: [
               "A version control system",
               "A programming language",
               "A text editor",
          ]
     },
     {
          number: 42,
          Question: "Which command is used to initialize a Git repository?",
          answer: "git init",
          Option: [
               "git start",
               "git init",
               "git new",
          ]
     },
     {
          number: 43,
          Question: "How do you check the status of files in Git?",
          answer: "git status",
          Option: [
               "git status",
               "git check",
               "git log",
          ]
     },
     {
          number: 44,
          Question: "Which command is used to commit changes in Git?",
          answer: "git commit -m 'message'",
          Option: [
               "git save",
               "git push",
               "git commit -m 'message'",
          ]
     },
     {
          number: 45,
          Question: "What does git clone do?",
          answer: "Copies a repository from GitHub to the local machine",
          Option: [
               "Creates a duplicate branch",
               "Copies a repository from GitHub to the local machine",
               "Creates a backup of a repository",
          ]
     },
     {
          number: 46,
          Question: "Which command is used to create a new branch in Git?",
          answer: "git branch new-branch",
          Option: [
               "git branch new-branch",
               "git create branch",
               "git checkout -b new-branch",
          ]
     },
     {
          number: 47,
          Question: "How do you switch to another branch in Git?",
          answer: "git checkout branch-name",
          Option: [
               "git switch",
               "git change branch-name",
               "git checkout branch-name",
          ]
     },
     {
          number: 48,
          Question: "Which command is used to push changes to a remote repository?",
          answer: "git push origin branch-name",
          Option: [
               "git push origin branch-name",
               "git send",
               "git upload",
          ]
     },
     {
          number: 49,
          Question: "How do you undo the last commit in Git?",
          answer: "git reset --soft HEAD~1",
          Option: [
               "git undo",
               "git reset --soft HEAD~1",
               "git delete commit",
          ]
     },
     {
          number: 50,
          Question: "What is GitHub used for?",
          answer: "Hosting and managing Git repositories",
          Option: [
               "Creating databases",
               "Writing and executing code",
               "Hosting and managing Git repositories",
          ]
     },
];