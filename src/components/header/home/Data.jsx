import React from "react";

const Data = () => {
  return (
    <div>
      <div className="home__data">
        <h1 className="home__title">
          Matias Dereje
          {/* Pen nib icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            fill="currentColor"
            viewBox="0 0 24 24"
            style={{ marginLeft: "8px" }}
          >
            <path d="M16.596 1.62a1.75 1.75 0 0 1 2.474 0l3.31 3.31a1.75 1.75 0 0 1 0 2.474l-2.82 2.82-5.784-5.784 2.82-2.82Zm-4.53 4.53 5.784 5.784-7.548 7.547a1.75 1.75 0 0 1-.776.445l-5.198 1.386a.75.75 0 0 1-.922-.922l1.386-5.198a1.75 1.75 0 0 1 .445-.776l7.549-7.546Z" />
          </svg>
        </h1>

        <h3 className="home__subtitle">
          Visual Designer
          {/* Star icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="gold"
            viewBox="0 0 24 24"
            style={{ marginLeft: "6px" }}
          >
            <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.783 1.402 8.174L12 18.896l-7.336 3.861 1.402-8.174L.132 9.21l8.2-1.192z" />
          </svg>
        </h3>

        <p>
          {/* Palette icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="currentColor"
            viewBox="0 0 24 24"
            style={{ marginRight: "6px", verticalAlign: "middle" }}
          >
            <path d="M12 2a10 10 0 0 0-10 10c0 5.523 4.477 10 10 10h1a3 3 0 0 0 0-6h-1a4 4 0 0 1-4-4 3 3 0 0 1 3-3h2a3 3 0 0 0 0-6h-1Zm-3 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm-2 4a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm10-6a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z" />
          </svg>
          I'm a creative designer based in New York. I'm very passionate and
          dedicated to my work.
        </p>

        <a
          href="#contact"
          className="button button--flex"
          style={{
            backgroundColor: "black",
            color: "white",
            padding: "10px 18px",
            borderRadius: "8px",
          }}
        >
          Say Hello
          {/* Mail icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="white"
            viewBox="0 0 24 24"
            style={{ marginLeft: "6px" }}
          >
            <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm8 7 8-5H4l8 5Zm0 2-8-5v10h16V8l-8 5Z" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Data;
