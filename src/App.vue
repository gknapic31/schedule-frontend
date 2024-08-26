<template>
  <div id="app">
    <nav id="nav" class="navbar navbar-expand-lg ">
          <a class="navbar-brand" href="#">
            <router-link to="/">SCHEDULIFY</router-link> 
          </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarToggler"
        aria-controls="navbarToggler"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>  
      </button>
      <div class="collapse navbar-collapse" id="navbarToggler">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item" v-if="!authdata.authenticated">
            <router-link to="/login" class="nav-link">LOG IN</router-link> 
          </li>
          <li class="nav-item" v-if="!authdata.authenticated">
            <router-link to="/signup" class="nav-link">SIGN UP</router-link> 
          </li>
          <li class="nav-item" style="color:white" v-if="authdata.authenticated">
            <p class="nav-link" style="color:white"> Copmany:  {{ companyname }}</p> 
          </li>
          <li class="nav-item" v-if="authdata.authenticated">
            <p @click="logout()" class="nav-link">Logout</p> 
          </li>
        </ul>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>
import { Auth } from "@/services"

export default {
  data(){
    return{
      authdata:Auth.state,
      companyname:''
    }
  },
  methods:{
    logout(){
      Auth.logout();
      this.$router.push({path: "/"}).then(() => location.reload())
    },
    getusr() {
      try{
      let user = Auth.getUser();
     this.companyname = user.companyname
      }catch(e){
        console.log(e)
      }
    }
  },
  created(){
      this.getusr();
  }
}
</script>

<style lang="scss">
#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;  
}

#nav {
 padding: 10px;
 background-color: 	#12264d;

  a {
    color: #fff;
    text-decoration: none !important;

    &.router-link-exact-active {
      color: #2c77d8;
      text-decoration: none !important;
    }
  }

  a:hover{
    color: #2c77d8;
  }

  a:focus{
    color: #2c77d8;
  }
}

.navbar-collapse{
  justify-content: end !important;
}
</style>