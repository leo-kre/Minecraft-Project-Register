"use client";

import { useState } from "react";

export default function Button(props: ButtonProps) {
      const [color, setColor] = useState("bg-blue");

      if (props.valid && color != "bg-green") {
            setColor("bg-green");
      }

      let context: any = [props.text];

      if (props.valid) {
            context = [
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.25 8.891l-1.421-1.409-6.105 6.218-3.078-2.937-1.396 1.436 4.5 4.319 7.5-7.627z" />
                  </svg>,
            ];
      }

      if (props.loading) {
            context = [
                  <div role="status">
                        <svg aria-hidden="true" className="inline w-6 h-6 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#000000" />
                              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#b0b0b0" />
                        </svg>
                        <span className="sr-only">Loading...</span>
                  </div>,
                  "Loading...",
            ];
      }

      return (
            <div
                  className={"w-36 text-black text-center p-3 hover:scale-95 transition duration-100 ease-in-out cursor-pointer " + color}
                  onClick={() => {
                        props.action();
                  }}
            >
                  <div className="w-full h-full flex justify-center items-center">{context}</div>
            </div>
      );
}

type ButtonProps = {
      text: string;
      loading: boolean;
      valid: boolean;
      action: Function;
};
