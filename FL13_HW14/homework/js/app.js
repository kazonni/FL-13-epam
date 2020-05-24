function Student(name, email) {
  let data = {
    name: name,
    email: email,
    homeworkResults: []
  };
  return {
    getName() {
      return data.name;
    },

    getEmail() {
      return data.email;
    },

    addHomeworkResult(topic, success) {
      let homework = {
        topic: topic,
        success: success
      }
      data.homeworkResults.push(homework);
    },

    getHomeworkResults() {
      return data.homeworkResults;
    }
  }
}

function FrontendLab(students, failedLimit) {
  let data = {
    studentsList: students,
    failedHomeworksLimit: failedLimit
  };
  return {
    printStudentsList() {
      for(let i = 0; i < data.studentsList.length; i++){
        console.log(`name: ${data.studentsList[i].name}, email: ${data.studentsList[i].email}`);
        console.log(data.studentsList[i].homeworks);
      }
    },

    addHomeworkResults(homeworkResults) {
      for(let i = 0; i < data.studentsList.length; i++){
        if(!data.studentsList[i].homeworks){
          data.studentsList[i].homeworks = [];
        }
        let homework = {
          topic: homeworkResults.topic,
          success: homeworkResults.results[i].success
        };
        data.studentsList[i].homeworks.push(homework);
      }
    },
    printStudentsEligibleForTest(){
      let counter = 0;
      for(let i = 0; i < data.studentsList.length; i++){
        for(let j = 0; j < data.studentsList[i].homeworks.length; j++){
          if(!data.studentsList[i].homeworks[j].success){
            counter = counter + 1;
          }
        }
        if(counter <= data.failedHomeworksLimit){
          console.log(`name: ${data.studentsList[i].name}, email: ${data.studentsList[i].email}`);
        }
        counter = 0;
      }
    }
  }
}
