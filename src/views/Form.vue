<template>
<body>
  <div class="container mt-5">
    <h2 class="mb-4">Create Schedule</h2>

      <div class="mb-3">
        <label for="companyName" class="form-label">Company Name</label>
        <input type="text" class="form-control" id="companyName"  v-model="companyName" placeholder="Enter company name">
      </div>
      <div class="mb-3">
        <label for="numberOfEmployees" class="form-label"  >Number of Employees</label>
        <input type="number" class="form-control" id="numberOfEmployees" placeholder="Enter number of employees" v-model="numberOfEmployees">
      </div>
      <div class="mb-3">
        <label for="employeeNames" class="form-label">Employee Names</label>
        <textarea class="form-control" id="employeeNames" rows="3" placeholder="Enter employee names, separated by commas" v-model="employeeNames"></textarea>
      </div>
      <div class="mb-3">
        <label for="workShift" class="form-label">Morning Shift</label>
        <select class="form-select" id="workShift" v-model="morningShift">
          <option selected :value="null">Select work shift</option>
          <option value="7AM-3PM">7AM-3PM</option>
          <option value="8AM-4PM">8AM-4PM</option>
          <option value="9AM-5PM">9AM-5PM</option>
        </select>
      </div>
      <div class="mb-3">
        <label for="workShift" class="form-label">Afternoon Shift</label>
        <select class="form-select" id="workShift" v-model="afternoonShift">
          <option selected :value="null">Select work shift</option>
          <option value="1PM-9PM">1PM-9PM</option>
          <option value="2PM-10PM">2PM-10PM</option>
          <option value="3PM-11PM">3PM-11PM</option>
        </select>
      </div>
      <div class="mb-3">
        <label for="workShift" class="form-label">Night Shift</label>
        <select class="form-select" id="workShift" v-model="nightShift">
          <option selected :value="null">Select work shift</option>
          <option value="11PM-7PM">11PM-7PM</option>
          <option value="12AM-8AM">12AM-8AM</option>
          <option value="1AM-9AM">1AM-9AM</option>
        </select>
      </div>
      <button type="submit" class="btn btn-primary" @click="generateTable()">Create Schedule</button>
 
  </div>


</body>

</template>

<script>
import axios from 'axios';



export default {
    data(){
        return{
            companyName:null,
            numberOfEmployees:null,
            employeeNames:null,
            morningShift:null,
            afternoonShift:null,
            nightShift:null
        };
    },
    methods:{

        async generateTable(){
            try{
   
            let aa = this.employeeNames.split(',');

// Step 2: Trim each name to remove any leading or trailing whitespace
let namesArray = aa.map(name => name.trim());

// Step 3: Remove any empty strings if any
let employeeNamesArray = namesArray.filter(name => name !== '');
            let postData = {
                companyName:this.companyName,
                numberOfEmployees:this.numberOfEmployees,
                employeeNames:employeeNamesArray,
                morningShift:this.morningShift,
                afternoonShift:this.afternoonShift,
                nightShift:this.nightShift
            };
           
            let response = await axios.post('http://localhost:3000/schedule', postData)
            console.log(response)
        }catch(e){
            console.log(e);
        }
        }

    },
   

};
</script>
