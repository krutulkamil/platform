'use client';

import React from 'react';
import {
  ArrowRight,
  Code,
  ImageIcon,
  MessageSquare,
  Music,
  VideoIcon,
} from 'lucide-react';
import { useRouter } from 'next/navigation';

import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

import * as styles from './page.styles';

const tools = [
  {
    label: 'Conversation',
    icon: MessageSquare,
    color: 'text-violet-500',
    bgColor: 'bg-violet-500/10',
    href: '/conversation',
  },
  {
    label: 'Music Generation',
    icon: Music,
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-500/10',
    href: '/music',
  },
  {
    label: 'Image Generation',
    icon: ImageIcon,
    color: 'text-pink-700',
    bgColor: 'bg-pink-700/10',
    href: '/image',
  },
  {
    label: 'Video Generation',
    icon: VideoIcon,
    color: 'text-orange-700',
    bgColor: 'bg-orange-700/10',
    href: '/video',
  },
  {
    label: 'Code Generation',
    icon: Code,
    color: 'text-green-700',
    bgColor: 'bg-green-700/10',
    href: '/code',
  },
];

export default function DashboardPage() {
  const router = useRouter();

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
          <Card
            key={tool.href}
            className={styles.pageCardWrapperStyles}
            onClick={() => router.push(tool.href)}
          >
            <div className={styles.pageCardGridStyles}>
              <div className={cn(styles.pageCardStyles, tool.bgColor)}>
                <tool.icon
                  className={cn(styles.pageCardIconStyles, tool.color)}
                />
              </div>
              <div className={styles.pageContentLabelStyles}>{tool.label}</div>
            </div>
            <ArrowRight className={styles.arrowRightStyles} />
          </Card>
        ))}
      </div>
    </div>
  );
}
