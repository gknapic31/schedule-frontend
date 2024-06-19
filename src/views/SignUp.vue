<template>
    <div class="login-page">
      <main>
        <div class="login-block">
          <h1>Log in into your account</h1>
          <form action="#">
            <div class="form-group">
              <div class="input-group">
                <span class="input-group-addon"><i class="fa fa-user ti-user"></i></span>
                <input type="text" class="form-control" placeholder="Your name">
              </div>
            </div>
            <hr class="hr-xs">
            <div class="form-group">
              <div class="input-group">
                <span class="input-group-addon"><i class="fa fa-envelope ti-email"></i></span>
                <input type="text" class="form-control" placeholder="Your email address">
              </div>
            </div>
            <hr class="hr-xs">
            <div class="form-group">
              <div class="input-group">
                <span class="input-group-addon"><i class="fa fa-lock ti-unlock"></i></span>
                <input type="password" class="form-control" placeholder="Choose a password">
              </div>
            </div>
            <button class="btn btn-primary btn-block" type="submit">Log in</button>

          </form>
        </div>
        <div class="login-links">
          <p class="text-center">Already have an account? <a class="txt-brand" href="Login">Log in</a></p>
        </div>
      </main>
    </div>
  </template>
  

<style scoped lang="scss">
html, body {
  height: 100%;
  margin: 0;
}

.login-page {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(to right, rgba(255,0,0,0), rgba(24,51,108));
}

.login-page main {
  width: 100%;
  max-width: 460px;
}

.login-block {
  background-color: #fff;
  padding: 60px;
  box-shadow: 0 3px 50px 0 rgba(0,0,0,.1);
  text-align: center;
  border-radius: 5px;
}

.login-block h1,
.login-block h6 {
  font-family: Open Sans, sans-serif;
  color: #96a2b2;
  letter-spacing: 1px;
}

.login-block h1 {
  font-size: 22px;
  margin-bottom: 60px;
  margin-top: 40px;
}

.login-block h6 {
  font-size: 11px;
  text-transform: uppercase;
  margin-top: 0;
}

.login-block .form-group {
  margin-top: 15px;
  margin-bottom: 15px;
}

.login-block .form-control,
.login-block .form-control:focus,
.login-block .input-group-addon,
.login-block .input-group-addon:focus {
  background-color: transparent;
  border: none;
}

.login-block .form-control {
  font-size: 17px;
  border-radius: 0;
}

.login-block input:-webkit-autofill {
  -webkit-box-shadow: 0 0 0 1000px #fff inset;
  -webkit-text-fill-color: #818a91;
  -webkit-transition: none;
  transition: none;
}

.login-block .input-group-addon {
  color: #2c77d8;
  font-size: 19px;
  opacity: .5;
}

.login-block .btn-block {
  margin-top: 30px;
  padding: 15px;
  background-color: #12264d;
  border: #12264d;
}

.btn-block:hover{
    background-color: #2c77d8 !important;
    border: #2c77d8;
}

.login-block .hr-xs {
  margin-top: 5px;
  margin-bottom: 5px;
}

.login-footer {
  margin-top: 60px;
  opacity: .5;
  transition: opacity .3s ease-in-out;
}

.login-footer:hover {
  opacity: 1;
}

.login-links {
  padding: 15px 5px 0;
  font-size: 13px;
  color: #fff;
}

.login-links:after {
  content: '';
  display: table;
  clear: both;
}

.login-links a {
  color: #fff;
  opacity: .9;
}

.login-links a:hover {
  color: #2c77d8;
  opacity: 1;
}

@media (max-width: 767px) {
  .login-page main {
    padding: 30px 15px;
  }

  .login-block {
    padding: 20px;
  }
}

</style>
