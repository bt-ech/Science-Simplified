import Link from "next/link";
import React from "react";

export async function getData() {
  const res = await fetch('http://localhost:8000/data');
  const data = await res.json();

  return data;
}

export default async function HomePage(){
  const Data = await getData();
  return (
     <main className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-4xl mx-auto">

        <div className="text-center mb-14">
          <p className="mt-4 text-gray-600 text-2xl">
            Explore interesting facts explained clearly and simply.
          </p>
        </div>

         <div className="space-y-10">
          {Data.map((item: any) => (
            <div
              key={item.id}
              className="group relative bg-white/70 backdrop-blur-lg border border-gray-200 p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >

              <div className="absolute left-0 top-0 h-full w-1 rounded-l-3xl bg-gradient-to-b from-indigo-500 to-purple-500 opacity-70 group-hover:opacity-100 transition" />

              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {item.question}
              </h2>

              <p className="text-gray-700 leading-relaxed text-lg">
                {item.answer}
              </p>

              <p>
                <Link href={item.link} className="font-bold text-green-500">Learn more</Link>
              </p>
            </div>
          ))}

        </div>

      </div>
    </main>
  )
}