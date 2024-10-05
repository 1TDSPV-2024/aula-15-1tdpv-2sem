import { NextResponse } from "next/server";
import { promises as fs } from "fs";

//ENDPOINT DESTE ARQUIVO:
//hhtp://localhost:3000/api/base-produtos


export async function GET() {

    const file = await fs.readFile(process.cwd() + "/src/data/base.json", "utf-8");
    const dados = JSON.parse(file);
    return NextResponse.json(dados);
}

export async function POST(request: Request) {

    //A requisação do tipo POST recebe um objeto request e deve 
    //retornar um objeto response, mas antes deve realizar o 
    //destrucuring do objeto request e receber os dados enviados
    const { nome, idade } = await request.json();

    const dados = { nome, idade };


    return NextResponse.json({dados, msg:"SUCESSO"}, {status:201});
}


