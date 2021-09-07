import React from "react";
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
  Modal,
  CloseIcon,
  Heading,
} from "native-base";
import { StatusBar } from "react-native";

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

theme.components.Modal = {
  baseStyle: {
    alignItems: "center",
    justifyContent: "center",
  },
};

theme.components.ModalContent = {
  baseStyle: {
    borderWidth: 2,
    borderTopColor: "#F2F2F2",
    borderLeftColor: "#F2F2F2",
  },
};

theme.components.ModalCloseButton = {};
theme.components.ModalHeader = {};
theme.components.ModalBody = {};
theme.components.ModalFooter = {};
theme.components.ModalOverlay = {};
theme.components.Menu = {};
theme.components.MenuItem = {};
theme.components.Button.baseStyle = {
  p: 1,
  justifyContent: "center",
  alignItems: "center",
  borderWidth: 2,
  borderTopColor: "#F2F2F2",
  borderLeftColor: "#F2F2F2",
  _stack: {
    // space: 1,
    alignItems: "center",
  },
  _text: { fontWeight: 700 },
  _pressed: {
    bg: "#EEE",
    borderTopColor: "black",
    borderLeftColor: "black",
    borderBottomColor: "#F2F2F2",
    borderRightColor: "#F2F2F2",
  },
  _focus: {},
};
theme.components.Button.defaultProps = {};

theme.colors = {
  ...theme.colors,
  win95Main: "#BFBFBF",
  win95Secondary: "#808080",
  win95Title: { 0: "#00007B", 100: "#1085D2" },
  win95TitleDisabled: { 0: "#7B7B7B", 100: "#ADADAD" },
};

const RootWindow = () => {
  const [showModal, setShowModal] = React.useState(false);

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
        <Button onPress={() => setShowModal(!showModal)} pr={8}>
          Welcome
        </Button>
      </HStack>
      <Modal
        isOpen={true}
        onClose={() => setShowModal(false)}
        backdropVisible={false}
      >
        <Modal.Content bg="win95Main">
          <HStack alignItems="center" bg="win95Title.0">
            <Modal.Header _text={{ color: "white" }}>Welcome</Modal.Header>
            <Button
              width="8"
              height="8"
              startIcon={<CloseIcon size="xs" />}
              ml="auto"
              bg="win95Main"
            />
          </HStack>
          <Modal.Body>
            <VStack p={5}>
              <Heading bold color="black" size="lg">
                Welcome to Windows95
              </Heading>
              <HStack space={4}>
                <Box h="400px" w="400px" borderWidth={1}>
                  Banner here
                </Box>
                <Box>
                  <Button px={4}>What's new?</Button>
                </Box>
              </HStack>
            </VStack>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button>LEARN MORE</Button>
              <Button
                onPress={() => {
                  setShowModal(false);
                }}
              >
                ACCEPT
              </Button>
            </Button.Group>
          </Modal.Footer>
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
