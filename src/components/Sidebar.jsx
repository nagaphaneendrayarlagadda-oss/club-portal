import { Link } from "react-router-dom";

function Sidebar() {

  return (

    <div className="bg-gray-800 text-white w-64 min-h-screen p-5">

      <h2 className="text-2xl mb-8">

        Dashboard

      </h2>

      <ul className="space-y-5">

        <li>

          <Link to="/dashboard">
            Dashboard
          </Link>

        </li>

        <li>

          <Link to="/chat">
            Chat
          </Link>

        </li>

        <li>

          <Link to="/profile">
            Profile
          </Link>

        </li>

      </ul>

    </div>

  );

}

export default Sidebar;