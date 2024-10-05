import { NextResponse } from "next/server";
import { promises as fs } from "fs";

//ENDPOINT DESTE ARQUIVO:
//http://localhost:3000/api/base-produtos

export async function GET() {

    const file = await fs.readFile(process.cwd() + "/src/data/base.json", "utf-8");
    const dados = JSON.parse(file);
    return NextResponse.json(dados);
}

export async function POST(request:Request) {

    //A requisição do tipo POST recebe umobjeto request e deve
    //retornar um objeto response, mas antes deve realizar o
    // destructuring no objeto request e receber os dados que foram
    // enviados no corpo da requisição.
    const { nome, idade } = await request.json();
    
    const dados = { nome, idade };

    return NextResponse.json({dados,msg:"SUCESSO"},{status:201});
}
