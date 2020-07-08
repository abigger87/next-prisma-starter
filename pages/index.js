import { PrismaClient } from "@prisma/client"
import { List, ListItem, ListIcon, Image, Flex, Stack, Heading, Text } from "@chakra-ui/core";
import Link from 'next/link'

export async function getStaticProps() {
  const prisma = new PrismaClient()
  const songs = await prisma.song.findMany({
    include: { artist: true }
  })

  return {
    props: {
      songs
    }
  };
}

const Song = ({name, id, artist, albumCoverUrl}) => (
  <ListItem border="1px solid" borderColor="gray.200" borderRadius={4} my={2} bg="white" key={id}>
        <Link href="/songs/[id]" as={`/songs/${id}`} passHref>
          <Flex as="a">
            <Image
              size="100px"
              objectFit="cover"
              src={albumCoverUrl}
              alt={name}
              mr={4}
            />
            <Stack>
              <Heading size="lg">{name}</Heading>
              <Text color="gray.700">{artist.name}</Text>
            </Stack>
          </Flex>
        </Link>
      </ListItem>
);

export default ({ songs }) => (
  <ul>
    {songs.map((song) => (
      <Song {...song} />
    ))}
  </ul>
);
