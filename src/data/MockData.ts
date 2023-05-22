export const mockQuestionData = [
  {
    question:
      "Which of the following is used in React.js to increase performance?",
    option: {
      1: "Virtual DOM",
      2: "Original DOM",
      3: "Both A and B",
      4: "None of the above",
    },
    type: "mcq",
  },
  {
    question: " Which of the following is the correct name of React.js?",
    option: {
      1: "React",
      2: "React.js",
      3: "ReactJS",
      4: "All of the above",
    },
    type: "mcq",
  },
  {
    question: "Which of the following are the advantages of React.js?",
    option: {
      1: "React.js can increase the application's performance with Virtual DOM.",
      2: "React.js is easy to integrate with other frameworks such as Angular, BackboneJS since it is only a view library.",
      3: "React.js can render both on client and server side.",
      4: "All of the above",
    },
    type: "mcq",
  },
  {
    question:
      "Which of the following command is used to install create-react-app?",
    option: {
      1: "npm install -g create-react-app",
      2: "npm install create-react-app",
      3: "npm install -f create-react-app",
      4: "install -g create-react-app",
    },
    type: "mcq",
  },
  {
    question:
      "Which of the following lifecycle events React components have at the highest level?",
    option: {
      1: "Destruction",
      2: "Initialization",
      3: "State/Property Updates",
      4: "All of the above.",
    },
    type: "mcq",
  },
  {
    question: "Why is the usage of setState?",
    option: {
      1: "Invoke code after the setState operation is done.",
      2: "Replace the state completely instead of the default merge action.",
      3: "Access the previous state before the setState operation.",
      4: "None of the above.",
    },
    type: "mcq",
  },
  {
    question: "Which of the following best defines the key prop?",
    option: {
      1: "Key prop is used to look pretty, and there is no benefit whatsoever.",
      2: "Key prop is a way for React to identify a newly added item in a list and compare it during the diffing algorithm.",
      3: "It is one of the attributes in HTML.",
      4: "It is NOT commonly used in an array.",
    },
    type: "mcq",
  },
  {
    question: "Which of the following method is not a part of ReactDOM?",
    option: {
      1: "ReactDOM.destroy()",
      2: "ReactDOM.hydrate()",
      3: "ReactDOM.createPortal()",
      4: "ReactDOM.findDOMNode()",
    },
    type: "mcq",
  },
  {
    question: "How can you set a default value for an uncontrolled form field?",
    option: {
      1: "By using the value property",
      2: "By using the defaultValue property",
      3: "By using the default property",
      4: "It is assigned automatically.",
    },
    type: "mcq",
  },
  {
    question:
      "We can update the state in React.js by calling to setState() method. These calls are:",
    option: {
      1: "Synchronous in nature.",
      2: "Asynchronous in nature.",
      3: "Are asynchronous but can be made synchronous when required.",
      4: "None of the above.",
    },
    type: "mcq",
  },
  {
    question:
      "Which of the following statement is true for controlled components in React.js?",
    option: {
      1: "The source of truth is DOM.",
      2: "The source of truth can be anything.",
      3: "The source of truth is a component state.",
      4: "None of the above.",
    },
    type: "mcq",
  },
  {
    question:
      "What changes would appear in the component as soon as the state of the React component is changed?",
    option: {
      1: "It will do nothing; you have to call render method to render the component again.",
      2: "It will re-render the component.",
      3: "It can be created again from scratch.",
      4: "None of the above.",
    },
    type: "mcq",
  },
  {
    question:
      "Which of the following statement is true for uncontrolled components in React.js?",
    option: {
      1: "The source of truth is DOM.",
      2: "The source of truth is a component state.",
      3: "The source of truth can be anything.",
      4: "None of the above.",
    },
    type: "mcq",
  },
  {
    question:
      "In which of the following condition, the React.js Lifecycle method static getDerivedSateFromProps(props, state) is called?",
    option: {
      1: "The component is created for the first time.",
      2: "The state of the component is updated.",
      3: "Both of the above.",
      4: "None of the above.",
    },
    type: "mcq",
  },
  {
    question:
      "What is the use of the create-react-app command in the React.js application?",
    option: {
      1: "It is used to update a React app.",
      2: "It is used to create a new React app.",
      3: "It is used to install dependencies.",
      4: "None of the above.",
    },
    type: "mcq",
  },
  {
    question: "What is true for the keys given to a list of elements in React?",
    option: {
      1: "Unique in the DOM.",
      2: "Unique among the siblings only.",
      3: "Do not require to be unique.",
      4: "None of the above.",
    },
    type: "mcq",
  },
  {
    question:
      "Which of the following command is used to install create-react-app?",
    option: {
      1: "npm install -g create-react-app",
      2: "npm install create-react-app",
      3: "npm install -f create-react-app",
      4: "install -g create-react-app",
    },
    type: "mcq",
  },
  {
    question:
      "A class is a type of function, but instead of using the keyword function to initiate it, which keyword do we use?",
    option: {
      1: "Constructor",
      2: "Class",
      3: "Object",
      4: "DataObject",
    },
    type: "mcq",
  },
  {
    question: "What is the default port where webpack-server runs?",
    option: {
      1: "3000",
      2: "8080",
      3: "3030",
      4: "6060",
    },
    type: "mcq",
  },
  {
    question:
      "What is the declarative way to render a dynamic list of components based on values in an array?",
    option: {
      1: "Using the reduce array method",
      2: "Using the <Each /> component",
      3: "Using the Array.map() method",
      4: "With a for/while loop",
    },
    type: "mcq",
  },
];

export const testData = [
  { id: 1, questions: mockQuestionData },
  { id: 2, questions: mockQuestionData },
];

// Que-Ans Flow

// {
//   question: "",
//   option: {
//     1: "",
//     2: "",
//     3: "",
//     4: "",
//   },
//   type: "mcq" || "descriptive",
// },
