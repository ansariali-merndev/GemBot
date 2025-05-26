export const SideBar = ({ setShowMenu }) => {
  return (
    <div className="my-4">
      <p
        onClick={() => setShowMenu(false)}
        className="text-3xl md:hidden absolute top-0 w-62 text-gray-400 text-end"
      >
        &times;
      </p>
      <h2 className="text-2xl text-center font-semibold text-zinc-400">
        Recent History
      </h2>
      <div className="my-4">
        <p className="text-sm truncate px-4 text-zinc-400">
          how aremdbvdfjbdjbvbdnvcdnjdjhbdcsv you ?
        </p>
        <p className="text-sm truncate px-4 text-zinc-400">
          how aremdbvdfjbdjbvbdnvcdnjdjhbdcsv you ?
        </p>
        <p className="text-sm truncate px-4 text-zinc-400">
          how aremdbvdfjbdjbvbdnvcdnjdjhbdcsv you ?
        </p>
        <p className="text-sm truncate px-4 text-zinc-400">
          how aremdbvdfjbdjbvbdnvcdnjdjhbdcsv you ?
        </p>
        <p className="text-sm truncate px-4 text-zinc-400">
          how aremdbvdfjbdjbvbdnvcdnjdjhbdcsv you ?
        </p>
      </div>
      <div className="text-sm text-gray-400 absolute bottom-18 md:bottom-2 text-center w-64">
        <p>Please Sign in to save History</p>
        <p>code and develop by 🧡 Ansari Ali</p>
      </div>
    </div>
  );
};
