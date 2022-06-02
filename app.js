const app = Vue.createApp({

    data(){

        return {
            
            task : '',
            tasks : [],
            isTasksVisible : true
        }

    },

    computed:{

        buttonCaption(){

            return this.isTasksVisible ? 'Hide List' : 'Show List'
        }

    },
    
    methods : {

        addTask(){

            this.tasks.push(this.task)
            this.task=''
        },

        toggleTaskLists(){
            this.isTasksVisible = !this.isTasksVisible 
        }

    }
})

app.mount('#assignment')