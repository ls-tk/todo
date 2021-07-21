const vm = new Vue ({
    el: '#app',
    data: {
        inputText:'',
        todoList:[],
    },
    computed:{
        completedTodoList(){
            return this.todoList.filter((value)=>{
            return value.isDone
            })
        }
    },
    methods: {
        addTodoList(){
            this.todoList.push({
            isDone:false,
            text:this.inputText
            })
            this.inputText=""
        },
        deleteTodo(num){
            this.todoList.splice(num,1)
        }
    },
})