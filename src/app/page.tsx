"use client";

import { useState } from "react";
import InputField from "./components/InputField";

import headerImage from "../../public/background.jpg";
import Image from "next/image";
import Header from "./components/Header";
import Button from "./components/Button";

export default function Home() {
      const [minecraftName, setMinecraftName] = useState("");
      const [discordName, setDiscordName] = useState("");

      const [mcNameMessage, setMcNameMessage] = useState("");

      const [isRequestLoading, setIsRequestLoading] = useState(false);
      const [isDataValid, setIsDataValid] = useState(false);

      const sendRequest = async () => {
            setIsRequestLoading(true);
            if (minecraftName == "" || discordName == "") {
                  return;
            }
            const response: any = await fetch("/api/registerPlayer", {
                  method: "POST",
                  body: JSON.stringify({
                        minecraftName: minecraftName,
                        discordName: discordName,
                  }),
                  headers: {
                        "content-type": "data/json",
                  },
            }).catch((e) => console.log(e));

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
            <main className="min-h-screen bg-background flex flex-col items-center">
                  <Header></Header>

                  <Image src={headerImage} alt="mc image" className="relative top-[-224px] hidden md:block"></Image>

                  <div className="bg-background_2 w-5/6 px-5 sm:px-12 mb-56 flex flex-col items-center sm:items-start">
                        <h1 className="text-5xl m-6 sm:ml-0 md:text-7xl md:mt-12">Anmeldung</h1>

                        <div className="flex flex-col lg:flex-row mb-6 w-full">
                              <div className="w-full lg:2/3 flex items-center flex-col justify-around">
                                    <h2 className="text-lg">
                                          Hier kannst du dich für das Projekt Civilization 1 anmelden. Eine Anmeldung verpflichtet nicht zur Teilnahme, dennoch sollte man sich nur anmelden, wenn man auch Lust hat teilzunehmen. Solltest du noch Fragen zum Ablauf des Projektes oder den Regeln haben, kannst du{" "}
                                          <a href="/help" className="text-blue hover:underline">
                                                hier
                                          </a>{" "}
                                          alles nachlesen. Sollte es dennoch weitere Fragen geben, erstelle bitte ein{" "}
                                          <a href="/ticket" className="text-blue hover:underline">
                                                Ticket
                                          </a>
                                          .
                                    </h2>

                                    <div className="h-5"></div>
                              </div>

                              <div className="gap-10 flex flex-col lg:ml-24">
                                    <div>
                                          <h2 className="text-lg mr-10">Minecraft Name</h2>
                                          <InputField action={(text: string) => setMinecraftName(text)} placeholder="Username" value="" required={true} errorMessage={mcNameMessage}></InputField>
                                    </div>

                                    <div className="mb-2">
                                          <h2 className="text-lg mr-10">Discord Name</h2>
                                          <InputField action={(text: string) => setDiscordName(text)} placeholder="Username" value="" required={true} errorMessage=""></InputField>
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
                        </div>
                  </div>
            </main>
      );
}
