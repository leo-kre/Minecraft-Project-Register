"use client";

import { useState } from "react";

export default function InputField(props: InputFieldProps) {
      const [value, setValue] = useState(props.value);

      const [borderColor, setBorderColor] = useState("border-accent_1");
      const [showFieldRequiredMessage, setShowFieldRequiredMessage] = useState(false);

      props.action(value);

      let errorMessage: any;

      if (showFieldRequiredMessage && props.required) {
            errorMessage = <h1 className="text-red-500 text-sm">Bitte fülle dieses Feld aus</h1>;
      }

      if (props.errorMessage != "") {
            errorMessage = <h1 className="text-red-500 text-sm">{props.errorMessage}</h1>;
      }

      return (
            <div className="h-12">
                  <div className={"bg-accent transition duration-75 ease-in-out w-fit rounded-sm border " + borderColor}>
                        <input
                              className="bg-transparent focus:outline-none h-10 m-1 ml-3 text-lg placeholder:text-text w-[60vw] sm:w-fit"
                              placeholder={props.placeholder}
                              value={value}
                              onInput={(obj: any) => {
                                    setValue(obj.target.value);
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
                        ></input>
                  </div>
                  {errorMessage}
            </div>
      );
}

type InputFieldProps = {
      placeholder: string;
      value: string;
      required: boolean;
      errorMessage: string;
      action: Function;
};
