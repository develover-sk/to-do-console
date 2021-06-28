function start() {
    let input = prompt('What would you like to do?')
    const todos = ['Demo Todo'];
    while (input !== 'quit' && input !== 'q') {
        if (input === 'list') {
            console.log('************')
            for (let i = 0; i < todos.length; i++) {
                console.log(`${i}: ${todos[i]}`);
            }
            console.log('************')
        } else if (input === 'new') {
            const newTodo = prompt('Ok, What is the new todo?');
            todos.push(newTodo);
            console.log('A new Todo added to the list');
        } else if (input === 'delete') {
            const index = parseInt(prompt('Ok, Which todo to delete? Enter Index:'));
            if (!Number.isNaN(index)) {
                const delVal = todos[index];
                const deleted = todos.splice(index, 1);
                console.log(`Deleted todo at index ${index}: ${delVal}`);
            } else {
                console.log("NAN");
            }
        } else {
            console.log('Enter a Valid Command')
        }
        input = prompt('what would you like to do?')
    }

    console.log("You Quit the App");
}