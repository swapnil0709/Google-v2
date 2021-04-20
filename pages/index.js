import Head from "next/head";
import Avatar from "../Components/Avatar/Avatar";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Google</title>
        <link
          rel="icon"
          href="https://img.icons8.com/color/96/000000/google-logo.png"
        />
      </Head>
      <header>
        {/* Nav */}
        <nav className="flex justify-end w-full p-3 text-sm text-gray-900 space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>
          {/* Icon */}

          <img
            className="cursor-pointer h-10 w-10 rounded-full p-2 hover:bg-gray-100"
            src="https://img.icons8.com/material/24/000000/circled-menu.png"
          />

          {/* Avatar */}
          <Avatar url="https://avatars.githubusercontent.com/u/23692968?s=400&u=4fc264fcf5d50c364ef2a3d9f7d390167e33b804&v=4" />
        </nav>
      </header>
    </div>
  );
}
