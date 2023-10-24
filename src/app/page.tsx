"use client";

import { useState, useEffect } from "react";

interface Book {
  id: number;
  title: string;
  author: string;
  description: string;
  genre: string;
  yearPublished: number;
  numberOfPages: number;
  isbn: string;
}

export default function Dashboard() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch the books data from the Spring Boot backend
  useEffect(() => {
    fetch("http://64.226.106.94:8080/api/books")
      .then((response) => response.json())
      .then((data) => {
        setBooks(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setLoading(false);
      });
  }, []);

  return (
    <main className="min-h-screen container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">📚 Bookman Dashboard</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <section>
          <div className="flex justify-end my-4">
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md">
              Add new book
            </button>
          </div>

          <div className="overflow-x-auto w-full rounded-md">
            <table>
              <thead>
                <tr className="bg-gray-200 dark:bg-gray-700">
                  <th className="px-4 py-2">Title</th>
                  <th className="px-4 py-2">Author</th>
                  <th className="px-4 py-2">Description</th>
                  <th className="px-4 py-2">Genre</th>
                  <th className="px-4 py-2">Year Published</th>
                  <th className="px-4 py-2">Number of Pages</th>
                  <th className="px-4 py-2">ISBN</th>
                  <th className="px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {books.map((book: Book) => (
                  <tr
                    key={book.id}
                    className="bg-white dark:bg-gray-600 border-b border-gray-200 dark:border-gray-700"
                  >
                    <td className="border-r border-gray-200 dark:border-gray-700 px-4 py-2">
                      {book.title}
                    </td>
                    <td className="border-r border-gray-200 dark:border-gray-700 px-4 py-2">
                      {book.author}
                    </td>
                    <td className="border-r border-gray-200 dark:border-gray-700 px-4 py-2">
                      {book.description}
                    </td>
                    <td className="border-r border-gray-200 dark:border-gray-700 px-4 py-2">
                      {book.genre}
                    </td>
                    <td className="border-r border-gray-200 dark:border-gray-700 px-4 py-2">
                      {book.yearPublished}
                    </td>
                    <td className="border-r border-gray-200 dark:border-gray-700 px-4 py-2">
                      {book.numberOfPages}
                    </td>
                    <td className="border-r border-gray-200 dark:border-gray-700 px-4 py-2">
                      {book.isbn}
                    </td>
                    <td className="px-4 py-2">
                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md mb-2">
                        Edit
                      </button>
                      <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}
    </main>
  );
}
