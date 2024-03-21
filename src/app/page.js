"use client";

import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedTags]);

  const questionsPerPage = 10;
  const totalPages = Math.ceil(filteredQuestions.length / questionsPerPage);
  const totalQuestions = filteredQuestions.length;

  const startIndex = (currentPage - 1) * questionsPerPage;
  const endIndex = startIndex + questionsPerPage;
  const questionsToDisplay = filteredQuestions.slice(startIndex, endIndex);

  return (
    <div className="bg-[#181616] flex justify-center py-3">
      <div className="w-4/5">
        <div className="bg-[#181616] flex flex-col gap-3">
          <h1
            style={{
              background:
                "linear-gradient(180deg, #FFFFFF -39.23%, #FAAF3E 129.67%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            className="font-bold text-4xl "
          >
            Product Management Interview Questions
          </h1>
          <h3 className="text-base font-normal text-white">
            Browse 1000+ questions from top tech companies
          </h3>
        </div>
        <TagFilter
          tags={allTags}
          selectedTags={selectedTags}
          onTagSelect={setSelectedTags}
        />
        <div className="min-h-[80vh] flex flex-col gap-y-3">
          {questionsToDisplay.map((question) => (
            <div
              key={question.id}
              className="min-h-[16px] flex flex-col gap-y-3"
            >
              <div>
                <p className="font-medium text-[18px] leading-6">
                  {question.description}
                </p>
                <div className="flex justify-start gap-5">
                  {question.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-base font-normal text-[#BDBCBC]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(newPage) => setCurrentPage(newPage)}
          questionsPerPage={questionsPerPage}
          totalQuestions={totalQuestions}
        />
      </div>
    </div>
  );
}
