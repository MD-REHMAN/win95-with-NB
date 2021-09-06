import React from 'react';
import { NativeBaseProvider, Box, theme } from 'native-base';

import { Menu, Divider, HamburgerIcon, Pressable } from 'native-base';

export function Example() {
	return (
		<Menu
			trigger={(triggerProps) => {
				return (
					<Pressable
						alignSelf="flex-start"
						accessibilityLabel="More options menu"
						{...triggerProps}
					>
						<HamburgerIcon />
					</Pressable>
				);
			}}
		>
			<Menu.Item>Arial</Menu.Item>
			<Menu.Item>Nunito Sans</Menu.Item>
			<Menu.Item isDisabled>Tahoma</Menu.Item>
			<Divider />
			<Menu.Item>Roboto</Menu.Item>
			<Menu.Item>Montserrat</Menu.Item>
		</Menu>
	);
}

theme.components.Modal = {};
theme.components.ModalContent = {};
theme.components.ModalCloseButton = {};
theme.components.ModalHeader = {};
theme.components.ModalBody = {};
theme.components.ModalFooter = {};
theme.components.ModalOverlay = {};
theme.components.Menu = {};
theme.components.MenuItem = {};

theme.colors = {
	...theme.colors,
	win95Main: '#BFBFBF',
	win95Secondary: '#808080',
	win95Title: { 0: '#00007B', 100: '#1085D2' },
	win95TitleDisabled: { 0: '#7B7B7B', 100: '#ADADAD' },
};

export default function App() {
	return (
		<NativeBaseProvider theme={theme}>
			<Box flex={1} bg="win95Main" p={20} safeArea>
				Hello world <Example />
			</Box>
		</NativeBaseProvider>
	);
}
