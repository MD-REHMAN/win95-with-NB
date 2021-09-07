import React from "react";
import { Button, Menu, MoonIcon, Divider, useDisclose } from "native-base";

export const Start = () => {
	const { isOpen, onToggle } = useDisclose();
	return (
		<Button onPress={onToggle} startIcon={<MoonIcon size="xs" />}>
			Start
		</Button>
	);
};

export const StartWithMenu = () => {
	return (
		<Menu
			placement="top left"
			// placement="top"
			trigger={(triggerProps) => {
				return (
					<Button startIcon={<MoonIcon size="xs" />} {...triggerProps}>
						Start
					</Button>
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
};
