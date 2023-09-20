'use client';

import React from 'react';

import { tools } from '@/config/tools';
import { ToolCard } from '@/components/common/tool-card';

import * as styles from './page.styles';

export default function DashboardPage() {
  return (
    <div>
      <div className={styles.headingWrapperStyles}>
        <h2 className={styles.headingTitleStyles}>Explore the power of AI</h2>
        <p className={styles.headingParagraphStyles}>
          Chat with the smartest AI - Experience the power of AI
        </p>
      </div>
      <div className={styles.contentWrapperStyles}>
        {tools.map((tool) => (
          <ToolCard key={tool.href} tool={tool} />
        ))}
      </div>
    </div>
  );
}
