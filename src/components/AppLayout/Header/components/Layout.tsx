import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import Grow from '@material-ui/core/Grow'
import List from '@material-ui/core/List'
import Popper from '@material-ui/core/Popper'
import { withStyles } from '@material-ui/core/styles'
import * as React from 'react'
import { Link } from 'react-router-dom'

import Provider from './Provider'

import Col from 'src/components/layout/Col'
import Img from 'src/components/layout/Img'
import Row from 'src/components/layout/Row'
import { border, headerHeight, md, screenSm, sm } from 'src/theme/variables'
import { useStateHandler } from 'src/logic/hooks/useStateHandler'

import Header from '../assets/header.png'
import { Box } from '@material-ui/core'

const styles = () => ({
    root: {
        backgroundColor: 'white',
        borderRadius: sm,
        boxShadow: '5px 5px',
        marginTop: '11px',
        minWidth: '280px',
        padding: 0,
    },
    summary: {
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#F7F5F5',
        flexWrap: 'nowrap',
        height: headerHeight,
        position: 'fixed',
        width: '100%',
        zIndex: 1301,
    },
    logo: {
        flexShrink: '0',
        flexGrow: '0',
        padding: sm,
        marginTop: '4px',
        [`@media (min-width: ${screenSm}px)`]: {
            maxWidth: 'none',
            paddingLeft: md,
            paddingRight: md,
        },
    },
    popper: {
        zIndex: 2000,
    },
})

const Layout = ({ classes, providerDetails, providerInfo }) => {
    const { clickAway, open, toggle } = useStateHandler()

    return (
        <Row className={classes.summary}>
            <Col className={classes.logo} middle="lg" start="lg">
                <Link to="/" style={{ marginRight: 10 }}>
                    <Img alt="HeimdallLogo" height={50} src={Header} testId="heading-heimdall-logo" />
                </Link>
                <br/>
                    <span style={{opacity: '0.4'}}>(based on Gnosis Safe)</span>
            </Col>
            <Box
                display="flex"
                alignItems="center"
                bgcolor={'white'}
                borderRadius="15px"
                py="0"
                mr="20px"
                boxShadow="5px 5px"
            >
                <Provider
                    info={providerInfo}
                    open={open}
                    toggle={toggle}
                    render={(providerRef) => (
                        <Popper
                            anchorEl={providerRef.current}
                            className={classes.popper}
                            open={open}
                            placement="bottom"
                            popperOptions={{ positionFixed: true }}
                        >
                            {({ TransitionProps }) => (
                                <Grow {...TransitionProps}>
                                    <>
                                        <ClickAwayListener mouseEvent="onClick" onClickAway={clickAway} touchEvent={false}>
                                            <List className={classes.root} component="div">
                                                {providerDetails}
                                            </List>
                                        </ClickAwayListener>
                                    </>
                                </Grow>
                            )}
                        </Popper>
                    )}
                />
            </Box>
        </Row>
    )
}

export default withStyles(styles as any)(Layout)
