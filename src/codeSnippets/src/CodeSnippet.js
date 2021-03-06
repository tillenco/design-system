import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { mdiContentCopy } from '@mdi/js';

import { Box } from '../../box';
import { IconButton } from '../../buttons';
import { Text } from '../../typography';

const height = 32;

const CodeSnippet = ({ children }) => (
  <Box
    data-playground-id="codeSnippet"
    position="relative"
    display="flex"
    borderRadius="3px"
    bg="gray.1"
  >
    <Box
      data-playground-id="codeSnippet.container"
      display="flex"
      alignItems="center"
      flex={1}
      height={height}
      overflowX="auto"
    >
      <Text
        data-playground-id="codeSnippet.code"
        as="code"
        size={300}
        px="spacing.4"
        fontFamily="mono"
        color="black"
      >
        <Box as="pre" m={0} css={{ whiteSpace: 'nowrap' }}>
          {children}
        </Box>
      </Text>
    </Box>

    <Box
      data-playground-id="codeSnippet.gradient"
      position="absolute"
      top={0}
      right={height}
      width="32px"
      height="100%"
      color="gray.1"
      css={{
        backgroundImage: 'linear-gradient(to right, transparent, currentColor)',
      }}
    />

    <CopyToClipboard text={children}>
      <IconButton
        data-playground-id="codeSnippet.copyToClipboard"
        label="Copy to clipboard"
        icon={mdiContentCopy}
        intent="default"
        appearance="minimal"
        height={height}
      />
    </CopyToClipboard>
  </Box>
);

export default CodeSnippet;
