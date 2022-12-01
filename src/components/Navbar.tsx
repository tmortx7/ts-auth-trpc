import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import COC from '../../public/coc-logo.svg'

const Navbar = () => {
  const router = useRouter();
  // const searchBox = useRef(false);

  const { data: sessionData, status } = useSession();

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-none">
          <button className="btn-ghost btn-square btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-5 w-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
        <div className="flex-1">
         <COC className="h-10 ml-4"/>
        </div>
        <div className="flex-none">
          {status === "unauthenticated" && (
            <button
              className="btn-sm btn bg-white text-black hover:bg-green-600 hover:text-white"
              onClick={() => signIn()}
            >
              Sign Up / Login
            </button>
          )}
          {status === "authenticated" && (
            <div className="dropdown-end dropdown">
              <label
                tabIndex={0}
                className="placeholder btn-sm btn-circle avatar btn"
              >
                <div className="w-16 rounded-full bg-white text-neutral-content">
                  <span className="text-lg">J</span>
                </div>
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu rounded-box mt-4 w-52 bg-white text-black shadow"
              >
                <li className="hover:bg-gray-900 hover:text-white ">
                  <button onClick={() => router.push("/user")}>Profile</button>
                </li>
                <li className="hover:bg-gray-900 hover:text-white">
                  <button
                    onClick={() => {
                      signOut();
                      router.push("/");
                    }}
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          )}
          {status === "loading" && (
            <div className="placeholder btn-sm btn-circle avatar btn">
              <div className="w-16 rounded-full bg-primary text-primary">
                <span className="text-lg"></span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
