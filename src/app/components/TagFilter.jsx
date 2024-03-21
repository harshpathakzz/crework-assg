"use client";
import React from "react";

const TagFilter = ({ tags, selectedTags, onTagSelect }) => {
  const handleTagClick = (tag) => {
    if (selectedTags.includes(tag)) {
      onTagSelect(selectedTags.filter((t) => t !== tag));
    } else {
      onTagSelect([...selectedTags, tag]);
    }
  };

  return (
    <div className="w-full flex flex-row flex-wrap mb-5 gap-5 my-2">
      <button
        onClick={() => onTagSelect([])}
        className={`border rounded border-white px-3 py-1 ${
          selectedTags.length === 0
            ? "bg-white text-[#1B1919]"
            : "text-white bg-transparent"
        } `}
      >
        All
      </button>
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => handleTagClick(tag)}
          className={`border rounded border-white px-3 py-1 ${
            selectedTags.includes(tag)
              ? "bg-white text-[#1B1919]"
              : "text-white bg-transparent"
          }`}
        >
          {tag}
        </button>
      ))}
    </div>
  );
};

export default TagFilter;
