/* eslint-disable react/no-unused-prop-types */
import React, { useRef, useState, useCallback } from 'react';
import { useId, useClickOutside } from '@mantine/hooks';
import {
  ClassNames,
  Styles,
  MantineShadow,
  getDefaultZIndex,
  useProps,
  MantineRadius,
  useDirection,
} from '../../core';
import { TransitionOverride } from '../Transition';
import {
  getFloatingPosition,
  FloatingAxesOffsets,
  FloatingPosition,
  ArrowPosition,
} from '../Floating';
import { PortalProps } from '../Portal';
import { usePopover } from './use-popover';
import { PopoverContextProvider } from './Popover.context';
import { PopoverWidth, PopoverMiddlewares, PopoverStylesNames } from './Popover.types';
import { PopoverTarget } from './PopoverTarget/PopoverTarget';
import { PopoverDropdown } from './PopoverDropdown/PopoverDropdown';

export interface __PopoverProps {
  /** Dropdown position relative to the target element, `'bottom'` by default */
  position?: FloatingPosition;

  /** Offset of the dropdown element, `8` by default */
  offset?: number | FloatingAxesOffsets;

  /** Called when dropdown position changes */
  onPositionChange?(position: FloatingPosition): void;

  /** `useEffect` dependencies to force update dropdown position, `[]` by default */
  positionDependencies?: any[];

  /** Called when dropdown closes */
  onClose?(): void;

  /** Called when dropdown opens */
  onOpen?(): void;

  /** If set dropdown will not be unmounted from the DOM when it is hidden, display: none styles will be added instead */
  keepMounted?: boolean;

  /** Props added to `Transition` component that used to animate dropdown presence, use to configure duration and animation type, `{ duration: 150, transition: 'fade' }` by default */
  transitionProps?: TransitionOverride;

  /** Dropdown width, or `'target'` to make dropdown width the same as target element, `'max-content'` by default */
  width?: PopoverWidth;

  /** Floating ui middlewares to configure position handling, `{ flip: true, shift: true, inline: false }` by default */
  middlewares?: PopoverMiddlewares;

  /** Determines whether component should have an arrow, `false` by default */
  withArrow?: boolean;

  /** Arrow size in px, `7` by default */
  arrowSize?: number;

  /** Arrow offset in px, `5` by default */
  arrowOffset?: number;

  /** Arrow border-radius in px, `0` by default */
  arrowRadius?: number;

  /** Arrow position **/
  arrowPosition?: ArrowPosition;

  /** Determines whether dropdown should be rendered within Portal, `true` by default */
  withinPortal?: boolean;

  /** Props to pass down to the portal when withinPortal is true */
  portalProps?: PortalProps;

  /** Dropdown z-index */
  zIndex?: React.CSSProperties['zIndex'];

  /** Key of `theme.radius` or any valid CSS value to set border-radius, `theme.defaultRadius` by default */
  radius?: MantineRadius | (string & {}) | number;

  /** Key of theme.shadow or any other valid css box-shadow value */
  shadow?: MantineShadow | (string & {});

  /** If set, popover dropdown will not render */
  disabled?: boolean;

  /** Determines whether focus should be automatically returned to control when dropdown closes, false by default */
  returnFocus?: boolean;
}

export interface PopoverProps extends __PopoverProps {
  /** Popover.Target and Popover.Dropdown components */
  children: React.ReactNode;

  /** Initial opened state for uncontrolled component */
  defaultOpened?: boolean;

  /** Controls dropdown opened state */
  opened?: boolean;

  /** Called with current state when dropdown opens or closes */
  onChange?(opened: boolean): void;

  /** Determines whether dropdown should be closed on outside clicks, default to true */
  closeOnClickOutside?: boolean;

  /** Events that trigger outside clicks */
  clickOutsideEvents?: string[];

  /** Determines whether focus should be trapped within dropdown, default to false */
  trapFocus?: boolean;

  /** Determines whether dropdown should be closed when Escape key is pressed, defaults to true */
  closeOnEscape?: boolean;

  /** id base to create accessibility connections */
  id?: string;

  /** Determines whether dropdown and target element should have accessible roles, defaults to true */
  withRoles?: boolean;

