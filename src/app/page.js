"use client";

import React, { useState } from "react";
import TagFilter from "./components/TagFilter";
import Pagination from "./components/Pagination";
import { data } from "./data/data";

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTags, setSelectedTags] = useState([]);
  const allTags = ["tag1", "tag2", "tag3", "tag4", "tag5", "tag6", "tag7"];
  const filteredQuestions = data.filter((question) => {
    return selectedTags.every((tag) => question.tags.includes(tag));
  });
  const questionsPerPage = 10;
  const totalPages = Math.ceil(filteredQuestions.length / questionsPerPage);

  const startIndex = (currentPage - 1) * questionsPerPage;
  const endIndex = startIndex + questionsPerPage;
  const questionsToDisplay = filteredQuestions.slice(startIndex, endIndex);

  return (
    <div>
      <TagFilter
        tags={allTags}
        selectedTags={selectedTags}
        onTagSelect={setSelectedTags}
      />

      {questionsToDisplay.map((question) => (
        <div key={question.id}>
          <h3>{question.title}</h3>
          <p>{question.description}</p>
        </div>
      ))}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(newPage) => setCurrentPage(newPage)}
      />
    </div>
  );
}
