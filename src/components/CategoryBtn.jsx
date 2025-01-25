const CategoryBtn = ({ name, onClick, isActive }) => {
  return (
    <button
      onClick={onClick}
      className={`h-[50px] w-[200px] uppercase rounded-full text-white border-2 border-[#FF0000] sm ${
        isActive
          ? "bg-[#FF0000] hover:bg-[#AA0000]"
          : "bg-[#AA0000] hover:bg-[#FF0000]"
      } transition`}
    >
      {name}
    </button>
  );
};

export default CategoryBtn;
