import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { checked } from "./checked";

function App() {
  const [count, setCount] = useState(0);
  const [username, setUsername] = useState("");
  const [rank, setRank] = useState("Newbie");

  const { checking } = checked;

  useEffect(() => {
    Swal.fire({
      title: "Username Pls UwU",
      input: "text",
      inputPlaceholder: "Enter Your Username",
      preConfirm: async (inputUsername) => {
        if (inputUsername !== null && inputUsername !== "") {
          setUsername(inputUsername);
        } else {
          const defaultUsername = "Anonymous";
          setUsername(defaultUsername);
        }
      },
    });
  }, []);

  const RankClick = () => {
    setCount(count + 1);

    const nextRank = checking.find((item) => count == item.num);

    if (nextRank) {
      setRank(nextRank.ranking);
    }

    const btn = document.getElementById("btn")
    if (count % 2 == 0) {
      btn.className = "border-2 border-green-600 rounded-full px-12 py-4 duration-500 bg-green-300"
    } else {
      btn.className = "border-2 border-green-600 rounded-full px-12 py-4 duration-500"
    }
  }

  return (
    <main className="bg-gray-900 italic h-screen">
      <div className="text-white text-5xl text-center font-semibold p-16 duration-700 hover:text-green-600">
        <h1>Doing To Play Play</h1>
      </div>

      <div className="flex justify-around items-center mx-8 space-x-[20rem]">
        <div className="border-2 border-green-600 px-[2rem] py-8">
          <div className="text-green-600">
            <h1 className="text-2xl text-center">Infomation</h1>
            <p className="text-lg mt-5">Username : {username}</p>
            <p className="text-lg mt-5">Rank : {rank}</p>
            <p className="text-lg mt-5">Count Click : {count}</p>
          </div>
        </div>

        <div className="text-white text-xl text-center duration-500 hover:text-green-800">
          <button
            className="border-2 border-green-600 rounded-full px-12 py-4 duration-500"
            onClick={RankClick}
            id="btn"
          >
            <p>;]</p>
          </button>
        </div>

        <div className="text-green-600">
          <p>
            Open Source : <a className="hover:text-green-500 duration-500" href="https://github.com/Narngisa">Narngisa</a>
          </p>
        </div>
      </div>
    </main>
  );
}

export default App;
