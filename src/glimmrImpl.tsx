import React, { ComponentProps } from 'react';
import { ImageStyle, TextStyle, ViewStyle } from 'react-native';
import { GlimmrSheet, InferredStyleOrSheet, GlimmrImplFn } from './Types';
import { isStyleSheet, mergeSheet } from './Utils';
import { DefaultTheme, useTheme } from './ThemeProvider';

//@ts-expect-error This is safe stop complaining
export const glimmrImpl: GlimmrImplFn = (Component, BaseStyle = {}) => {
  return function <ExtraProps extends object>(
    style?:
      | InferredStyleOrSheet<
          ComponentProps<typeof Component>,
          typeof Component,
          typeof BaseStyle
        >
      | ((
          props: ComponentProps<typeof Component> &
            ExtraProps & { theme: DefaultTheme },
        ) => InferredStyleOrSheet<
          ComponentProps<typeof Component>,
          typeof Component,
          typeof BaseStyle
        >),
  ) {
    return (props: ComponentProps<typeof Component> & ExtraProps) => {
      const theme = useTheme();

      const resolvedStyle: InferredStyleOrSheet<
        ComponentProps<typeof Component>,
        typeof Component,
        typeof BaseStyle
        //@ts-expect-error We know its a callable function or not.
      > = typeof style === 'function' ? style(props & { theme }) : style;

      if (isStyleSheet(resolvedStyle)) {
        const merged = mergeSheet(
          BaseStyle as GlimmrSheet,
          resolvedStyle as GlimmrSheet,
        );
        return <Component {...props} stylesheet={merged} />;
      }
      return (
        <Component
          {...props}
          style={[
            BaseStyle as ViewStyle | TextStyle | ImageStyle,
            resolvedStyle,
          ]}
        />
      );
    };
  };
};
