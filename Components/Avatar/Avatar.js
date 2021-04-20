function Avatar({ url }) {
  return (
    <img
      src={url}
      alt="profile pic"
      className="hover:bg-gray-200 p-1 rounded-full h-9 cursor-pointer transition duration-150 transform hover:scale-110"
      loading="lazy"
    />
  );
}

export default Avatar;
