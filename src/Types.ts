/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-object-type */
import { ComponentProps, ComponentType, FC } from 'react';
import { ImageStyle, StyleProp, TextStyle, ViewStyle } from 'react-native';
import { DefaultTheme } from './ThemeProvider';

export type GlimmrSheet<T = {}> = {
  [P in keyof T]: ViewStyle | TextStyle | ImageStyle;
};

export type GlimmrPartialSheet<T = {}> = {
  [P in keyof T]?: ViewStyle | TextStyle | ImageStyle;
};

export type InferStyleType<
  BaseProps extends { style?: StyleProp<unknown> },
  C extends ComponentType<BaseProps>,
> = ComponentProps<C>['style'];

export type InferSheetType<
  BaseProps extends { stylesheet?: GlimmrSheet },
  C extends ComponentType<BaseProps>,
  Sheet extends GlimmrSheet<never>,
> = ComponentProps<C>['stylesheet'] | GlimmrPartialSheet<Sheet>;

export type InferredStyleOrSheet<
  BaseProps extends
    | { style?: StyleProp<unknown> }
    | { stylesheet?: GlimmrSheet },
  Component extends ComponentType<BaseProps>,
  Sheet extends GlimmrSheet<never> | ViewStyle | TextStyle | ImageStyle,
> = BaseProps extends {
  style?: StyleProp<unknown>;
}
  ? InferStyleType<BaseProps, Component>
  : //@ts-expect-error This type error is safe we have checked above.
    InferSheetType<BaseProps, Component, Sheet>;

export type GlimmrImplFn = <
  BaseProps extends
    | { style?: StyleProp<unknown> }
    | { stylesheet?: GlimmrSheet },
  BaseStyle extends GlimmrSheet<any> | ViewStyle | TextStyle | ImageStyle = {},
>(
  component: ComponentType<BaseProps>,
  baseSheet?: BaseStyle,
) => <ExtraProps extends object>(
  style?:
    | InferredStyleOrSheet<BaseProps, typeof component, BaseStyle>
    | ((
        props: BaseProps & ExtraProps & { theme: DefaultTheme },
      ) => InferredStyleOrSheet<BaseProps, typeof component, BaseStyle>),
) => FC<BaseProps & ExtraProps>;
