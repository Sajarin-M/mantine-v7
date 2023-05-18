import React from 'react';
import {
  Box,
  BoxProps,
  StylesApiProps,
  factory,
  ElementProps,
  useProps,
  useStyles,
  createVarsResolver,
  Factory,
  isElement,
  MantineSpacing,
  getSpacing,
} from '../../core';
import classes from './Breadcrumbs.module.css';

export type BreadcrumbsStylesNames = 'root' | 'separator' | 'breadcrumb';
export type BreadcrumbsVariant = string;
export type BreadcrumbsCssVariables = {
  root: '--bc-separator-margin';
};

export interface BreadcrumbsProps
  extends BoxProps,
    StylesApiProps<BreadcrumbsFactory>,
    ElementProps<'div'> {
  /** Separator between children, `'/'` by default */
  separator?: React.ReactNode;

  /** Controls spacing between separator and breadcrumb, `'xs'` by default */
  separatorMargin?: MantineSpacing | (string & {}) | number;

  /** React nodes that should be separated with `separator` */
  children: React.ReactNode;
}

export type BreadcrumbsFactory = Factory<{
  props: BreadcrumbsProps;
  ref: HTMLDivElement;
  stylesNames: BreadcrumbsStylesNames;
  vars: BreadcrumbsCssVariables;
  variant: BreadcrumbsVariant;
}>;

const defaultProps: Partial<BreadcrumbsProps> = {
  separator: '/',
  separatorMargin: 'xs',
};

const varsResolver = createVarsResolver<BreadcrumbsFactory>((_, { separatorMargin }) => ({
  root: {
    '--bc-separator-margin': getSpacing(separatorMargin),
  },
}));

export const Breadcrumbs = factory<BreadcrumbsFactory>((_props, ref) => {
  const props = useProps('Breadcrumbs', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    children,
    separator,
    separatorMargin,
    ...others
  } = props;

  const getStyles = useStyles<BreadcrumbsFactory>({
    name: 'Breadcrumbs',
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver,
  });

  const items = React.Children.toArray(children).reduce<React.ReactNode[]>(
    (acc, child, index, array) => {
      const item = isElement(child) ? (
        React.cloneElement(child, {
          ...getStyles('breadcrumb', { className: child.props?.className }),
          key: index,
        })
      ) : (
        <div {...getStyles('breadcrumb')} key={index}>
          {child}
        </div>
      );

      acc.push(item);

      if (index !== array.length - 1) {
        acc.push(
          <Box {...getStyles('separator')} key={`separator-${index}`}>
            {separator}
          </Box>
        );
      }

      return acc;
    },
    []
  );

  return (
    <Box ref={ref} {...getStyles('root')} {...others}>
      {items}
    </Box>
  );
});

Breadcrumbs.displayName = '@mantine/core/Breadcrumbs';
