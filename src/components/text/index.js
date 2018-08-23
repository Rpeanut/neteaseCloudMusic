import React from 'react';
import { Text } from 'react-native';
import styles from './styles';

export const H1 = ({
  title, style, numberOfLines, color, children,
}) => (
  <Text style={[styles.H1, style, { color: color || '#000000' }]} numberOfLines={numberOfLines || 0}>
    {title || children}
  </Text>
);

export const H2 = ({
  title, style, numberOfLines, color, children,
}) => (
  <Text style={[styles.H2, style, { color: color || '#000000' }]} numberOfLines={numberOfLines || 0}>
    {title || children}
  </Text>
);

export const H3 = ({
  title, style, numberOfLines, color, children,
}) => (
  <Text style={[styles.H3, style, { color: color || '#000000' }]} numberOfLines={numberOfLines || 0}>
    {title || children}
  </Text>
);

export const H4 = ({
  title, style, numberOfLines, color, children,
}) => (
  <Text style={[styles.H4, style, { color: color || '#000000' }]} numberOfLines={numberOfLines || 0}>
    {title || children}
  </Text>
);

export const Normal = ({
  title, style, numberOfLines, color, children,
}) => (
  <Text style={[styles.normal, style, { color: color || '#000000' }]} numberOfLines={numberOfLines || 0}>
    {title || children}
  </Text>
);

export const Tip = ({
  title, style, numberOfLines, color, children,
}) => (
  <Text style={[styles.tip, style, { color: color || '#000000' }]} numberOfLines={numberOfLines || 0}>
    {title || children}
  </Text>
);

export const Small = ({
  title, style, numberOfLines, children,
}) => (
  <Text style={[styles.small, style]} numberOfLines={numberOfLines || 0}>
    {title || children}
  </Text>
);
