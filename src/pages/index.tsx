import type { NextPage } from 'next'
import Head from 'next/head'
import { Box, Container, Typography } from '@mui/material'

import Link from 'common/components/Link'

const Home: NextPage = () => {
  return (
    <Container maxWidth="lg">
      <Head>
        <title>ProtoTypes Next.ts | Home</title>
        <meta name="description" content="uwm prototype next.ts app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          <Link href="/about" color="primary">
            About Page :)
          </Link>
        </Typography>
      </Box>
    </Container>
  )
}

export default Home
