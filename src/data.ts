import * as fs from "fs";

const path = "./data/";

export let registerData: Array<Register> = [];

export let ticketData: Array<Ticket> = [];

export function saveRegisterList() {
      const json = JSON.stringify(registerData, null, 2);
      fs.writeFileSync(path + "registerList.json", json);
}

export function loadRegisterList() {
      const json = fs.readFileSync(path + "registerList.json", "utf8");
      registerData = JSON.parse(json);
}

export function saveTicketList() {
      const json = JSON.stringify(ticketData, null, 2);
      fs.writeFileSync(path + "ticketList.json", json);
}

export function loadTicketList() {
      const json = fs.readFileSync(path + "ticketList.json", "utf8");
      ticketData = JSON.parse(json);
}

type Register = {
      discordName: string;
      mcName: string;
};

type Ticket = {
      discordName: string;
      mcName: string;
      message: string;
};
