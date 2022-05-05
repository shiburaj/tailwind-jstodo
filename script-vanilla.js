let add_todo_form = document.getElementById('add_todo_form');
let todo_stats = document.getElementById('todo_stats');
let todo_table = document.getElementById('todo_table');

add_todo_form.addEventListener('submit', function(e) {
    e.preventDefault();
    let todo_text = document.getElementById('todo_text').value;
    
    if (todo_text.length > 0) {
        let todo_row = document.createElement('tr');
        let todo_checkbox = document.createElement('input');
        let todo_text_td = document.createElement('td');
        let todo_delete_button = document.createElement('button');

        todo_checkbox.type = 'checkbox';
        todo_checkbox.className = 'todo_checkbox';
        todo_checkbox.addEventListener('click', function() {
            if (todo_checkbox.checked) {
                todo_text_td.className = 'todo_text_done';
            } else {
                todo_text_td.className = 'todo_text';
            }
        }
        );
        todo_text_td.className = 'todo_text';
        todo_text_td.innerHTML = todo_text;
        todo_delete_button.className = 'todo_delete_button';
        todo_delete_button.innerHTML = 'X';
        todo_delete_button.addEventListener('click', function() {
            todo_row.remove();
        }
        );
        todo_row.appendChild(todo_checkbox);
        todo_row.appendChild(todo_text_td);
        todo_row.appendChild(todo_delete_button);
        todo_table.appendChild(todo_row);
        document.getElementById('todo_text').value = '';
    }
}
);
