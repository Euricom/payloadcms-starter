'use client';

import React from 'react';

import { CustomRenderers, Serialize as SerializeContent } from './serialize';

export const RichText: React.FC<{
  className?: string;
  content: any;
  customRenderers?: CustomRenderers;
}> = ({ className, content, customRenderers }) => {
  if (!content) {
    return null;
  }

  return (
    <div className={[className, 'prose'].filter(Boolean).join(' ')}>
      <SerializeContent content={content.root.children} customRenderers={customRenderers} />
    </div>
  );
};
