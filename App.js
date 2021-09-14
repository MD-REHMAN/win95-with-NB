import React from "react";
import { Start } from "./components/start";
import {
	NativeBaseProvider,
	Box,
	theme,
	Divider,
	VStack,
	HStack,
	Button,
	Modal,
	CloseIcon,
	Center,
	Heading,
} from "native-base";
import { StatusBar } from "react-native";

theme.components.Modal = {
	baseStyle: {
		alignItems: "center",
		justifyContent: "center",
	},
};

theme.components.ModalContent = {
	baseStyle: {
		borderWidth: 2,
		borderTopColor: "lightBorder",
		borderLeftColor: "lightBorder",
	},
};

theme.components.ModalCloseButton = {};
theme.components.ModalHeader = {};
theme.components.ModalBody = {};
theme.components.ModalFooter = {};
theme.components.ModalOverlay = {};
theme.components.Modal = {
	baseStyle: {
		alignItems: "center",
		justifyContent: "center",
		height: "100%",
		maxHeight: { base: "400px", sm: "100%" },
		maxWidth: { base: "300px", sm: "100%" },
	},
};
theme.components.Menu.baseStyle = {};
theme.components.MenuItem.baseStyle = {
	bg: "",
};

theme.components.Button.baseStyle = {
	p: 1,
	justifyContent: "center",
	alignItems: "center",
	borderWidth: 2,
	borderTopColor: "lightBorder",
	borderLeftColor: "lightBorder",
	_stack: {
		space: 1,
		alignItems: "center",
	},
	_text: { fontWeight: 700 },
	_pressed: {
		bg: "#EEE",
		borderTopColor: "black",
		borderLeftColor: "black",
		borderBottomColor: "lightBorder",
		borderRightColor: "lightBorder",
	},
	// can also add the pressed style for focus state as well
	_focus: {},
};

theme.components.Button.defaultProps = {};

theme.colors = {
	...theme.colors,
	win95Bg: "#018281",
	win95Main: "#BFBFBF",
	win95Secondary: "#808080",
	win95Title: { 0: "#00007B", 100: "#1085D2" },
	win95TitleDisabled: { 0: "#7B7B7B", 100: "#ADADAD" },
	lightBorder: "#F2F2F2",
};

const RootWindow = () => {
	const [showModal, setShowModal] = React.useState(false);

	return (
		<VStack bg="black" flex={1} safeArea>
			<Box flex={1} bg="win95Bg"></Box>
			<HStack
				space={2}
				bg="#C3C3C3"
				borderTopWidth={2}
				p={1}
				borderColor="lightBorder"
			>
				<Start />
				{/* <Button startIcon={<MoonIcon size="xs" />}> Start</Button> */}
				{/* <Divider /> */}
				<Button
					onPress={() => setShowModal(!showModal)}
					pr={8}
					// {...(showModal && {
					// 	bg: "#EEE",
					// 	borderTopColor: "black",
					// 	borderLeftColor: "black",
					// 	borderBottomColor: "lightBorder",
					// 	borderRightColor: "lightBorder",
					// })}
					{...(showModal && theme.components.Button.baseStyle._pressed)}
				>
					Welcome
				</Button>
			</HStack>
			<Modal
				isOpen={showModal}
				onClose={() => setShowModal(false)}
				backdropVisible={false}
			>
				<Modal.Content bg="win95Main">
					<HStack alignItems="center" bg="win95Title.0" p={1}>
						<Modal.Header _text={{ color: "white" }}>Welcome</Modal.Header>
						<Button
							onPress={() => setShowModal(false)}
							width="6"
							height="6"
							startIcon={<CloseIcon size="3" />}
							ml="auto"
							bg="win95Main"
						/>
					</HStack>
					<Modal.Body>
						<VStack p={5} space={4}>
							<Heading bold color="black" size="lg">
								Welcome to Windows95
							</Heading>
							<HStack space={4}>
								<Center h="400px" w="400px" borderWidth={1} bg="#feffe3">
									Banner here
								</Center>
								<VStack space={2}>
									<Button
										_text={{
											fontWeight: 400,
										}}
										px={4}
									>
										What's new?
									</Button>
									<Button
										_text={{
											fontWeight: 400,
										}}
										px={4}
									>
										Online Registration
									</Button>

									<VStack space={4} mt={10}>
										<Divider />
										<Button
											onPress={() => setShowModal(false)}
											_text={{
												fontWeight: 400,
											}}
											px={4}
										>
											Close
										</Button>
									</VStack>
								</VStack>
							</HStack>
						</VStack>
					</Modal.Body>
				</Modal.Content>
			</Modal>
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
