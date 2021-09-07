import React from 'react';
import {
	NativeBaseProvider,
	Box,
	theme,
	MoonIcon,
	Menu,
	Divider,
	HamburgerIcon,
	VStack,
	HStack,
	Button,
	Pressable,
} from 'native-base';
import { StatusBar } from 'react-native';

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
theme.components.Button.baseStyle = {
	p: 1,
	justifyContent: 'center',
	alignItems: 'center',
	borderWidth: 2,
	borderTopColor: '#F2F2F2',
	borderLeftColor: '#F2F2F2',
	_stack: {
		// space: 1,
		alignItems: 'center',
	},
	_text: { fontWeight: 700 },
	_pressed: {
		bg: '#EEE',
		borderTopColor: 'black',
		borderLeftColor: 'black',
		borderBottomColor: '#F2F2F2',
		borderRightColor: '#F2F2F2',
	},
};
theme.components.Button.defaultProps = {};

theme.colors = {
	...theme.colors,
	win95Main: '#BFBFBF',
	win95Secondary: '#808080',
	win95Title: { 0: '#00007B', 100: '#1085D2' },
	win95TitleDisabled: { 0: '#7B7B7B', 100: '#ADADAD' },
};

const RootWindow = () => {
	return (
		<VStack bg="black" flex={1} safeArea>
			<Box flex={1} bg="#018281"></Box>
			<HStack
				space={2}
				bg="#C3C3C3"
				borderTopWidth={2}
				p={1}
				borderColor="#F2F2F2"
			>
				<Button startIcon={<MoonIcon size="xs" />}> Start</Button>
				{/* <Divider /> */}
				<Button pr={8}>Welcome</Button>
			</HStack>
		</VStack>
	);
};

export default function App() {
	return (
		<NativeBaseProvider theme={theme}>
			<StatusBar barStyle="light-content"></StatusBar>
			{/* <Box flex={1} bg="win95Main" p={20} safeArea>
				Hello world <Example />
			</Box> */}
			<RootWindow />
		</NativeBaseProvider>
	);
}
