import Button from 'components/Common/Button/Button'
import { Flex } from 'components/Common'
import Heading from 'components/Common/Heading/Heading'

import { NextLinkFromReactRouter } from 'components/NextLink'
import { useTranslation } from 'contexts/Localization'
import useTheme from 'hooks/useTheme'
import Image from 'next/image'
import styled, { keyframes } from 'styled-components'
import bunnyImage from '../../../../public/images/home/lunar-bunny/bunny@2x.png'
import NFTImage from '../../../../public/images/home/nft/NFT_2_1.png'
import NFTMonitoring from '../../../../public/images/home/nft/Monitoring_2_1.png'
import NFTDigital_Art from '../../../../public/images/home/nft/Digital_Art_2_1.png'
import NFTMarket from '../../../../public/images/home/nft/Market_2_1.png'
import Text from 'components/Common/Text/Text'
import CompositeImage, { CompositeImageProps } from './CompositeImage'
// import { SlideSvgDark, SlideSvgLight } from './SlideSvg'

const flyingAnim = () => keyframes`
  from {
    transform: translate(0,  0px);
  }
  50% {
    transform: translate(-5px, -5px);
  }
  to {
    transform: translate(0, 0px);
  }
`

const fading = () => keyframes`
  from {
    opacity: 0.9;
  }
  50% {
    opacity: 0.1;
  }
  to {
    opacity: 0.9;
  }
`

const BgWrapper = styled.div`
  z-index: -1;
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 0px;
  left: 0px;
`

const InnerWrapper = styled.div`
  position: absolute;
  width: 100%;
  bottom: -3px;
`

const BunnyWrapper = styled.div`
  width: 100%;
  animation: ${flyingAnim} 3.5s ease-in-out infinite;
  will-change: transform;
  > span {
    overflow: visible !important; // make sure the next-image pre-build blur image not be cropped
  }
`

const StarsWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  & :nth-child(2) {
    animation: ${fading} 2s ease-in-out infinite;
    animation-delay: 1s;
  }

  & :nth-child(3) {
    animation: ${fading} 5s ease-in-out infinite;
    animation-delay: 0.66s;
  }

  & :nth-child(4) {
    animation: ${fading} 2.5s ease-in-out infinite;
    animation-delay: 0.33s;
  }
`

const starsImage: CompositeImageProps = {
  path: '/images/home/lunar-bunny/',
  attributes: [
    { src: 'star-l', alt: '3D Star' },
    { src: 'star-r', alt: '3D Star' },
    { src: 'star-top-r', alt: '3D Star' },
  ],
}

const Hero = () => {
  const { t } = useTranslation()

  const { theme } = useTheme()

  return (
    <>
      <Flex
        position="relative"
        flexDirection={'column'}
        alignItems={['flex-end', null, null, 'center']}
        justifyContent="center"
        mt={['50px', null, 0]}
        id="homepage-hero"
      >
        <Flex flex="1" flexDirection="column">
          <Heading scale="md" mb="24px" mt="10px" textAlign="center">
            {t('Our Misson')}
          </Heading>
          <Heading scale="xxl" color="#fff" textAlign="center">
            {t('NFT 구매의 ')}
          </Heading>
          <Heading scale="xxl" color="#fff" mb="24px" textAlign="center">
            {t('새로운 지표가 되겠습니다')}
          </Heading>
        </Flex>

        <Flex
          height={['192px', null, null, '100%']}
          width={['192px', null, null, '100%']}
          flex={[null, null, null, '1']}
          mb={['24px', null, null, '0']}
          position="relative"
          justifyContent="center"
        >
          <div>
            <Heading scale="md" mb="24px" mt="10px" textAlign="center">
              {t('Our Misson')}
            </Heading>
            <Text>sdasdasdasdsdasdas sdasdasdasdsdasdas </Text>
          </div>
          <div>
            <BunnyWrapper>
              <Image src={NFTMonitoring} priority placeholder="blur" alt={t('NFT')} />
            </BunnyWrapper>
          </div>
        </Flex>

        <Flex
          height={['192px', null, null, '100%']}
          width={['192px', null, null, '100%']}
          flex={[null, null, null, '1']}
          mb={['24px', null, null, '0']}
          position="relative"
          justifyContent="center"
        >
          <div>
            <BunnyWrapper>
              <Image src={NFTDigital_Art} priority placeholder="blur" alt={t('NFT')} />
            </BunnyWrapper>
          </div>
          <div>
            <Heading scale="md" mb="24px" mt="10px" textAlign="center">
              {t('Our Misson')}
            </Heading>
            <Text>sdasdasdasdsdasdas sdasdasdasdsdasdas </Text>
          </div>
        </Flex>
        <Flex
          height={['192px', null, null, '100%']}
          width={['192px', null, null, '100%']}
          flex={[null, null, null, '1']}
          mb={['24px', null, null, '0']}
          position="relative"
          justifyContent="center"
        >
          <div>
            <Heading scale="md" mb="24px" mt="10px" textAlign="center">
              {t('TESK ')}
            </Heading>
            <Text>sdasdasdasdsdasdas sdasdasdasdsdasdas </Text>
          </div>
          <div>
            <BunnyWrapper>
              <Image src={NFTMarket} priority placeholder="blur" alt={t('NFT')} />
            </BunnyWrapper>
          </div>
        </Flex>
      </Flex>
    </>
  )
}

export default Hero
