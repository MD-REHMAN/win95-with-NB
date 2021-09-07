import React from "react";
import { StartIcon } from "../icons";
import {
	Button,
	Menu,
	MoonIcon,
	VStack,
	Pressable,
	useDisclose,
	Divider,
	Box,
	Text,
	ChevronRightIcon,
	HStack,
	theme,
} from "native-base";

export const StartMenuItem = ({ icon, text, ...props }) => {
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
					space={2}
					w="100%"
					justifyContent="space-between"
					alignItems="center"
				>
					<HStack space={2} alignItems="center" justifyContent="space-between">
						{icon}
						<Text color={(isHovered || isFocused) && "white"}>{text}</Text>
					</HStack>
					<ChevronRightIcon
						size="xs"
						ml={10}
						color={(isHovered || isFocused) && "white"}
					/>
				</HStack>
			)}
		</Pressable>
	);
};

export const Start = () => {
	const { isOpen, onToggle } = useDisclose();

	return (
		<Menu
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
					<StartMenuItem icon={<MoonIcon />} text="Programs" />
					<StartMenuItem icon={<MoonIcon />} text="Documents" />
					<StartMenuItem icon={<MoonIcon />} text="Settings" />
					<StartMenuItem icon={<MoonIcon />} text="Find" />
					<StartMenuItem icon={<MoonIcon />} text="Help" />
					<StartMenuItem icon={<MoonIcon />} text="Run..." />
					<Divider
						borderWidth={1}
						borderColor="transparent"
						borderTopColor="#aaa"
						borderBottomColor="#eee"
					/>
					<StartMenuItem icon={<MoonIcon />} text="Shut Down..." />
				</VStack>
			</HStack>
		</Menu>
	);
};
