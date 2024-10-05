"use client";
import { TipoProduto } from "@/types";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Produtos() {
  const [produtos, setProdutos] = useState<TipoProduto[]>([]);

  useEffect(() => {
    const consumoApi = async () => {
      const response = await fetch("http://localhost:3000/api/base-produtos");
      const dados = await response.json();
      setProdutos(dados);
    };

    consumoApi();
  }, []);

  return (
    <div>
      <h2>Produtos</h2>

      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>Preço</th>
            <th>Quantidade</th>
            <th>Editar</th>
          </tr>
        </thead>

        <tbody>
          {produtos.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.nome}</td>
              <td>{p.preco}</td>
              <td>{p.qtd}</td>
              <td>
                <Link href={`/produtos/produto/${p.id}`}>Editar</Link>
              </td>
            </tr>
          ))}
        </tbody>

        <tfoot>
          <tr>
            <td colSpan={5}>Total de registros : {produtos.length}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
