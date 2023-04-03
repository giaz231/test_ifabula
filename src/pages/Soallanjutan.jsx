import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../features/loginSlice";

const Soallanjutan = () => {
  // soalhashing
  const getSHA256Hash = async (input) => {
    const textAsBuffer = new TextEncoder().encode(input);
    const hashBuffer = await window.crypto.subtle.digest(
      "SHA-256",
      textAsBuffer
    );
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hash = hashArray
      .map((item) => item.toString(16).padStart(2, "0"))
      .join("");
    return hash;
  };

  console.log(getSHA256Hash("01112018kenpriaifabula"));
  // soalhashing

  const [username, setUser] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.loginStore.isLoggedIn);
  const user = useSelector((state) => state.loginStore.user);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      login({
        username,
        password,
      })
    );
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div
            className={`text-center lg:text-left ${isLoggedIn ? "" : "hidden"}`}
          >
            <label className="text-5xl font-bold">
              Selamat Datang {user && user.username}
            </label>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button
              className={`btn btn mt-1 ${isLoggedIn ? "" : "hidden"}`}
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
          <div
            className={`card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ${
              isLoggedIn ? "hidden" : ""
            }`}
          >
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Username</span>
                  </label>
                  <input
                    type="text"
                    placeholder="username"
                    className="input input-bordered"
                    value={username}
                    onChange={(e) => setUser(e.target.value)}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary" onClick={handleSubmit}>
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Soallanjutan;
