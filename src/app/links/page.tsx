import Image from "next/image";
import profilePic from "../../../public/ayush-profile.png";

export default function Home() {
  return (
    <>
      <main className="mx-auto mt-24 max-w-screen-md px-6">
        <div className="mx-auto w-fit overflow-hidden rounded-full border border-white border-opacity-50 bg-black/70 p-2">
          <Image
            src={profilePic}
            alt="Profile"
            priority
            className="h-28 w-28"
          />
        </div>
        <div className="my-8 space-y-4">
          <h1 className="text-center text-4xl font-bold">Ayush</h1>
          <p className="text-justify text-lg opacity-80">
            Experienced UI/UX and Frontend Developer. Passionate about building
            excellent software that improves the lives of those around me.
          </p>
          <div className="flex items-center justify-center gap-6">
            <button className="rounded-md border border-white border-opacity-50 px-4 py-2">
              Website
            </button>
            <button className="flex items-center gap-3 rounded-md border border-white border-opacity-50 px-4 py-2">
              <span>
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 9.50006C1 10.3285 1.67157 11.0001 2.5 11.0001H4L4 10.0001H2.5C2.22386 10.0001 2 9.7762 2 9.50006L2 2.50006C2 2.22392 2.22386 2.00006 2.5 2.00006L9.5 2.00006C9.77614 2.00006 10 2.22392 10 2.50006V4.00002H5.5C4.67158 4.00002 4 4.67159 4 5.50002V12.5C4 13.3284 4.67158 14 5.5 14H12.5C13.3284 14 14 13.3284 14 12.5V5.50002C14 4.67159 13.3284 4.00002 12.5 4.00002H11V2.50006C11 1.67163 10.3284 1.00006 9.5 1.00006H2.5C1.67157 1.00006 1 1.67163 1 2.50006V9.50006ZM5 5.50002C5 5.22388 5.22386 5.00002 5.5 5.00002H12.5C12.7761 5.00002 13 5.22388 13 5.50002V12.5C13 12.7762 12.7761 13 12.5 13H5.5C5.22386 13 5 12.7762 5 12.5V5.50002Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
              Email
            </button>
          </div>
        </div>

        <div>
          <div className="flex items-center rounded-lg border border-white border-opacity-50 px-4 py-3">
            {/* <Image
              src={profilePic}
              alt="Profile"
              priority
              className="h-20 w-20 rounded-md bg-slate-400"
            /> */}
            <div className="flex h-10 w-10 items-center justify-center rounded-md bg-gray-950 sm:h-20 sm:w-20">
              <svg
                width="50"
                height="50"
                // className="h-6 w-6 sm:h-12 sm:w-12"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <div className="ml-4 space-y-1 sm:ml-6">
              <h3 className="font-semibold capitalize">my github</h3>
              <p className="opacity-60">github.com/Ayush-v</p>
            </div>
            <a
              href="https://github.com/Ayush-v"
              target="_blank"
              rel="noreferrer"
              className="ml-auto rounded-md border border-white border-opacity-50 bg-black/70 p-4"
            >
              <svg
                // width="25"
                // height="25"
                className="h-4 w-4 sm:h-6 sm:w-6"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
