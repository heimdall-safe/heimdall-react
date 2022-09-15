import React from 'react'
import styled from 'styled-components'
import {
  Card,
  Button,
  Title,
  Text,
  Divider,
  ButtonLink,
  Dot,
  Icon,
  Link as LinkSRC,
} from '@gnosis.pm/safe-react-components'
import StakingBanner from 'src/assets/icons/staking_banner.png'

import Link from 'src/components/layout/Link'
import Block from 'src/components/layout/Block'
import { LOAD_ADDRESS, OPEN_ADDRESS } from 'src/routes/routes'
import { onConnectButtonClick } from 'src/components/ConnectButton'
import { useSelector } from 'react-redux'
import { providerNameSelector } from 'src/logic/wallets/store/selectors'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 24px 0 0 0;
`
const StyledCardDouble = styled(Card)`
  display: flex;
  padding: 0;
  background: transparent;
  box-shadow: none;
`
const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  margin: 0 50px 0 0;
  width: 350px;
  height: 256px;
  box-shadow: 8px 8px;
`
const CardsCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px;
  width: 50%;
`
const StyledButton = styled(Button)`
  margin-top: auto;
  text-decoration: none;
  align-items: center;
`
const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0 0 16px 0;

  h5 {
    color: white;
  }
`
const StyledTitle = styled(Title)`
  margin: 0 0 0 16px;
`
const StyledTitleOnly = styled(Title)`
  margin: 0 0 0 16px ;
`
const StyledButtonLink = styled(ButtonLink)`
  margin: 16px 0 16px -8px;
`

type Props = {
  isOldMultisigMigration?: boolean
}

export const WelcomeLayout = ({ isOldMultisigMigration }: Props): React.ReactElement => {
  const provider = useSelector(providerNameSelector)
  return (
    <Block>
      {/* Title */}
      <Title size="md" strong>
        Welcome to Heimdall.
      </Title>

      {/* Subtitle */}
      <Title size="xs">
        {isOldMultisigMigration ? (
          <>
            We will replicate the owner structure from your existing Heimdall to let you test the new interface.
            As soon as you feel comfortable, start moving funds to your new Heimdall.
          </>
        ) : (
          <>
            Heimdall as a Guardian is the most trusted platform to manage digital assets on evmos. <br /> Here is how to get started:{' '}
          </>
        )}
      </Title>

      <>
        <Wrapper>
          <StyledCardDouble disabled={!provider}>
            {/* Create Heimdall */}
            <StyledCard>
              <TitleWrapper>
                <Dot color="primary">
                  <Title size="xs">1</Title>
                </Dot>
                <StyledTitle size="sm" strong withoutMargin>
                  Create Heimdall
                </StyledTitle>
              </TitleWrapper>
              <Text size="xl">
                Create a new Heimdall that is controlled by one or multiple owners. <br />
                You will be required to pay a network fee for creating your new Heimdall.
              </Text>
              <StyledButton size="lg" color="primary" variant="contained" component={Link} to={OPEN_ADDRESS}>
                <Text size="xl" color="white">
                  + Create new Heimdall 
                </Text>
              </StyledButton>
              </StyledCard>


            {/* Load Heimdall */}
            <StyledCard>
            <TitleWrapper>
                <Dot color="primary">
                  <Title size="xs">2</Title>
                </Dot>
                <StyledTitleOnly size="sm" strong withoutMargin>
                Load existing Heimdall
              </StyledTitleOnly>
              </TitleWrapper>
              <Text size="xl">
                Already have a Heimdall ? Do you want to access your Heimdall Safe from a different device? Easily load your
                Heimdall Safe using your Heimdall Safe address.
              </Text>
              <StyledButton
                variant="bordered"
                iconType="safe"
                iconSize="sm"
                size="lg"
                color="secondary"
                component={Link}
                to={LOAD_ADDRESS}
              >
                <Text size="xl" color="secondary">
                  Load existing Heimdall
                </Text>
              </StyledButton>
              </StyledCard>
          </StyledCardDouble>
        </Wrapper>
      </>
    </Block>
  )
}
