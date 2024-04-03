import axios from "axios";
import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

async function fetchData() {
   const user = await client.user.findFirst();
    return {
        email: user?.username,
        name: "Aakash"
    }
    
}

export default async function page() {
    const data = await fetchData();
  return (
      <div>
          {data.email}
    </div>
  )
}




