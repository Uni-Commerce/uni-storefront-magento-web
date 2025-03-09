import Image from 'next/image'
import Button from '@mui/material/Button'

const Home = () => {
  return (
    <>
      <main>
        <Image src="/images/uni-store.png" alt="Next.js logo" width={300} height={300} priority />
        <Button variant="contained">
          <span>Register</span>
        </Button>
      </main>
    </>
  )
}

export default Home
