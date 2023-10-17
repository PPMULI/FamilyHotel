import React from 'react'

function PersonalInfo() {
    const onChange = (e) => {
        e.preventDefault();
        console.log("OK");
      };
  return (
    <>
       <h1 className="signupheading">Signup Here</h1>
      <div className="container">
        <div className="row">
          <div className="col-lg-2"></div>
          <div className="col-lg-9">
            <form className="signupform">
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control signup-style"
                  id="email"
                  name="email"
                  onChange={onChange}
                  aria-describedby="emailHelp"
                />
                <small></small>
              </div>

              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  className="form-control signup-style"
                  id="name"
                  name="name"
                  onChange={onChange}
                  aria-describedby="emailHelp"
                />
                <small></small>
              </div>

              <div class="mb-3">
                <label for="disabledSelect" class="form-label">
                  Choose username
                </label>
                <select id="disabledSelect" class="form-select">
                  <option value="gh">Disabled select</option>
                  <option>Disabled select1</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  onChange={onChange}
                  className="form-control signup-style"
                  id="password"
                  name="password"
                />
                <small></small>
              </div>

              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="form-control signup-style"
                  id="cpassword"
                  onChange={onChange}
                  name="cpassword"
                />
                <small></small>
              </div>

              <div className="row">
                <div className="col-lg-6">
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Gender
                    </label>
                    <div class="card">
                      <div class="card-body">
                        <select name="gender" onChange={onChange} id="gender">
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="transgender">Transgender</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <small></small>
                </div>

                <div className="col-lg-6">
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Phone number:
                    </label>
                    <div class="card">
                      <div class="card-body">
                        <input
                          type="text"
                          className="form-control signup-style"
                          id="phone"
                          onChange={onChange}
                          name="phone"
                          placeholder="enter your phone number"
                          aria-describedby="emailHelp"
                        />
                      </div>
                    </div>
                    <small></small>
                  </div>
                </div>
              </div>

              <label>Address: </label>
              <div className="form-floating">
                <textarea
                  className="form-control signup-style"
                  placeholder="Leave a comment here"
                  id="address"
                  onChange={onChange}
                  name="address"
                ></textarea>
                <small></small>
              </div>

              <button
                type="submit"
                id="authentication"
                className="btn btn-outline-success"
              >
                Submit
              </button>
            </form>
          </div>
          {/* </div> */}
        </div>
      </div>
    </>
  )
}

export default PersonalInfo