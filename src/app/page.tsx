"use client";

import {
  ApolloProvider,
  gql,
  ApolloClient,
  InMemoryCache,
} from "@apollo/client";
import {} from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api.giphy.com/v1/gifs/search?api_key=pGEjjyGw3P7khIGH7RnAwWruZAqJFcJj&q=cat&offset=11&limit=3",
  cache: new InMemoryCache(),
});

client
  .query({
    query: gql`
      query {
        searchGifs(q: "cat", offset: 11, limit: 3) {
          data {
            id
            url
            title
          }
          pagination {
            total_count
            count
            offset
          }
        }
      }
    `,
  })
  .then((result) => console.log(result));

export default function Home() {
  return (
    <ApolloProvider client={client}>
      <main className="">
        <h1 className="text-dark font-extrabold text-2xl">Giphy app</h1>
        <section className="">
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Type your query..."
            className="rounded-sm my-8"
          />
        </section>
        <button type="submit" className="bg-gray-700 p-2 rounded-xl">
          Search
        </button>
      </main>
    </ApolloProvider>
  );
}
