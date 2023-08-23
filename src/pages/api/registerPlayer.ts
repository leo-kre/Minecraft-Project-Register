import { loadRegisterList, registerData, saveRegisterList } from "@/data";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
      const reqData = req.body;
      const jsonData: RegisterData = JSON.parse(reqData);

      const validateMinecraftName = async () => {
            const url = "https://api.mojang.com/users/profiles/minecraft/" + jsonData.minecraftName;
            const apiData: any = await fetch(url);
            const apiDataJson = await apiData.json();

            if (apiDataJson.errorMessage) {
                  res.json({ message: "mc_name_invalid" });
            } else if (apiDataJson.id) {
                  res.json({ message: "success" });

                  loadRegisterList();

                  registerData.push({
                        discordName: jsonData.discordName,
                        mcName: jsonData.minecraftName,
                  });

                  saveRegisterList();
            }
      };

      validateMinecraftName();
}

type RegisterData = {
      minecraftName: string;
      discordName: string;
};
