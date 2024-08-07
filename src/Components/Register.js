
const Register = () => {
  return (
    <>
      <div class=" flex flex-col gap-5 bg-[#e4eeea] items-center justify-center min-h-screen">
        <span className="text-3xl">Login</span>
        <div className="border p-4 border-black">
          <form title="Login" className="flex flex-col gap-3">
            <div className=" flex gap-5">
              <div className="flex flex-col gap-0.5">
                <label className=""> FirstName</label>
                <input
                  type="name"
                  placeholder="FirstName"
                  className="focus:outline-none"
                />
              </div>
              <div className="flex flex-col gap-0.5">
                <label className="">LastName</label>
                <input
                  type="name"
                  placeholder="LastName"
                  className="focus:outline-none"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <label>Email</label>
              <input type="email" placeholder="E-Mail" className="focus:outline-double" />
            </div>
            <div className="">
              <label >SetPassWord</label>
              <input type="password" />
            </div>
            <div className="">
              <label >ConfirmPassword</label>
              <input type="password" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
