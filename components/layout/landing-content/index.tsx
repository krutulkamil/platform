'use client';

import React from 'react';

import { testimonials } from '@/components/layout/landing-content/testimonials';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import * as styles from './index.styles';

export const LandingContent = () => {
  return (
    <div className={styles.paddingWrapperStyles}>
      <h2 className={styles.testimonialsStyles}>Testimonials</h2>
      <div className={styles.gridWrapperStyles}>
        {testimonials.map((testimonial) => (
          <Card
            key={testimonial.description}
            className={styles.testimonialCardStyles}
          >
            <CardHeader>
              <CardTitle className={styles.testimonialCardTitleStyles}>
                <div>
                  <p className={styles.cardNameStyles}>{testimonial.name}</p>
                  <p className={styles.cardTitleStyles}>{testimonial.title}</p>
                </div>
              </CardTitle>
              <CardContent className={styles.testimonialCardContentStyles}>
                {testimonial.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};
