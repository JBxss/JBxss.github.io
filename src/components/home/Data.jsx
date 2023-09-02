import React from "react";
import Typewriter from "typewriter-effect";
import { Bio } from "./Rol";

const Data = () => {
  return (
    <div className="home__data">
      <h1 className="home__title">
        Hi, I am<br />Juan Bossa{" "}
        <svg
          viewBox="0 0 64 64"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          class="iconify iconify--emojione home__hand"
          preserveAspectRatio="xMidYMid meet"
          fill="#000000"
          width="36"
          height="36"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M34 42.3l7.8 1.5l6.4-32.9c.4-2.2-1-4.4-3.1-4.8c-2.2-.4-4.3 1.1-4.7 3.3L34 42.3"
              fill="#ffe1bd"
            >
              {" "}
            </path>{" "}
            <path
              d="M45.2 6.1c-.3-.1-.5-.1-.8-.1c1.8.7 2.8 2.6 2.4 4.6l-6.4 32.9l1.4.3l6.4-32.9c.5-2.3-.9-4.4-3-4.8"
              fill="#e6b796"
            >
              {" "}
            </path>{" "}
            <path
              d="M26 43.3h9.4V7c0-2.7-2.1-5-4.7-5C28.2 2 26 4.2 26 7v36.3"
              fill="#ffe1bd"
            >
              {" "}
            </path>{" "}
            <path
              d="M30.8 2c-.2 0-.5 0-.7.1c2.3.4 4 2.4 4 4.9v36.4h1.4V7c0-2.8-2.1-5-4.7-5"
              fill="#e6b796"
            >
              {" "}
            </path>{" "}
            <path
              d="M21 43.2l8-2.1L20.3 8c-.6-2.3-2.9-3.7-5.1-3.2c-2.2.6-3.5 2.9-2.9 5.2L21 43.2"
              fill="#ffe1bd"
            >
              {" "}
            </path>{" "}
            <path
              d="M15.2 4.8l-.6.3c2-.1 3.8 1.2 4.4 3.3l8.7 33.1l1.4-.4L20.3 8c-.6-2.3-2.9-3.7-5.1-3.2"
              fill="#e6b796"
            >
              {" "}
            </path>{" "}
            <path
              d="M4 13.4c-1.9.9-2.5 3.3-1.5 5.3L15.7 45l6.7-3.4L9.2 15.3c-1-2-3.3-2.8-5.2-1.9"
              fill="#ffe1bd"
            >
              {" "}
            </path>{" "}
            <path
              d="M4 13.4c-.2.1-.4.2-.6.4c1.7-.5 3.6.4 4.5 2.2l13.2 26.3l1.3-.6L9.2 15.3c-1-2-3.3-2.8-5.2-1.9"
              fill="#e6b796"
            >
              {" "}
            </path>{" "}
            <path
              d="M61.7 29.3c-1.6-3.1-6.6-2.9-11.7 2.7c-3.6 3.9-4.3 5.2-7.9 5.1V33s-7.7-5.7-23-3.1c0 0-8.7 1.2-8.7 5.8c0 0-1.5 11.1 1.6 18.1c4.6 10.4 28.2 13.1 35.6-4.6c1.5-3.5 4.5-6.1 7.2-9.4c3.1-4 8.6-7.2 6.9-10.5"
              fill="#ffe1bd"
            >
              {" "}
            </path>{" "}
            <g fill="#e6b796">
              {" "}
              <path d="M61.7 29.3c-.3-.6-.7-1-1.2-1.4c.1.1.2.2.2.4c1.7 3.4-3.8 6.5-7.1 10.5c-2.7 3.3-5.7 5.9-7.2 9.4c-6.4 15.3-25 15.3-32.8 8.3c7.1 8 27.1 8.8 33.8-7.3c1.5-3.5 4.5-6.1 7.2-9.4c3.3-4 8.8-7.2 7.1-10.5">
                {" "}
              </path>{" "}
              <path d="M43.1 37.1c-6.5-2.4-18.1 2-16.5 13.7c0-10.9 9.9-13.6 15.3-13.6c.8-.1 1.2-.1 1.2-.1">
                {" "}
              </path>{" "}
            </g>{" "}
          </g>
        </svg>
      </h1>
      <h3 className="home__subtitle">
        <Typewriter
          options={{
            strings: Bio.roles,
            autoStart: true,
            loop: true,
          }}
        />
      </h3>
      <p className="home__description">
        I am Junior Frontend Developer able to build a Web presence from the
        ground up - from concept, navigation, layout and programming.
      </p>
      <a href="#contact" target="_blank" className="button button--flex">
        Let's Talk{" "}
        <svg
          class="button__icon"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z"
            fill="var(--container-color)"
          ></path>
          <path
            d="M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z"
            fill="var(--container-color)"
          ></path>
        </svg>
      </a>
    </div>
  );
};

export default Data;
