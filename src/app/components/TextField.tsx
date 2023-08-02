"use client";

import { useState } from "react";

export default function TextField(props: InputFieldProps) {
      const [value, setValue] = useState("");

      const [borderColor, setBorderColor] = useState("border-accent_1");
      const [showFieldRequiredMessage, setShowFieldRequiredMessage] = useState(false);

      props.action(value);

      let errorMessage: any;

      if (props.errorMessage != "") {
            errorMessage = <h1 className="text-red-500 text-sm">{props.errorMessage}</h1>;

            if (borderColor != "border-red-500") {
                  setBorderColor("border-red-500");
            }
      }

      if (showFieldRequiredMessage && props.required) {
            errorMessage = <h1 className="text-red-500 text-sm">Bitte fülle dieses Feld aus</h1>;
      }

      return (
            <div className="">
                  <div className={"bg-accent w-full transition duration-75 ease-in-out rounded-sm border p-2 " + borderColor}>
                        <textarea
                              className="bg-transparent focus:outline-none h-full text-lg placeholder:text-text w-full "
                              placeholder={props.placeholder}
                              value={value}
                              onInput={(obj: any) => {
                                    setValue(obj.target.value);
                                    setBorderColor("border-blue");
                              }}
                              onFocus={() => {
                                    setBorderColor("border-blue");
                                    setShowFieldRequiredMessage(false);
                              }}
                              onBlur={() => {
                                    setBorderColor("border-accent_1");

                                    if (value == "" && props.required) {
                                          setBorderColor("border-red-500");
                                          setShowFieldRequiredMessage(true);
                                    }
                              }}
                        ></textarea>
                  </div>
                  {errorMessage}
            </div>
      );
}

type InputFieldProps = {
      placeholder: string;
      required: boolean;
      errorMessage: string;
      action: Function;
};
