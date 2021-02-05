// Todos app


let input = prompt("What would you like to do?");
const todos = [];

while (input !== 'quit')
{
   if (input === 'list'){
      console.log("*************");
      for (let i = 0; i < todos.length; i++)
      {
         console.log(`${i}: ${todos[i]}`);
      }
      console.log("*************");
   }

   else if (input === 'new'){
      const newTodo = prompt("What is a new todo?");
      todos.push(newTodo);
      console.log(`${newTodo} added to the list`);
   }

   else if (input === 'delete'){
      const index = parseInt(prompt("Enter an index to delete"));

      if (!Number.isNaN(index)) {
         const deleted = todos.splice(index, 1);
         console.log(`Ok, deleted ${deleted}`);
      }
      else {
         console.log("Not a valid number");
      }
   }

   input = prompt("What would you like to do?");
}

console.log("Ok, You quit the app");