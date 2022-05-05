Vue.createApp({
    data() {
      return {
        newTodoText: '',
        todos: [
            { text: 'Learn JavaScript', completed: true },
            { text: 'Learn Vue', completed: false },
            { text: 'Build something awesome', completed: false }
            
        ]
      }
    },
    methods: {
        addTodo() {
            if(this.newTodoText=='')
            {
                return;
            }
            this.todos.push({
                text: this.newTodoText,
                completed: false
            });
            this.newTodoText = '';
        },
        markTodoComplete(key) {
            this.todos[key].completed = true;
        },
        markTodoIncomplete(key) {
            this.todos[key].completed = false;
        },
        removeTodo(key) {
            this.todos.splice(key, 1);
        }

    },
    computed: {
        remaining() {
            return this.todos.filter(todo => !todo.completed).length;
        },
        completed() {
            return this.todos.filter(todo => todo.completed).length;
        }
    }
}).mount('#app')