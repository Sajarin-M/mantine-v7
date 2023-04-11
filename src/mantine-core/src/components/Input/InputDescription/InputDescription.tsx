import React from 'react';
import {
  Box,
  BoxProps,
  StylesApiProps,
  factory,
  ElementProps,
  useProps,
  useStyles,
  useVars,
  MantineSize,
  getFontSize,
  rem,
  createVarsResolver,
} from '../../../core';
import classes from './InputDescription.module.css';

export type InputDescriptionStylesNames = 'description';
export type InputDescriptionVariant = string;
export type InputDescriptionCssVariables = '--input-description-size';

export interface InputDescriptionStylesParams {
  size: MantineSize | (string & {}) | undefined;
  variant: InputDescriptionVariant | undefined;
}

export interface InputDescriptionProps
  extends BoxProps,
    StylesApiProps<
      InputDescriptionStylesNames,
      InputDescriptionVariant,
      InputDescriptionCssVariables
    >,
    ElementProps<'div'> {
  __staticSelector?: string;

  /** Controls description `font-size`, `'sm'` by default */
  size?: MantineSize | (string & {});
}

export interface InputDescriptionFactory {
  props: InputDescriptionProps;
  ref: HTMLParagraphElement;
  stylesNames: InputDescriptionStylesNames;
  vars: InputDescriptionCssVariables;
  stylesParams: InputDescriptionStylesParams;
}

const defaultProps: Partial<InputDescriptionProps> = {
  size: 'sm',
};

const varsResolver = createVarsResolver<InputDescriptionCssVariables, InputDescriptionStylesParams>(
  ({ size }) => ({ '--input-description-size': `calc(${getFontSize(size)} - ${rem(2)})` })
);

export const InputDescription = factory<InputDescriptionFactory>((props, ref) => {
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    size,
    __staticSelector,
    variant,
    ...others
  } = useProps('InputDescription', defaultProps, props);

  const getStyles = useStyles<InputDescriptionStylesNames>({
    name: ['InputWrapper', __staticSelector],
    className,
    style,
    classes,
    classNames,
    styles,
    unstyled,
    rootSelector: 'description',
  });

  const _vars = useVars<InputDescriptionStylesParams>('InputDescription', varsResolver, vars, {
    size,
    variant,
  });

  return (
    <Box
      component="p"
      ref={ref}
      variant={variant}
      size={size}
      {...getStyles('description')}
      vars={_vars}
      {...others}
    />
  );
});

InputDescription.displayName = '@mantine/core/InputDescription';
