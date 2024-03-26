import { Link } from "react-router-dom";
import { Input } from "../components";

const Login = () => {
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <Input
                type="text"
                name="email"
                placeholder="Email"
                label="Email"
              />
            </div>
            <div>
              <Input
                type="password"
                name="password"
                placeholder="Password"
                label="Password"
              />
              <div className="flex justify-end text-sm mt-2">
                <Link
                  to="/forgot-password"
                  className="font-semibold text-primary hover:text-accent"
                >
                  Forgot password?
                </Link>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not registered?{" "}
            <Link
              to="/register"
              className="font-semibold leading-6 text-primary hover:text-accent"
            >
              Create an Account
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
export default Login