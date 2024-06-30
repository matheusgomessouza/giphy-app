"use client";

import { useState } from "react";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: `https://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=cat&offset=11&limit=3`,
  cache: new InMemoryCache(),
});

// client
//   .query({
//     query: gql`
//       query {
//         searchGifs(q: "cat", offset: 11, limit: 3) {
//           data {
//             id
//             url
//             title
//           }
//           pagination {
//             total_count
//             count
//             offset
//           }
//         }
//       }
//     `,
//   })
//   .then((result) => console.log(result));

export default function Home() {
  const [queryTerm, setQueryTerm] = useState<string>("");

  return (
    <ApolloProvider client={client}>
      <main className="flex items-center justify-center flex-col h-screen">
        <h1 className="text-dark font-extrabold text-5xl">Giphy app</h1>
        <section className="w-96">
          <input
            type="search"
            name="search"
            id="search"
            value={queryTerm}
            onChange={(e) => setQueryTerm(e.target.value)}
            placeholder="Type your query..."
            className="text-gray-600 rounded-xl my-8 h-10 p-2 w-full"
          />
          {queryTerm.length > 0 && (
            <div className="w-full h-52 bg-gray-500 rounded-md mb-4 overflow-y-auto"></div>
          )}
        </section>
        <button type="submit" className="bg-gray-700 p-2 rounded-xl px-4">
          <h1>Search</h1>
        </button>
      </main>
    </ApolloProvider>
  );
}
