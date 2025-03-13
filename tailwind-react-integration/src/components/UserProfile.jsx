function UserProfile() {
  return (
    <div className="user-profile bg-gray-100 p-8 max-w-sm md:max-w-sm mx-auto my-20 rounded-lg shadow-lg sm:p-4 md:p-8 sm:max-w-xs hover:shadow-xl ">
      <img
        className="rounded-full w-24 h-24 md:h-36 md:w-36  sm:w-24 sm:h-24  mx-auto bg-gray-500 hover:scale-110 transition-transform duration-300 ease-in-out "
        src="https://via.placeholder.com/150"
        alt="User"
      />
      <h1
        className="text-blue-800 my-4 hover:text-blue-500  sm:text-lg
        md:text-xl"
      >
        John Doe
      </h1>
      <p className="text-gray-600 md:text-base sm:text-sm ">
        Developer at Example Co. Loves to write code and explore new
        technologies.
      </p>
    </div>
  );
}

export default UserProfile;
