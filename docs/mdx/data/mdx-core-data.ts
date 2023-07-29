import { Frontmatter } from '@/types';

export const MDX_CORE_DATA: Record<string, Frontmatter> = {
  Button: {
    title: 'Button',
    package: '@mantine/core',
    slug: '/core/button',
    description: 'Button component to render button or link',
    componentPrefix: 'Button',
    props: ['Button', 'ButtonGroup'],
    styles: ['Button', 'ButtonGroup'],
    import: "import { Button } from '@mantine/core';",
    source: 'mantine-core/src/components/Button/Button.tsx',
    docs: 'core/button.mdx',
  },
  Loader: {
    title: 'Loader',
    package: '@mantine/core',
    slug: '/core/loader',
    description: 'Indicate loading state',
    props: ['Loader'],
    styles: ['Loader'],
    import: "import { Loader } from '@mantine/core';",
    source: 'mantine-core/src/components/Loader/Loader.tsx',
    docs: 'core/loader.mdx',
  },
  Container: {
    title: 'Container',
    package: '@mantine/core',
    slug: '/core/container',
    description: 'Center content with padding and max-width',
    props: ['Container'],
    styles: ['Container'],
    import: "import { Container } from '@mantine/core';",
    source: 'mantine-core/src/components/Container/Container.tsx',
    docs: 'core/container.mdx',
  },
  Anchor: {
    title: 'Anchor',
    package: '@mantine/core',
    slug: '/core/anchor',
    description: 'Display link with theme styles',
    props: ['Anchor'],
    styles: ['Anchor'],
    import: "import { Anchor } from '@mantine/core';",
    source: 'mantine-core/src/components/Anchor/Anchor.tsx',
    docs: 'core/anchor.mdx',
  },
  Input: {
    title: 'Input',
    package: '@mantine/core',
    slug: '/core/input',
    description: 'Base component to create custom inputs',
    componentPrefix: 'Input',
    props: ['Input', 'InputWrapper', 'InputLabel', 'InputDescription', 'InputError'],
    styles: ['Input', 'InputWrapper'],
    polymorphic: true,
    import: "import { Input } from '@mantine/core';",
    source: 'mantine-core/src/components/Input/Input.tsx',
    docs: 'core/input.mdx',
  },
  ActionIcon: {
    title: 'ActionIcon',
    package: '@mantine/core',
    slug: '/core/action-icon',
    description: 'Icon button',
    componentPrefix: 'ActionIcon',
    props: ['ActionIcon', 'ActionIconGroup'],
    styles: ['ActionIcon', 'ActionIconGroup'],
    polymorphic: true,
    import: "import { ActionIcon } from '@mantine/core';",
    source: 'mantine-core/src/components/ActionIcon/ActionIcon.tsx',
    docs: 'core/action-icon.mdx',
  },
  CloseButton: {
    title: 'CloseButton',
    package: '@mantine/core',
    slug: '/core/close-button',
    description: 'ActionIcon with close icon',
    props: ['CloseButton'],
    styles: ['CloseButton'],
    polymorphic: true,
    import: "import { CloseButton } from '@mantine/core';",
    source: 'mantine-core/src/components/CloseButton/CloseButton.tsx',
    docs: 'core/close-button.mdx',
  },
  CopyButton: {
    title: 'CopyButton',
    package: '@mantine/core',
    slug: '/core/copy-button',
    description: 'Copies given text to clipboard',
    props: ['CopyButton'],
    import: "import { CopyButton } from '@mantine/core';",
    source: 'mantine-core/src/components/CopyButton/CopyButton.tsx',
    docs: 'core/copy-button.mdx',
  },
  FileButton: {
    title: 'FileButton',
    package: '@mantine/core',
    slug: '/core/file-button',
    description: 'Open file picker with a button click',
    props: ['FileButton'],
    import: "import { FileButton } from '@mantine/core';",
    source: 'mantine-core/src/components/FileButton/FileButton.tsx',
    docs: 'core/file-button.mdx',
  },
  UnstyledButton: {
    title: 'UnstyledButton',
    package: '@mantine/core',
    slug: '/core/unstyled-button',
    description: 'Unstyled polymorphic button',
    polymorphic: true,
    import: "import { UnstyledButton } from '@mantine/core';",
    source: 'mantine-core/src/components/UnstyledButton/UnstyledButton.tsx',
    docs: 'core/unstyled-button.mdx',
  },
  Tabs: {
    title: 'Tabs',
    package: '@mantine/core',
    slug: '/core/tabs',
    props: ['Tabs', 'TabsList', 'TabsTab', 'TabsPanel'],
    styles: ['Tabs'],
    description: 'Switch between different views',
    import: "import { Tabs } from '@mantine/core';",
    source: 'mantine-core/src/components/Tabs/Tabs.tsx',
    docs: 'core/tabs.mdx',
  },
  BackgroundImage: {
    title: 'BackgroundImage',
    package: '@mantine/core',
    slug: '/core/background-image',
    description: 'Displays image as background',
    polymorphic: true,
    props: ['BackgroundImage'],
    styles: ['BackgroundImage'],
    import: "import { BackgroundImage } from '@mantine/core';",
    source: 'mantine-core/src/components/BackgroundImage/BackgroundImage.tsx',
    docs: 'core/background-image.mdx',
  },
  Blockquote: {
    title: 'Blockquote',
    package: '@mantine/core',
    slug: '/core/blockquote',
    props: ['Blockquote'],
    styles: ['Blockquote'],
    description: 'Blockquote with optional cite',
    import: "import { Blockquote } from '@mantine/core';",
    source: 'mantine-core/src/components/Blockquote/Blockquote.tsx',
    docs: 'core/blockquote.mdx',
  },
  Breadcrumbs: {
    title: 'Breadcrumbs',
    package: '@mantine/core',
    slug: '/core/breadcrumbs',
    props: ['Breadcrumbs'],
    styles: ['Breadcrumbs'],
    description: 'Separates list of react nodes with given separator',
    import: "import { Breadcrumbs } from '@mantine/core';",
    source: 'mantine-core/src/components/Breadcrumbs/Breadcrumbs.tsx',
    docs: 'core/breadcrumbs.mdx',
  },
  Burger: {
    title: 'Burger',
    package: '@mantine/core',
    slug: '/core/burger',
    props: ['Burger'],
    styles: ['Burger'],
    description: 'Open/close navigation button',
    import: "import { Burger } from '@mantine/core';",
    source: 'mantine-core/src/components/Burger/Burger.tsx',
    docs: 'core/burger.mdx',
  },
  Center: {
    title: 'Center',
    package: '@mantine/core',
    slug: '/core/center',
    props: ['Center'],
    styles: ['Center'],
    polymorphic: true,
    description: 'Centers content vertically and horizontally',
    import: "import { Center } from '@mantine/core';",
    source: 'mantine-core/src/components/Center/Center.tsx',
    docs: 'core/center.mdx',
  },
  Code: {
    title: 'Code',
    package: '@mantine/core',
    slug: '/core/code',
    props: ['Code'],
    styles: ['Code'],
    description: 'Inline and block code',
    import: "import { Code } from '@mantine/core';",
    source: 'mantine-core/src/components/Code/Code.tsx',
    docs: 'core/code.mdx',
  },
  Collapse: {
    title: 'Collapse',
    package: '@mantine/core',
    slug: '/core/collapse',
    props: ['Collapse'],
    description: 'Animate presence with slide down/up transition',
    import: "import { Collapse } from '@mantine/core';",
    source: 'mantine-core/src/components/Collapse/Collapse.tsx',
    docs: 'core/collapse.mdx',
  },
  ColorPicker: {
    title: 'ColorPicker',
    package: '@mantine/core',
    slug: '/core/color-picker',
    props: ['ColorPicker'],
    styles: ['ColorPicker'],
    description: 'Pick colors',
    import: "import { ColorPicker } from '@mantine/core';",
    source: 'mantine-core/src/components/ColorPicker/ColorPicker.tsx',
    docs: 'core/color-picker.mdx',
  },
  ColorSwatch: {
    title: 'ColorSwatch',
    package: '@mantine/core',
    slug: '/core/color-swatch',
    props: ['ColorSwatch'],
    styles: ['ColorSwatch'],
    polymorphic: true,
    description: 'Displays color',
    import: "import { ColorSwatch } from '@mantine/core';",
    source: 'mantine-core/src/components/ColorSwatch/ColorSwatch.tsx',
    docs: 'core/color-swatch.mdx',
  },
  FocusTrap: {
    title: 'FocusTrap',
    package: '@mantine/core',
    slug: '/core/focus-trap',
    props: ['FocusTrap'],
    description: 'Trap focus at child node',
    import: "import { FocusTrap } from '@mantine/core';",
    source: 'mantine-core/src/components/FocusTrap/FocusTrap.tsx',
    docs: 'core/focus-trap.mdx',
  },
  Group: {
    title: 'Group',
    package: '@mantine/core',
    slug: '/core/group',
    props: ['Group'],
    styles: ['Group'],
    description: 'Compose elements and components in a horizontal flex container',
    import: "import { Group } from '@mantine/core';",
    source: 'mantine-core/src/components/Group/Group.tsx',
    docs: 'core/group.mdx',
  },
  Highlight: {
    title: 'Highlight',
    package: '@mantine/core',
    slug: '/core/highlight',
    props: ['Highlight'],
    styles: ['Highlight'],
    polymorphic: true,
    description: 'Highlight given part of a string with mark',
    import: "import { Highlight } from '@mantine/core';",
    source: 'mantine-core/src/components/Highlight/Highlight.tsx',
    docs: 'core/highlight.mdx',
  },
  Kbd: {
    title: 'Kbd',
    package: '@mantine/core',
    slug: '/core/kbd',
    props: ['Kbd'],
    styles: ['Kbd'],
    description: 'Display keyboard key',
    import: "import { Kbd } from '@mantine/core';",
    source: 'mantine-core/src/components/Kbd/Kbd.tsx',
    docs: 'core/kbd.mdx',
  },
  Mark: {
    title: 'Mark',
    package: '@mantine/core',
    slug: '/core/mark',
    props: ['Mark'],
    styles: ['Mark'],
    description: 'Highlight part of the text',
    import: "import { Mark } from '@mantine/core';",
    source: 'mantine-core/src/components/Mark/Mark.tsx',
    docs: 'core/mark.mdx',
  },
  NativeSelect: {
    title: 'NativeSelect',
    package: '@mantine/core',
    slug: '/core/native-select',
    props: ['NativeSelect'],
    styles: ['NativeSelect'],
    description: 'Native select element based on Input',
    import: "import { NativeSelect } from '@mantine/core';",
    source: 'mantine-core/src/components/NativeSelect/NativeSelect.tsx',
    docs: 'core/native-select.mdx',
  },
  Notification: {
    title: 'Notification',
    package: '@mantine/core',
    slug: '/core/notification',
    props: ['Notification'],
    styles: ['Notification'],
    description: 'Show dynamic notifications and alerts to user, part of notifications system',
    import: "import { Notification } from '@mantine/core';",
    source: 'mantine-core/src/components/Notification/Notification.tsx',
    docs: 'core/notification.mdx',
  },
  Paper: {
    title: 'Paper',
    package: '@mantine/core',
    slug: '/core/paper',
    props: ['Paper'],
    styles: ['Paper'],
    description: 'Renders white or dark background depending on color scheme',
    polymorphic: true,
    import: "import { Paper } from '@mantine/core';",
    source: 'mantine-core/src/components/Paper/Paper.tsx',
    docs: 'core/paper.mdx',
  },
  Popover: {
    title: 'Popover',
    package: '@mantine/core',
    slug: '/core/popover',
    componentPrefix: 'Popover',
    props: ['Popover', 'PopoverTarget'],
    styles: ['Popover'],
    description: 'Display popover section relative to given target element',
    import: "import { Popover } from '@mantine/core';",
    source: 'mantine-core/src/components/Popover/Popover.tsx',
    docs: 'core/popover.mdx',
  },
  Portal: {
    title: 'Portal',
    package: '@mantine/core',
    slug: '/core/portal',
    props: ['Portal'],
    description: 'Renders component outside of parent element tree',
    import: "import { Portal } from '@mantine/core';",
    source: 'mantine-core/src/components/Portal/Portal.tsx',
    docs: 'core/portal.mdx',
  },
  ScrollArea: {
    title: 'ScrollArea',
    package: '@mantine/core',
    slug: '/core/scroll-area',
    props: ['ScrollArea'],
    styles: ['ScrollArea'],
    description: 'Area with custom scrollbars',
    import: "import { ScrollArea } from '@mantine/core';",
    source: 'mantine-core/src/components/ScrollArea/ScrollArea.tsx',
    docs: 'core/scroll-area.mdx',
  },
  SegmentedControl: {
    title: 'SegmentedControl',
    package: '@mantine/core',
    slug: '/core/segmented-control',
    props: ['SegmentedControl'],
    styles: ['SegmentedControl'],
    description: 'A linear set of two or more segments',
    import: "import { SegmentedControl } from '@mantine/core';",
    source: 'mantine-core/src/components/SegmentedControl/SegmentedControl.tsx',
    docs: 'core/segmented-control.mdx',
  },
  Slider: {
    title: 'Slider',
    package: '@mantine/core',
    slug: '/core/slider',
    props: ['Slider', 'RangeSlider'],
    styles: ['Slider'],
    description: 'Slider and RangeSlider components',
    import: "import { Slider } from '@mantine/core';",
    source: 'mantine-core/src/components/Slider/Slider.tsx',
    docs: 'core/slider.mdx',
  },
  Stack: {
    title: 'Stack',
    package: '@mantine/core',
    slug: '/core/stack',
    props: ['Stack'],
    styles: ['Stack'],
    description: 'Compose elements and components in a vertical flex container',
    import: "import { Stack } from '@mantine/core';",
    source: 'mantine-core/src/components/Stack/Stack.tsx',
    docs: 'core/stack.mdx',
  },
  Switch: {
    title: 'Switch',
    package: '@mantine/core',
    slug: '/core/switch',
    props: ['Switch', 'SwitchGroup'],
    styles: ['Switch'],
    description: 'Capture boolean input from user',
    import: "import { Switch } from '@mantine/core';",
    source: 'mantine-core/src/components/Switch/Switch.tsx',
    docs: 'core/switch.mdx',
  },
  Table: {
    title: 'Table',
    package: '@mantine/core',
    slug: '/core/table',
    props: ['Table'],
    styles: ['Table'],
    description: 'Render table with theme styles',
    import: "import { Table } from '@mantine/core';",
    source: 'mantine-core/src/components/Table/Table.tsx',
    docs: 'core/table.mdx',
  },
  Text: {
    title: 'Text',
    package: '@mantine/core',
    slug: '/core/text',
    props: ['Text'],
    styles: ['Text'],
    description: 'Display text',
    import: "import { Text } from '@mantine/core';",
    source: 'mantine-core/src/components/Text/Text.tsx',
    docs: 'core/text.mdx',
  },
  TextInput: {
    title: 'TextInput',
    package: '@mantine/core',
    slug: '/core/text-input',
    props: ['TextInput'],
    styles: ['TextInput'],
    description: 'Capture string input from user',
    import: "import { TextInput } from '@mantine/core';",
    source: 'mantine-core/src/components/TextInput/TextInput.tsx',
    docs: 'core/text-input.mdx',
  },
  Title: {
    title: 'Title',
    package: '@mantine/core',
    slug: '/core/title',
    props: ['Title'],
    styles: ['Title'],
    description: 'h1-h6 heading',
    import: "import { Title } from '@mantine/core';",
    source: 'mantine-core/src/components/Title/Title.tsx',
    docs: 'core/title.mdx',
  },
  Badge: {
    title: 'Badge',
    package: '@mantine/core',
    slug: '/core/badge',
    props: ['Badge'],
    styles: ['Badge'],
    polymorphic: true,
    description: 'Display badge, pill or tag',
    import: "import { Badge } from '@mantine/core';",
    source: 'mantine-core/src/components/Badge/Badge.tsx',
    docs: 'core/badge.mdx',
  },
  Tooltip: {
    title: 'Tooltip',
    package: '@mantine/core',
    slug: '/core/tooltip',
    props: ['Tooltip'],
    styles: ['Tooltip'],
    description: 'Renders tooltip at given element on mouse over or other event',
    import: "import { Tooltip } from '@mantine/core';",
    source: 'mantine-core/src/components/Tooltip/Tooltip.tsx',
    docs: 'core/tooltip.mdx',
  },
  Transition: {
    title: 'Transition',
    package: '@mantine/core',
    slug: '/core/transition',
    props: ['Transition'],
    description: 'Animate presence of component with pre-made animations',
    import: "import { Transition } from '@mantine/core';",
    source: 'mantine-core/src/components/Transition/Transition.tsx',
    docs: 'core/transition.mdx',
  },
  TypographyStylesProvider: {
    title: 'TypographyStylesProvider',
    package: '@mantine/core',
    slug: '/core/typography-styles-provider',
    description: 'Styles provider for html content',
    import: "import { TypographyStylesProvider } from '@mantine/core';",
    source: 'mantine-core/src/components/TypographyStylesProvider/TypographyStylesProvider.tsx',
    docs: 'core/typography-styles-provider.mdx',
  },
  VisuallyHidden: {
    title: 'VisuallyHidden',
    package: '@mantine/core',
    slug: '/core/visually-hidden',
    description: 'Hide element visually but keep it accessible for screen readers',
    import: "import { VisuallyHidden } from '@mantine/core';",
    source: 'mantine-core/src/components/VisuallyHidden/VisuallyHidden.tsx',
    docs: 'core/visually-hidden.mdx',
  },
  Divider: {
    title: 'Divider',
    package: '@mantine/core',
    slug: '/core/divider',
    props: ['Divider'],
    styles: ['Divider'],
    description: 'Horizontal line with optional label or vertical divider',
    import: "import { Divider } from '@mantine/core';",
    source: 'mantine-core/src/components/Divider/Divider.tsx',
    docs: 'core/divider.mdx',
  },
  AspectRatio: {
    title: 'AspectRatio',
    package: '@mantine/core',
    slug: '/core/aspect-ratio',
    props: ['AspectRatio'],
    styles: ['AspectRatio'],
    description: 'Maintain responsive consistent width/height ratio',
    import: "import { AspectRatio } from '@mantine/core';",
    source: 'mantine-core/src/components/AspectRatio/AspectRatio.tsx',
    docs: 'core/aspect-ratio.mdx',
  },
  Overlay: {
    title: 'Overlay',
    package: '@mantine/core',
    slug: '/core/overlay',
    props: ['Overlay'],
    styles: ['Overlay'],
    polymorphic: true,
    description: 'Overlays parent element with div element with any color and opacity',
    import: "import { Overlay } from '@mantine/core';",
    source: 'mantine-core/src/components/Overlay/Overlay.tsx',
    docs: 'core/overlay.mdx',
  },
  Avatar: {
    title: 'Avatar',
    package: '@mantine/core',
    slug: '/core/avatar',
    props: ['Avatar'],
    styles: ['Avatar'],
    polymorphic: true,
    description: 'Display user profile image, initials or fallback icon',
    import: "import { Avatar } from '@mantine/core';",
    source: 'mantine-core/src/components/Avatar/Avatar.tsx',
    docs: 'core/avatar.mdx',
  },

  Alert: {
    title: 'Alert',
    package: '@mantine/core',
    slug: '/core/alert',
    props: ['Alert'],
    styles: ['Alert'],
    description: 'Attract user attention with important static message',
    import: "import { Alert } from '@mantine/core';",
    source: 'mantine-core/src/components/Alert/Alert.tsx',
    docs: 'core/alert.mdx',
  },

  Affix: {
    title: 'Affix',
    package: '@mantine/core',
    slug: '/core/affix',
    props: ['Affix'],
    styles: ['Affix'],
    description: 'Renders children inside portal at fixed position',
    import: "import { Affix } from '@mantine/core';",
    source: 'mantine-core/src/components/Affix/Affix.tsx',
    docs: 'core/affix.mdx',
  },

  Fieldset: {
    title: 'Fieldset',
    package: '@mantine/core',
    slug: '/core/fieldset',
    props: ['Fieldset'],
    styles: ['Fieldset'],
    description: 'Group related elements in a form',
    import: "import { Fieldset } from '@mantine/core';",
    source: 'mantine-core/src/components/Fieldset/Fieldset.tsx',
    docs: 'core/fieldset.mdx',
  },

  Checkbox: {
    title: 'Checkbox',
    package: '@mantine/core',
    slug: '/core/checkbox',
    componentPrefix: 'Checkbox',
    props: ['Checkbox', 'CheckboxGroup'],
    styles: ['Checkbox', 'CheckboxGroup'],
    description: 'Capture boolean input from user',
    import: "import { Checkbox } from '@mantine/core';",
    source: 'mantine-core/src/components/Checkbox/Checkbox.tsx',
    docs: 'core/checkbox.mdx',
  },

  Combobox: {
    title: 'Combobox',
    package: '@mantine/core',
    slug: '/core/combobox',
    componentPrefix: 'Combobox',
    props: [
      'Combobox',
      'ComboboxOption',
      'ComboboxTarget',
      'ComboboxDropdownTarget',
      'ComboboxEventsTarget',
      'ComboboxDropdown',
      'ComboboxGroup',
    ],
    styles: ['Combobox'],
    description: 'Create custom select, autocomplete or multiselect inputs',
    import: "import { Combobox } from '@mantine/core';",
    source: 'mantine-core/src/components/Combobox/Combobox.tsx',
    docs: 'core/combobox.mdx',
  },

  Modal: {
    title: 'Modal',
    package: '@mantine/core',
    slug: '/core/modal',
    props: ['Modal'],
    styles: ['Modal'],
    description: 'An accessible overlay dialog',
    import: "import { Modal } from '@mantine/core';",
    source: 'mantine-core/src/components/Modal/Modal.tsx',
    docs: 'core/modal.mdx',
  },

  Drawer: {
    title: 'Drawer',
    package: '@mantine/core',
    slug: '/core/drawer',
    props: ['Drawer'],
    styles: ['Drawer'],
    description: 'Display overlay area at any side of the screen',
    import: "import { Drawer } from '@mantine/core';",
    source: 'mantine-core/src/components/Drawer/Drawer.tsx',
    docs: 'core/drawer.mdx',
  },

  Accordion: {
    title: 'Accordion',
    package: '@mantine/core',
    slug: '/core/accordion',
    props: ['Accordion', 'AccordionItem', 'AccordionControl'],
    styles: ['Accordion'],
    componentPrefix: 'Accordion',
    description: 'Divide content into collapsible sections',
    import: "import { Accordion } from '@mantine/core';",
    source: 'mantine-core/src/components/Accordion/Accordion.tsx',
    docs: 'core/accordion.mdx',
  },

  Pill: {
    title: 'Pill',
    package: '@mantine/core',
    slug: '/core/pill',
    props: ['Pill', 'PillGroup'],
    styles: ['Pill', 'PillGroup'],
    description: 'Removable and non-removable tags',
    import: "import { Pill } from '@mantine/core';",
    source: 'mantine-core/src/components/Pill/Pill.tsx',
    docs: 'core/pill.mdx',
  },

  PillsInput: {
    title: 'PillsInput',
    package: '@mantine/core',
    slug: '/core/pills-input',
    props: ['PillsInput', 'PillsInputField'],
    styles: ['PillsInput', 'PillsInputField'],
    description: 'Base component for custom tags inputs and multi selects',
    import: "import { PillsInput } from '@mantine/core';",
    source: 'mantine-core/src/components/PillsInput/PillsInput.tsx',
    docs: 'core/pills-input.mdx',
  },

  Autocomplete: {
    title: 'Autocomplete',
    package: '@mantine/core',
    slug: '/core/autocomplete',
    props: ['Autocomplete'],
    styles: ['Autocomplete'],
    description: 'Autocomplete user input with any list of options',
    import: "import { Autocomplete } from '@mantine/core';",
    source: 'mantine-core/src/components/Autocomplete/Autocomplete.tsx',
    docs: 'core/autocomplete.mdx',
  },

  TagsInput: {
    title: 'TagsInput',
    package: '@mantine/core',
    slug: '/core/tags-input',
    props: ['TagsInput'],
    styles: ['TagsInput'],
    description: 'Capture a list of values from user with free input and suggestions',
    import: "import { TagsInput } from '@mantine/core';",
    source: 'mantine-core/src/components/TagsInput/TagsInput.tsx',
    docs: 'core/tags-input.mdx',
  },

  Select: {
    title: 'Select',
    package: '@mantine/core',
    slug: '/core/select',
    props: ['Select'],
    styles: ['Select'],
    description: 'Custom searchable select',
    import: "import { Select } from '@mantine/core';",
    source: 'mantine-core/src/components/Select/Select.tsx',
    docs: 'core/select.mdx',
  },

  MultiSelect: {
    title: 'MultiSelect',
    package: '@mantine/core',
    slug: '/core/multi-select',
    props: ['MultiSelect'],
    styles: ['MultiSelect'],
    description: 'Custom searchable multi select',
    import: "import { MultiSelect } from '@mantine/core';",
    source: 'mantine-core/src/components/MultiSelect/MultiSelect.tsx',
    docs: 'core/multi-select.mdx',
  },

  Pagination: {
    title: 'Pagination',
    package: '@mantine/core',
    slug: '/core/pagination',
    props: ['Pagination'],
    styles: ['Pagination'],
    description: 'Display active page and navigate between multiple pages',
    import: "import { Pagination } from '@mantine/core';",
    source: 'mantine-core/src/components/Pagination/Pagination.tsx',
    docs: 'core/pagination.mdx',
  },

  AppShell: {
    title: 'AppShell',
    package: '@mantine/core',
    slug: '/core/app-shell',
    props: ['AppShell', 'AppShellNavbar', 'AppShellHeader', 'AppShellAside', 'AppShellFooter'],
    styles: ['AppShell'],
    componentPrefix: 'AppShell',
    description: 'Responsive shell for your application with header, navbar, aside and footer',
    import: "import { AppShell } from '@mantine/core';",
    source: 'mantine-core/src/components/AppShell/AppShell.tsx',
    docs: 'core/app-shell.mdx',
  },

  Skeleton: {
    title: 'Skeleton',
    package: '@mantine/core',
    slug: '/core/skeleton',
    props: ['Skeleton'],
    styles: ['Skeleton'],
    description: 'Indicate content loading state',
    import: "import { Skeleton } from '@mantine/core';",
    source: 'mantine-core/src/components/Skeleton/Skeleton.tsx',
    docs: 'core/skeleton.mdx',
  },

  SimpleGrid: {
    title: 'SimpleGrid',
    package: '@mantine/core',
    slug: '/core/simple-grid',
    props: ['SimpleGrid'],
    styles: ['SimpleGrid'],
    description: 'Responsive grid in which each item takes equal amount of space',
    import: "import { SimpleGrid } from '@mantine/core';",
    source: 'mantine-core/src/components/SimpleGrid/SimpleGrid.tsx',
    docs: 'core/simple-grid.mdx',
  },

  Grid: {
    title: 'Grid',
    package: '@mantine/core',
    slug: '/core/grid',
    props: ['Grid', 'GridCol'],
    styles: ['Grid'],
    componentPrefix: 'Grid',
    description: 'Responsive grid system',
    import: "import { Grid } from '@mantine/core';",
    source: 'mantine-core/src/components/Grid/Grid.tsx',
    docs: 'core/grid.mdx',
  },

  HoverCard: {
    title: 'HoverCard',
    package: '@mantine/core',
    slug: '/core/hover-card',
    props: ['HoverCard', 'HoverCardTarget'],
    styles: ['HoverCard'],
    componentPrefix: 'HoverCard',
    description: 'Display popover section when target element is hovered',
    import: "import { HoverCard } from '@mantine/core';",
    source: 'mantine-core/src/components/HoverCard/HoverCard.tsx',
    docs: 'core/hover-card.mdx',
  },

  Menu: {
    title: 'Menu',
    package: '@mantine/core',
    slug: '/core/menu',
    props: ['Menu', 'MenuTarget', 'MenuItem'],
    styles: ['Menu'],
    componentPrefix: 'Menu',
    description: 'Combine a list of secondary actions into single interactive area',
    import: "import { Menu } from '@mantine/core';",
    source: 'mantine-core/src/components/Menu/Menu.tsx',
    docs: 'core/menu.mdx',
  },

  Progress: {
    title: 'Progress',
    package: '@mantine/core',
    slug: '/core/progress',
    props: ['Progress', 'ProgressRoot', 'ProgressSection'],
    styles: ['Progress'],
    componentPrefix: 'Progress',
    description: 'Give user feedback for status of the task',
    import: "import { Progress } from '@mantine/core';",
    source: 'mantine-core/src/components/Progress/Progress.tsx',
    docs: 'core/progress.mdx',
  },

  RingProgress: {
    title: 'RingProgress',
    package: '@mantine/core',
    slug: '/core/ring-progress',
    props: ['RingProgress'],
    styles: ['RingProgress'],
    description: 'Give user feedback for status of the task with circle diagram',
    import: "import { RingProgress } from '@mantine/core';",
    source: 'mantine-core/src/components/RingProgress/RingProgress.tsx',
    docs: 'core/ring-progress.mdx',
  },

  Chip: {
    title: 'Chip',
    package: '@mantine/core',
    slug: '/core/chip',
    props: ['Chip', 'ChipGroup'],
    styles: ['Chip'],
    componentPrefix: 'Chip',
    description: 'Pick one or multiple values with inline controls',
    import: "import { Chip } from '@mantine/core';",
    source: 'mantine-core/src/components/Chip/Chip.tsx',
    docs: 'core/chip.mdx',
  },

  PinInput: {
    title: 'PinInput',
    package: '@mantine/core',
    slug: '/core/pin-input',
    props: ['PinInput'],
    styles: ['PinInput'],
    description: 'Capture pin code or one time password from the user',
    import: "import { PinInput } from '@mantine/core';",
    source: 'mantine-core/src/components/PinInput/PinInput.tsx',
    docs: 'core/pin-input.mdx',
  },

  Rating: {
    title: 'Rating',
    package: '@mantine/core',
    slug: '/core/rating',
    props: ['Rating'],
    styles: ['Rating'],
    description: 'Pick and display rating',
    import: "import { Rating } from '@mantine/core';",
    source: 'mantine-core/src/components/Rating/Rating.tsx',
    docs: 'core/rating.mdx',
  },

  Space: {
    title: 'Space',
    package: '@mantine/core',
    slug: '/core/space',
    description: 'Add horizontal or vertical spacing from theme',
    import: "import { Space } from '@mantine/core';",
    source: 'mantine-core/src/components/Space/Space.tsx',
    docs: 'core/space.mdx',
  },

  Indicator: {
    title: 'Indicator',
    package: '@mantine/core',
    slug: '/core/indicator',
    props: ['Indicator'],
    styles: ['Indicator'],
    description: 'Display element at the corner of another element',
    import: "import { Indicator } from '@mantine/core';",
    source: 'mantine-core/src/components/Indicator/Indicator.tsx',
    docs: 'core/indicator.mdx',
  },

  Textarea: {
    title: 'Textarea',
    package: '@mantine/core',
    slug: '/core/textarea',
    props: ['Textarea'],
    styles: ['Textarea'],
    description: 'Autosize or regular textarea',
    import: "import { Textarea } from '@mantine/core';",
    source: 'mantine-core/src/components/Textarea/Textarea.tsx',
    docs: 'core/textarea.mdx',
  },

  JsonInput: {
    title: 'JsonInput',
    package: '@mantine/core',
    slug: '/core/json-input',
    props: ['JsonInput'],
    styles: ['JsonInput'],
    description: 'Capture json data from user',
    import: "import { JsonInput } from '@mantine/core';",
    source: 'mantine-core/src/components/JsonInput/JsonInput.tsx',
    docs: 'core/json-input.mdx',
  },

  Image: {
    title: 'Image',
    package: '@mantine/core',
    slug: '/core/image',
    props: ['Image'],
    styles: ['Image'],
    polymorphic: true,
    description: 'Image with optional fallback',
    import: "import { Image } from '@mantine/core';",
    source: 'mantine-core/src/components/Image/Image.tsx',
    docs: 'core/image.mdx',
  },

  Card: {
    title: 'Card',
    package: '@mantine/core',
    slug: '/core/card',
    props: ['Card', 'CardSection'],
    styles: ['Card'],
    componentPrefix: 'Card',
    description: 'Card with sections',
    import: "import { Card } from '@mantine/core';",
    source: 'mantine-core/src/components/Card/Card.tsx',
    docs: 'core/card.mdx',
  },
};
