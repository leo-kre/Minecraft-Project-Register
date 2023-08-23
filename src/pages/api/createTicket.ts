import { loadRegisterList, loadTicketList, registerData, saveRegisterList, saveTicketList, ticketData } from "@/data";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
      const reqData = req.body;
      const jsonData: TicketData = JSON.parse(reqData);

      const validateMinecraftName = async () => {
            const url = "https://api.mojang.com/users/profiles/minecraft/" + jsonData.minecraftName;
            const apiData: any = await fetch(url);
            const apiDataJson = await apiData.json();

            if (apiDataJson.errorMessage) {
                  res.json({ message: "mc_name_invalid" });
            } else if (apiDataJson.id) {
                  res.json({ message: "success" });

                  loadTicketList();

                  ticketData.push({
                        discordName: jsonData.discordName,
                        mcName: jsonData.minecraftName,
                        message: jsonData.message,
                  });

                  console.log(ticketData[ticketData.length - 1]);

                  saveTicketList();
            }
      };

      validateMinecraftName();
}

type TicketData = {
      minecraftName: string;
      discordName: string;
      message: string;
};
