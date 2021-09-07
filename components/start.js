import React from "react";
import {
  Button,
  Menu,
  MoonIcon,
  VStack,
  Pressable,
  useDisclose,
  Box,
  Text,
  ChevronRightIcon,
  HStack,
} from "native-base";

export const Start = ({ onPress, props }) => {
  return <StartWithMenu />;
};

export const StartWithMenu = () => {
  const { isOpen, onToggle } = useDisclose();

  return (
    <Menu
      isOpen={isOpen}
      onClose={onToggle}
      trigger={(triggerProps) => {
        return (
          <Button
            startIcon={<MoonIcon size="xs" />}
            {...triggerProps}
            onPress={onToggle}
          >
            Start
          </Button>
        );
      }}
    >
      {/* <Menu.Item>Arial</Menu.Item>
      <Menu.Item>Nunito Sans</Menu.Item>
      <Menu.Item isDisabled>Tahoma</Menu.Item>
      <Divider />
      <Menu.Item>Roboto</Menu.Item>
      <Menu.Item>Montserrat</Menu.Item> */}
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
          <Pressable
            px={1}
            py={2}
            w="100%"
            _hover={{ bg: "win95Title.0" }}
            _pressed={{ bg: "win95Title.0" }}
          >
            {({ isHovered, isPressed }) => (
              <HStack space={2} w="100%" alignItems="center">
                <MoonIcon color="yellow.500" size="md" />
                <Text color={isHovered && "white"}>Progrmams</Text>
                <ChevronRightIcon
                  size="xs"
                  ml={10}
                  color={isHovered && "white"}
                />
              </HStack>
            )}
          </Pressable>
          <Pressable
            px={1}
            py={2}
            w="100%"
            _hover={{ bg: "win95Title.0" }}
            _pressed={{ bg: "win95Title.0" }}
          >
            {({ isHovered, isPressed }) => (
              <HStack space={2} w="100%" alignItems="center">
                <MoonIcon color="yellow.500" size="md" />
                <Text color={isHovered && "white"}>Progrmams</Text>
                <ChevronRightIcon
                  size="xs"
                  ml={10}
                  color={isHovered && "white"}
                />
              </HStack>
            )}
          </Pressable>
          <Pressable
            px={1}
            py={2}
            w="100%"
            _hover={{ bg: "win95Title.0" }}
            _pressed={{ bg: "win95Title.0" }}
          >
            {({ isHovered, isPressed }) => (
              <HStack space={2} w="100%" alignItems="center">
                <MoonIcon color="yellow.500" size="md" />
                <Text color={isHovered && "white"}>Progrmams</Text>
                <ChevronRightIcon
                  size="xs"
                  ml={10}
                  color={isHovered && "white"}
                />
              </HStack>
            )}
          </Pressable>
          <Pressable
            px={1}
            py={2}
            w="100%"
            _hover={{ bg: "win95Title.0" }}
            _pressed={{ bg: "win95Title.0" }}
          >
            {({ isHovered, isPressed }) => (
              <HStack space={2} w="100%" alignItems="center">
                <MoonIcon color="yellow.500" size="md" />
                <Text color={isHovered && "white"}>Progrmams</Text>
                <ChevronRightIcon
                  size="xs"
                  ml={10}
                  color={isHovered && "white"}
                />
              </HStack>
            )}
          </Pressable>
          <Pressable
            px={1}
            py={2}
            w="100%"
            _hover={{ bg: "win95Title.0" }}
            _pressed={{ bg: "win95Title.0" }}
          >
            {({ isHovered, isPressed }) => (
              <HStack space={2} w="100%" alignItems="center">
                <MoonIcon color="yellow.500" size="md" />
                <Text color={isHovered && "white"}>Progrmams</Text>
                <ChevronRightIcon
                  size="xs"
                  ml={10}
                  color={isHovered && "white"}
                />
              </HStack>
            )}
          </Pressable>
          <Pressable
            px={1}
            py={2}
            w="100%"
            _hover={{ bg: "win95Title.0" }}
            _pressed={{ bg: "win95Title.0" }}
          >
            {({ isHovered, isPressed }) => (
              <HStack space={2} w="100%" alignItems="center">
                <MoonIcon color="yellow.500" size="md" />
                <Text color={isHovered && "white"}>Progrmams</Text>
                <ChevronRightIcon
                  size="xs"
                  ml={10}
                  color={isHovered && "white"}
                />
              </HStack>
            )}
          </Pressable>
        </VStack>
      </HStack>
    </Menu>
  );
};
