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
    <div>
      <button
        onClick={() => onTagSelect([])}
        style={{ fontWeight: selectedTags.length === 0 ? "bold" : "normal" }}
      >
        All
      </button>
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => handleTagClick(tag)}
          style={{
            backgroundColor: selectedTags.includes(tag) ? "blue" : "white",
            color: selectedTags.includes(tag) ? "white" : "black",
          }}
        >
          {tag}
        </button>
      ))}
    </div>
  );
};

export default TagFilter;
