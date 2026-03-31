import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

export default function EbookStore() {
  const ebooks = [
    {
      title: "Guia Completo de Treinamento",
      description: "Aprenda a montar treinos eficientes para qualquer nível.",
      price: "R$ 29,90"
    },
    {
      title: "Nutrição para Alta Performance",
      description: "Descubra como alimentar seu corpo para melhores resultados.",
      price: "R$ 24,90"
    },
    {
      title: "Saúde e Bem-estar Diário",
      description: "Hábitos simples para melhorar sua qualidade de vida.",
      price: "R$ 19,90"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold">Minha Loja de E-books</h1>
        <p className="text-gray-600 mt-2">Saúde, Esportes e Alta Performance</p>
      </header>

      <div className="grid md:grid-cols-3 gap-6">
        {ebooks.map((ebook, index) => (
          <Card key={index} className="rounded-2xl shadow-lg">
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold mb-2">{ebook.title}</h2>
              <p className="text-gray-600 mb-4">{ebook.description}</p>
              <p className="text-lg font-bold mb-4">{ebook.price}</p>
              <Button className="w-full flex items-center gap-2">
                <ShoppingCart size={16} /> Comprar
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <footer className="text-center mt-10 text-gray-500">
        <p>© 2026 Minha Loja de E-books</p>
      </footer>
    </div>
  );
}
