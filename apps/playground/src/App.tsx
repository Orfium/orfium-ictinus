import { Link } from '@orfium/ictinus';
import { Box, Icon, Text } from '@orfium/ictinus/vanilla';

import * as styles from './App.css';

function App() {
  return (
    <Box display="flex">
      <Box display="flex" flexShrink="0" bg="alt" style={{ width: '308px' }}></Box>
      <Box p="3xl" w="full" style={{ containerType: 'inline-size' }}>
        <Box p="2xl" boxShadow="2" display="flex" gap="lg" w="full" className={styles.container}>
          <Box display="grid" gap="lg" flex="1" w="full" className={styles.grid}>
            <Box p="lg" border="1" rounded="2">
              <Text typography="title01">Include other works</Text>
            </Box>
            <Box p="lg" border="1" rounded="2">
              <Text typography="title01">-</Text>
            </Box>
            <Box p="lg" border="1" rounded="2">
              <Text typography="title01">25.08.2022 15:40 PM</Text>
            </Box>
            <Box p="lg" border="1" rounded="2">
              <Text typography="title01">Include other works</Text>
            </Box>
            <Box p="lg" border="1" rounded="2">
              <Text typography="title01">Include other works</Text>
            </Box>
            <Box p="lg" border="1" rounded="2">
              <Text typography="title01">25.08.2022 15:40 PM</Text>
            </Box>
          </Box>
          <Box
            borderColor="decorative.default"
            display="flex"
            flexDirection="column"
            maxW="full"
            className={styles.sidebar}
          >
            <Text typography="headline05" mb="md">
              Resources
            </Text>
            <Box display="flex" alignItems="center" justifyContent="space-between" gap="sm">
              <Box display="inline-flex" alignItems="center" gap="sm">
                <Icon name="file" color="indicator.brand" />
                <Link>
                  <Text wordBreak="break-all" lineClamp="1">
                    tmp4ftmtjcn_modified_relinquish_automation_tests.V22
                  </Text>
                </Link>
              </Box>
              <Icon name="download" color="secondary" />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
