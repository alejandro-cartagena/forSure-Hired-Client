import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/auth.context";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

import { BeatLoader } from "react-spinners";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "green",
};
const color = "#65a30d";

function LoginPage() {
  const [userInfo, setUserInfo] = useState({ loginInfo: "", password: "" });
  const { login, authError } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const passwordInput = document.getElementById("password");
    showPassword
      ? (passwordInput.type = "text")
      : (passwordInput.type = "password");
  }, [showPassword]);

  const handleChange = (e) => {
    setUserInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    await login(userInfo);
    setLoading(false);
  };

  return (
    <div className="flex min-h-[72vh] flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-slate-200">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img className="mx-auto h-20 w-auto" src={logo} alt="kanban-board" />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-slate-700">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleLogin}>
          <div>
            <label
              htmlFor="loginInfo"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Username or Email
            </label>
            <p className="text-sm text-slate-500">(Username: test123)</p>
            <div className="mt-2">
              <input
                id="loginInfo"
                name="loginInfo"
                type="text"
                value={userInfo.loginInfo}
                onChange={handleChange}
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>

              <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-green-600 hover:text-green-500"
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <p className="text-sm text-slate-500">(Password: Password@123)</p>
            <div className="mt-2 relative">
              <input
                id="password"
                name="password"
                type="password"
                value={userInfo.password}
                onChange={handleChange}
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              <div
                className="absolute top-1.5 right-2 text-slate-600 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <FontAwesomeIcon icon={faEye} />
                ) : (
                  <FontAwesomeIcon icon={faEyeSlash} />
                )}
              </div>
            </div>
          </div>
          {loading ? (
            <div className="text-center my-12">
              <BeatLoader
                color={color}
                loading={true}
                cssOverride={override}
                size={20}
                aria-label="Loading Spinner"
                data-testid="loader"
                speedMultiplier={1}
              />
            </div>
          ) : (
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
              >
                Sign in
              </button>
            </div>
          )}
        </form>
        {authError && (
          <p className="text-center mt-2 text-red-500 font-semibold">
            {authError}
          </p>
        )}
        <p className="mt-10 text-center text-sm text-gray-500">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="font-semibold leading-6 text-green-600 hover:text-indigo-500"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
