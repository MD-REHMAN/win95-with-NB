import React from "react";
import { StartIcon, Documents } from "../icons";
import {
	Button,
	Menu,
	VStack,
	Pressable,
	useDisclose,
	Divider,
	Box,
	Image,
	Text,
	HStack,
	theme,
} from "native-base";

export const StartMenuItem = ({ icon, text, sideIcon, ...props }) => {
	return (
		<Pressable
			px={1}
			py={2}
			w="100%"
			_hover={{ bg: "win95Title.0" }}
			_pressed={{ bg: "win95Title.0" }}
			_focus={{ bg: "win95Title.0" }}
			_focusVisible={{ bg: "win95Title.0" }}
			{...props}
		>
			{({ isHovered, isFocused }) => (
				<HStack
					space={20}
					w="100%"
					justifyContent="space-between"
					alignItems="center"
				>
					<HStack space={2} alignItems="center" justifyContent="space-between">
						{icon}
						<Text color={(isHovered || isFocused) && "white"}>{text}</Text>
					</HStack>
					{/* <ChevronRightIcon
						size="xs"
						ml={10}
						color={(isHovered || isFocused) && "white"}
					/> */}
					{sideIcon && (
						<Box
							border={3}
							borderColor="transparent"
							borderLeftColor={isHovered || isFocused ? "white" : "black"}
						/>
					)}
				</HStack>
			)}
		</Pressable>
	);
};

export const Start = () => {
	const { isOpen, onToggle } = useDisclose();

	return (
		<Menu
			offset={6}
			crossOffset={-4}
			isOpen={isOpen}
			onClose={onToggle}
			trigger={(triggerProps) => {
				return (
					<Button
						_stack={{ space: 1 }}
						startIcon={<StartIcon />}
						{...triggerProps}
						onPress={onToggle}
						{...(isOpen && theme.components.Button.baseStyle._pressed)}
					>
						Start
					</Button>
				);
			}}
		>
			<HStack>
				<Box
					zIndex={9}
					alignItems="flex-start"
					justifyContent="flex-end"
					bg="win95Secondary"
					w={8}
					position="relative"
				>
					<Text
						bottom={0}
						left={0}
						position="absolute"
						fontSize="lg"
						fontWeight={900}
						color="win95Main"
						style={{
							transform: [
								{ rotate: "-90deg" },
								{ translateX: 50 },
								{ translateY: -35 },
							],
						}}
					>
						Windows95
					</Text>
				</Box>
				<VStack bg="win95Main">
					<StartMenuItem
						icon={
							<Image m={1} size={4} source={require("../icons/program.png")} />
						}
						text="Programs"
						sideIcon
					/>
					<StartMenuItem
						icon={<Image size={6} source={require("../icons/documents.png")} />}
						text="Documents"
						sideIcon
					/>
					<StartMenuItem
						icon={<Image size={6} source={require("../icons/settings.png")} />}
						text="Settings"
						sideIcon
					/>
					<StartMenuItem
						icon={<Image size={6} source={require("../icons/find.png")} />}
						text="Find"
						sideIcon
					/>
					<StartMenuItem
						icon={<Image size={6} source={require("../icons/help.png")} />}
						text="Help"
					/>
					<StartMenuItem
						icon={<Image size={6} source={require("../icons/run.png")} />}
						text="Run..."
					/>
					<Divider
						borderWidth={1}
						borderColor="transparent"
						borderTopColor="#aaa"
						borderBottomColor="#eee"
					/>
					<StartMenuItem
						icon={<Image size={6} source={require("../icons/shutdown.png")} />}
						text="Shut Down..."
					/>
				</VStack>
			</HStack>
		</Menu>
	);
};
