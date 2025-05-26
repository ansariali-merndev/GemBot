import { useRef, useState } from "react";
import { Answer } from "./components/Answer";
import { BarLoader } from "react-spinners";
import { SideBar } from "./components/Sidebar";
import { Image } from "./assets/assets";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

export function App() {
  const [question, setQuestion] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [loader, setLoader] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const messageEndRef = useRef(null);

  const Payload = {
    contents: [
      {
        parts: [
          {
            text: question,
          },
        ],
      },
    ],
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleFormSubmit(e);
    }
  };

  const saveHistory = () => {
    console.log(question);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    saveHistory();
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
    setLoader(true);
    let res = await fetch(import.meta.env.VITE_API_URL, {
      method: "POST",
      body: JSON.stringify(Payload),
    });
    res = await res.json();
    setLoader(false);
    let dataStr = res.candidates[0].content.parts[0].text;
    setChatHistory((prev) => [...prev, { question, answer: dataStr }]);
    setQuestion("");
  };

  return (
    <section>
      <div className="grid md:grid-cols-5 relative">
        <img
          src={Image.menu}
          alt="menu"
          className="w-8 absolute top-1 left-2 md:hidden "
          onClick={() => setShowMenu(true)}
        />
        <div className="absolute right-6 top-2">
          <SignedOut>
            <SignInButton mode="modal" />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
        <div
          className={`md:hidden fixed z-[100] bg-zinc-800 w-64 h-screen left-0 top-0 transition-transform duration-600 ${
            showMenu ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <SideBar setShowMenu={setShowMenu} />
        </div>
        <div className="hidden md:block md:col-span-1 bg-zinc-800 h-screen">
          <SideBar />
        </div>
        <div className="md:col-span-4 mt-8">
          <div className="h-[80vh] overflow-y-scroll px-6 py-4">
            {chatHistory.length > 0 ? (
              chatHistory.map((chat, index) => (
                <div key={index}>
                  <div className="flex justify-end my-8">
                    <p className="bg-gray-700 px-4 py-2 rounded-br-3xl rounded-bl-3xl rounded-tl-3xl">
                      {chat.question}
                    </p>
                  </div>
                  <Answer ans={chat.answer} />
                </div>
              ))
            ) : (
              <div className="text-center text-zinc-400 mt-10">
                <p className="text-2xl md:text-4xl bg-gradient-to-br from-purple-100 via-indigo-600 to-green-400 text-transparent bg-clip-text">
                  Hello, I'm GemBot - Your AI Twin. Fire away!{" "}
                </p>
              </div>
            )}
            <div ref={messageEndRef} className="mt-4">
              {loader && <BarLoader color="blue" width={"100%"} />}
            </div>
          </div>

          <form
            onSubmit={handleFormSubmit}
            className="bg-zinc-700 w-80 md:w-1/2 mt-1 flex gap-2 border mx-auto p-2 border-zinc-500 rounded-lg"
          >
            <textarea
              className="px-2 0 py-1 h-12 md:h-[10vh] w-full outline-none text-sm overflow-y-auto break-words resize-none"
              placeholder="Message GemBot"
              autoComplete="off"
              required
              onKeyDown={handleKeyDown}
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              name="question"
              rows="1"
            />
            <button type="submit" className="px-2 cursor-pointer">
              Ask
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
