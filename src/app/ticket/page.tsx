"use client";

import Button from "../components/Button";
import InputField from "../components/InputField";
import TextField from "../components/TextField";
import { useState } from "react";

export default function Ticket() {
      const [minecraftName, setMinecraftName] = useState("");
      const [discordName, setDiscordName] = useState("");
      const [text, setText] = useState("");

      const [mcNameMessage, setMcNameMessage] = useState("");
      const [textAreaMessage, setTextAreaMessage] = useState("");

      const [isRequestLoading, setIsRequestLoading] = useState(false);
      const [isDataValid, setIsDataValid] = useState(false);

      const sendRequest = async () => {
            setIsRequestLoading(true);
            if (minecraftName == "" || discordName == "") {
                  return;
            }

            if (text == "") {
                  setTextAreaMessage("Bitte fülle dieses Feld aus");
                  return;
            } else {
                  setTextAreaMessage("");
            }

            const response: any = await fetch("/api/createTicket", {
                  method: "POST",
                  body: JSON.stringify({
                        minecraftName: minecraftName,
                        discordName: discordName,
                        text: text,
                  }),
                  headers: {
                        "content-type": "data/json",
                  },
            }).catch((e) => {
                  alert("There was an error calling the API");
                  return;
            });

            const jsonResponse = await response.json();
            const message = jsonResponse.message;

            setIsRequestLoading(false);
            if (message == "mc_name_invalid") {
                  setMcNameMessage("Minecraft Name nicht verfügbar");
            } else if (message == "success") {
                  setMcNameMessage("");
                  setIsDataValid(true);
            }
      };

      return (
            <main className="w-full min-h-screen">
                  <div className="bg-background_2 px-12 py-6">
                        <h1 className="text-5xl md:text-7xl mb-10">Ticket</h1>
                        <h2 className="text-lg">
                              Hier kannst du ein Ticket erstellen, solltest du noch Fragen haben, welche nicht durch die{" "}
                              <a href="/help" className="text-blue hover:underline">
                                    Erklärungsseite
                              </a>{" "}
                              geklärt werden konnten. In den meisten fällten bekommst du deine Antwort über Discord. Nach dem Projektstart kann es aber auch sein, dass du eine Antwort über den Ingame Chat bekommst.
                        </h2>
                        <div className="flex flex-col sm:flex-row gap-10 my-10">
                              <div className="gap-10 flex flex-col">
                                    <div>
                                          <h2 className="text-lg mr-10">Minecraft Name</h2>
                                          <InputField action={(text: string) => setMinecraftName(text)} placeholder="Minecraft Name" value="" required={true} errorMessage={mcNameMessage}></InputField>
                                    </div>

                                    <div className="mb-2">
                                          <h2 className="text-lg mr-10">Discord Name</h2>
                                          <InputField action={(text: string) => setDiscordName(text)} placeholder="Discord Name" value="" required={true} errorMessage=""></InputField>
                                    </div>
                              </div>

                              <div className="w-full">
                                    <h2 className="text-lg mr-10">Nachricht</h2>
                                    <TextField
                                          action={(text: string) => {
                                                setText(text);
                                                setTextAreaMessage("");
                                          }}
                                          placeholder="Nachricht"
                                          required={true}
                                          errorMessage={textAreaMessage}
                                    ></TextField>
                              </div>
                        </div>
                        <Button
                              text="Anmelden"
                              action={() => {
                                    sendRequest();
                              }}
                              loading={isRequestLoading}
                              valid={isDataValid}
                        ></Button>
                  </div>
            </main>
      );
}
