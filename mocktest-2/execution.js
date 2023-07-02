/*
In JavaScript, the execution context is an abstract concept that helps manage the execution of code. It contains information about the variables, functions, and scope that are currently in play during the execution of a piece of code. Each time a function is called, a new execution context is created, forming an execution stack known as the "call stack."

   +------------------+
   | Global Execution |
   |      Context     |
   +------------------+

   The global execution context is the default and initial execution context. It represents the global scope of your JavaScript code.When the JavaScript engine starts executing your code, it creates the global execution context. It sets up the global object and initializes variables and functions declared in the global scope.

   +------------------+
   | Global Execution |
   |      Context     |
   +------------------+
          |  |  |
          |  |  |
          V  V  V
   +------------------+
   | Function Context |
   |    (Call Stack)  |
   +------------------+

   When a function is invoked or called, a new execution context is created and pushed onto the call stack. This execution context is known as the function execution context or function context.
    Each time a function is called, a new function execution context is created, and it contains information specific to that particular function call. 

   +------------------+
   | Global Execution |
   |      Context     |
   +------------------+
          |
          |
          V
   +------------------+
   | Function Context |
   |    (Call Stack)  |
   +------------------+
          |
          |
          V
   +------------------+
   | Function Context |
   |    (Call Stack)  |
   +------------------+
          |
          |
          V
       (Empty)


*/
