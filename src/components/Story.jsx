import React from 'react';

const Story = ({ story, onRemove }) => {
  const placeholderImage = 'https://favim.com/pd/p/orig/2018/09/25/soft-hello-kitty-kuromi-Favim.com-6342769.gif';

  return (
    <div className="story">
      <span className="delete" onClick={() => onRemove(story.title)}><p>x</p></span>
      <div className="story_header">
        <div className="story_image">
          <img src={story.image_url || placeholderImage} alt={story.title} />
        </div>
        <div>
          <h1 className="story_title">
            <a className="story_link" href={story.link} target="_blank" rel="noopener noreferrer">
              {story.title}
            </a>
          </h1>
          <span className="story_creator"><strong>Creator:</strong> {story.creator || 'Unknown'}</span>
        </div>
      </div>
      <p>{story.description}</p>
    </div>
  );
};

export default Story;