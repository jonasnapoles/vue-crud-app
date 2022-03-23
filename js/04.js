const app = new Vue({
  el: "#app",
  data: {
    title: "Task Managemente",
    taskes: [],
    newTask: "",
  },
  methods: {
    //Add->Create
    addTask: function () {
      //  console.log('you clicked', this.newTask);
      this.taskes.push({
        name: this.newTask,
        status: false,
      });
      // console.log(this.taskes)
      this.newTask = "";
      localStorage.setItem("task-vue", JSON.stringify(this.taskes));
    },
    //Edit
    editTask: function (index) {
      //  console.log('Edit ', index);
      this.taskes[index].status = true;
      localStorage.setItem("task-vue", JSON.stringify(this.taskes));
    },
    //  Delete
    deleteTask: function (index) {
      //   console.log(index);
      this.taskes.splice(index, 1);
      localStorage.setItem("task-vue", JSON.stringify(this.taskes));
    },
  },

  created: function () {
    let dataDB = JSON.parse(localStorage.getItem("task-vue"));
    //   console.log(dataDB)
    if (dataDB === null) {
      this.taskes = [];
    }else{
        this.taskes = dataDB;
    }
  },
});
