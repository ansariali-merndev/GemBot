export const SideBar = ({ setShowMenu, history, clearHistory }) => {
  return (
    <div className="my-4">
      <p
        onClick={() => setShowMenu(false)}
        className="text-3xl md:hidden absolute top-0 w-62 text-gray-400 text-end cursor-pointer"
      >
        &times;
      </p>
      <h2 className="text-2xl text-center font-semibold text-zinc-400">
        Recent History
      </h2>
      <div className="my-4 overflow-y-scroll">
        {history.map((item, index) => (
          <p key={index} className="text-zinc-300 truncate mx-4">
            {item}
          </p>
        ))}
      </div>
      <div className="text-sm text-gray-400 absolute bottom-18 md:bottom-2 text-center w-64">
        <div className="flex justify-end my-5 mx-4">
          <button
            onClick={clearHistory}
            className="bg-gray-600 px-2 py-1 cursor-pointer rounded-[4px] text-white"
          >
            Clear History
          </button>
        </div>
        <p>Please Sign in to save History</p>
        <p>code and develop by 🧡 Ansari Ali</p>
      </div>
    </div>
  );
};