  variant?: string;
  unstyled?: boolean;
  classNames?: ClassNames<PopoverStylesNames>;
  styles?: Styles<PopoverStylesNames>;
  __staticSelector?: string;
}

export interface PopoverFactory {
  props: PopoverProps;
  stylesNames: PopoverStylesNames;
}

const defaultProps: Partial<PopoverProps> = {
  position: 'bottom',
  offset: 8,
  positionDependencies: [],
  transitionProps: { transition: 'fade', duration: 150 },
  middlewares: { flip: true, shift: true, inline: false },
  arrowSize: 7,
  arrowOffset: 5,
  arrowRadius: 0,
  arrowPosition: 'side',
  closeOnClickOutside: true,
  withinPortal: true,
  closeOnEscape: true,
  trapFocus: false,
  withRoles: true,
  returnFocus: false,
  clickOutsideEvents: ['mousedown', 'touchstart'],
  zIndex: getDefaultZIndex('popover'),
  __staticSelector: 'Popover',
  width: 'max-content',
};

export function Popover(props: PopoverProps) {
  const arrowRef = useRef<HTMLDivElement | null>(null);
  const {
    children,
    position,
    offset,
    onPositionChange,
    positionDependencies,
    opened,
    transitionProps,
    width,
    middlewares,
    withArrow,
    arrowSize,
    arrowOffset,
    arrowRadius,
    arrowPosition,
    unstyled,
    classNames,
    styles,
    closeOnClickOutside,
    withinPortal,
    portalProps,
    closeOnEscape,
    clickOutsideEvents,
    trapFocus,
    onClose,
    onOpen,
    onChange,
    zIndex,
    radius,
    shadow,
    id,
    defaultOpened,
    __staticSelector,
    withRoles,
    disabled,
    returnFocus,
    variant,
    keepMounted,
    ...others
  } = useProps('Popover', defaultProps, props);

  const [targetNode, setTargetNode] = useState<HTMLElement | null>(null);
  const [dropdownNode, setDropdownNode] = useState<HTMLElement | null>(null);
  const { dir } = useDirection();

  const uid = useId(id);
  const popover = usePopover({
    middlewares,
    width,
    position: getFloatingPosition(dir, position!),
    offset: typeof offset === 'number' ? offset + (withArrow ? arrowSize! / 2 : 0) : offset!,
    arrowRef,
    arrowOffset: arrowOffset!,
    onPositionChange,
    positionDependencies,
    opened,
    defaultOpened,
    onChange,
    onOpen,
    onClose,
  });

  useClickOutside(() => closeOnClickOutside && popover.onClose(), clickOutsideEvents, [
    targetNode,
    dropdownNode,
  ]);

  const reference = useCallback(
    (node: HTMLElement) => {
      setTargetNode(node);
      popover.floating.reference(node);
    },
    [popover.floating.reference]
  );

  const floating = useCallback(
    (node: HTMLElement) => {
      setDropdownNode(node);
      popover.floating.floating(node);
    },
    [popover.floating.floating]
  );

  return (
    <PopoverContextProvider
      value={{
        returnFocus,
        disabled,
        controlled: popover.controlled,
        reference,
        floating,
        x: popover.floating.x!,
        y: popover.floating.y!,
        arrowX: popover.floating?.middlewareData?.arrow?.x!,
        arrowY: popover.floating?.middlewareData?.arrow?.y!,
        opened: popover.opened,
        arrowRef,
        transitionProps,
        width,
        withArrow,
        arrowSize: arrowSize!,
        arrowOffset: arrowOffset!,
        arrowRadius: arrowRadius!,
        arrowPosition: arrowPosition!,
        placement: popover.floating.placement,
        trapFocus,
        withinPortal,
        portalProps,
        zIndex,
        radius,
        shadow,
        closeOnEscape,
        onClose: popover.onClose,
        onToggle: popover.onToggle,
        getTargetId: () => `${uid}-target`,
        getDropdownId: () => `${uid}-dropdown`,
        withRoles,
        targetProps: others,
        __staticSelector: __staticSelector!,
        classNames,
        styles,
        unstyled,
        variant,
        keepMounted,
      }}
    >
      {children}
    </PopoverContextProvider>
  );
}

Popover.Target = PopoverTarget;
Popover.Dropdown = PopoverDropdown;
Popover.displayName = '@mantine/core/Popover';