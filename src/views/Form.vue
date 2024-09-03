<template>
  <body>
    <div class="container mt-5">
      <h2 class="mb-4">Create Schedule</h2>

      <!-- Polja za unos osnovnih podataka i smjena -->
      <div class="mb-3">
        <label for="companyName" class="form-label">Company Name</label>
        <input type="text" class="form-control" id="companyName" v-model="companyName" placeholder="Enter company name">
      </div>

      <div class="mb-3">
        <label for="numberOfEmployees" class="form-label">Number of Employees</label>
        <input type="number" class="form-control" id="numberOfEmployees" placeholder="Enter number of employees" v-model="numberOfEmployees">
      </div>

      <div class="mb-3">
        <label for="employeeNames" class="form-label">Employee Names</label>
        <textarea class="form-control" id="employeeNames" rows="3" placeholder="Enter employee names, separated by commas" v-model="employeeNames"></textarea>
      </div>

      <!-- Polja za unos nedostupnost zaposlenih -->
      <div v-for="(employee, index) in employeesArray" :key="index">
        <h5>{{ employee }}</h5>
        <div class="mb-3" v-for="day in daysOfWeek" :key="day">
          <label class="form-label">{{ day }} - Unavailable Shifts</label>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" :id="`morning-${day}-${index}`" v-model="availability[employee][day][1]">
            <label class="form-check-label" :for="`morning-${day}-${index}`">Morning Shift</label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" :id="`afternoon-${day}-${index}`" v-model="availability[employee][day][2]">
            <label class="form-check-label" :for="`afternoon-${day}-${index}`">Afternoon Shift</label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" :id="`night-${day}-${index}`" v-model="availability[employee][day][3]">
            <label class="form-check-label" :for="`night-${day}-${index}`">Night Shift</label>
          </div>
        </div>
      </div>

      <!-- Gumb za kreiranje rasporeda -->
      <div class="pad">
      <button type="submit" class="btn btn-primary " @click="generateTable()">Create Schedule</button>
      </div>

      <!-- Prikaz rasporeda u tablici -->
      <div v-if="schedule" class="mt-5 pad">
      <h2 style="text-align:center;">Company: {{this.companyName}}</h2>
        <h3 class="mb-4">Generated Schedule</h3>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>Day</th>
              <th>Morning Shift</th>
              <th>Afternoon Shift</th>
              <th>Night Shift</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="day in daysOfWeek" :key="day">
              <td>{{ day }}</td>
              <td>{{ schedule[day].shifts[1] || 'N/A' }}</td>
              <td>{{ schedule[day].shifts[2] || 'N/A' }}</td>
              <td>{{ schedule[day].shifts[3] || 'N/A' }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </body>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      companyName: null,
      numberOfEmployees: null,
      employeeNames: null,
      daysOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      availability: {}, // Skladišti nedostupnost zaposlenih
      schedule: null // Skladišti generirani raspored
    };
  },
  computed: {
    employeesArray() {
      // Djeljenje imena zaposlenih po prezimenima i uklanjanje praznih stavki
      return this.employeeNames ? this.employeeNames.split(',').map(name => name.trim()).filter(name => name !== '') : [];
    }
  },
  watch: {
    employeeNames(newVal) {
      // Kada se promijene imena zaposlenih, sesetiramo dostupnost
      this.availability = {};
      this.employeesArray.forEach(name => {
        this.availability[name] = {};
        this.daysOfWeek.forEach(day => {
          this.availability[name][day] = { 1: false, 2: false, 3: false }; // Default vrijednosti
        });
      });
    }
  },
  methods: {
    async generateTable() {
      try {
        const employees = this.employeesArray.map(name => {
          const unavailableDays = [];

          this.daysOfWeek.forEach(day => {
            [1, 2, 3].forEach(shift => {
              if (this.availability[name][day][shift]) {
                unavailableDays.push({ day: day, shift: shift });
              }
            });
          });

          return { name: name, unavailableDays: unavailableDays };
        });

        const postData = {
          companyName: this.companyName,
          numberOfEmployees: this.numberOfEmployees,
          employees: employees
        };

        let response = await axios.post('https://schedule-backend-vfnk.onrender.com/schedule', postData);
        this.schedule = response.data;
      } catch (e) {
        console.log(e);
      }
    }
  }
};
</script>
<style >
.pad{
  padding-bottom: 100px;
}
</style>