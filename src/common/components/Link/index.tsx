import dynamic from 'next/dynamic'

const DynamicLink = dynamic(() => import('./Link'), {
  loading: () => <a href="#">Dynamic Link</a>,
  ssr: false,
})

export default DynamicLink
