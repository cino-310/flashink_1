import React, { useEffect, useState } from "react";

import { Colorinput, Switchesonswitch, Switchesoffswitch } from '../ui-components';
import InkColorPicker from "./InkColorPicker";
import "../css/InkColorPicker.css";
import "../css/Switches.css";
import { log } from "../script/Logger";

const Switches = ({ ink1, ink2, ink3, tool, setTool }) => {
    const [picker1Open, setPicker1Open] = useState(false)
    const [picker2Open, setPicker2Open] = useState(false)
    const [picker3Open, setPicker3Open] = useState(false)

    const [isInk1Visible, setIsInk1Visible] = useState(false)
    const [isInk2Visible, setIsInk2Visible] = useState(false)
    const [isInk3Visible, setIsInk3Visible] = useState(false)
    const [ink1ColorCd, setInk1ColorCd] = useState('#000000')
    const [ink2ColorCd, setInk2ColorCd] = useState('#000000')
    const [ink3ColorCd, setInk3ColorCd] = useState('#000000')

    useEffect(() => {
        setIsInk1Visible(tool.isInk1Visible)
        setIsInk2Visible(tool.isInk2Visible)
        setIsInk3Visible(tool.isInk3Visible)
        setInk1ColorCd(ink1.colorCd)
        setInk2ColorCd(ink2.colorCd)
        setInk3ColorCd(ink3.colorCd)

        setPicker1Open(false)
        setPicker2Open(false)
        setPicker3Open(false)
    }, [tool, ink1, ink2, ink3]);

    const toggleInk1Switch = () => {
        const newTool = { ...tool, isInk1Visible: !isInk1Visible }
        setTool(newTool)
        log(`ink1 switch: ${isInk1Visible ? 'visible' : 'invisible'} `)
    }
    const toggleInk2Switch = () => {
        const newTool = { ...tool, isInk2Visible: !isInk2Visible }
        setTool(newTool)
        log(`ink2 switch: ${isInk2Visible ? 'visible' : 'invisible'} `)
    }
    const toggleInk3Switch = () => {
        const newTool = { ...tool, isInk3Visible: !isInk3Visible }
        setTool(newTool)
        log(`ink3 switch: ${isInk3Visible ? 'visible' : 'invisible'} `)
    }

    // // don't change colorcd from color palette of inks
    // const onChangeInk1ColorCd = (newColorCd) => {
    //     setInk1ColorCd(newColorCd)
    //     const newInk = { ...ink1, colorCd: newColorCd }
    //     setInk(newInk)
    //     setCurrentColorCd(newColorCd, ink1.order)
    //     log(`ink1 changed: ${newInk.colorCd}`)
    // }
    // const onChangeInk2ColorCd = (newColorCd) => {
    //     setInk2ColorCd(newColorCd)
    //     const newInk = { ...ink2, colorCd: newColorCd }
    //     setInk(newInk)
    //     setCurrentColorCd(newColorCd, ink2.order)
    //     log(`ink2 changed: ${newInk.colorCd}`)
    // }
    // const onChangeInk3ColorCd = (newColorCd) => {
    //     setInk3ColorCd(newColorCd)
    //     const newInk = { ...ink3, colorCd: newColorCd }
    //     setInk(newInk)
    //     setCurrentColorCd(newColorCd, ink3.order)
    //     log(`ink3 changed: ${newInk.colorCd}`)
    // }

    // const setCurrentColorCd = (newColorCd, inkOrder) => {
    //     const newTool = { ...tool, currentColorCd: newColorCd }
    //     setTool(newTool)

    //     const newText = { ...texts[TextOrder[inkOrder]], colorCd: newColorCd }
    //     setTexts(newText)
    // }

    return (
        <div>
            <div className='first-ink'>
                <Switchesonswitch overrides={{
                    Switchesonswitch: {
                        display: isInk1Visible ? 'block' : 'none',
                        left: '16px',
                        onClick: toggleInk1Switch,
                    },
                    label: {
                        // character
                    },
                }}
                />
                <Switchesoffswitch overrides={{
                    Switchesoffswitch: {
                        display: isInk1Visible ? 'none' : 'block',
                        left: '16px',
                        onClick: toggleInk1Switch,
                    },
                    label: {
                        // character
                    },
                }}
                />
                <Colorinput overrides={{
                    Colorinput: {
                        left: '36px',
                        backgroundColor: ink1ColorCd,
                        onClick: () => setPicker1Open(true),
                    }
                }}
                />
                {picker1Open && (
                    <div className="switches1-picker-wrapper">
                        {/* can't change colorcd by colorPicker in Switches */}
                        <InkColorPicker
                            title="Ink Palette"
                            defaultColor={ink1ColorCd}
                            open={picker1Open}
                            setOpen={setPicker1Open}
                            setColor={() => { }}//onChangeInk1ColorCd}
                        />
                    </div>
                )}
            </div>
            <div className='second-ink'>
                <Switchesonswitch overrides={{
                    Switchesonswitch: {
                        display: isInk2Visible ? 'block' : 'none',
                        left: '16px',
                        onClick: toggleInk2Switch,
                    },
                    label: {
                        // character
                    },
                }}
                />
                <Switchesoffswitch overrides={{
                    Switchesoffswitch: {
                        display: isInk2Visible ? 'none' : 'block',
                        left: '16px',
                        onClick: toggleInk2Switch,
                    },
                    label: {
                        // character
                    },
                }}
                />
                <Colorinput overrides={{
                    Colorinput: {
                        left: '36px',
                        backgroundColor: ink2ColorCd,
                        onClick: () => setPicker2Open(true),
                    }
                }}
                />
                {picker2Open && (
                    <div className="switches1-picker-wrapper">
                        <InkColorPicker
                            title="Ink Palette"
                            defaultColor={ink2ColorCd}
                            open={picker2Open}
                            setOpen={setPicker2Open}
                            setColor={() => { }}//{onChangeInk2ColorCd}
                        />
                    </div>
                )}
            </div>
            <div className='third-ink'>
                <Switchesonswitch overrides={{
                    Switchesonswitch: {
                        display: isInk3Visible ? 'block' : 'none',
                        left: '16px',
                        onClick: toggleInk3Switch,
                    },
                    label: {
                        // character
                    },
                }}
                />
                <Switchesoffswitch overrides={{
                    Switchesoffswitch: {
                        display: isInk3Visible ? 'none' : 'block',
                        left: '16px',
                        onClick: toggleInk3Switch,
                    },
                    label: {
                        // character
                    },
                }}
                />
                <Colorinput overrides={{
                    Colorinput: {
                        left: '36px',
                        backgroundColor: ink3ColorCd,
                        onClick: () => setPicker3Open(true),
                    }
                }}
                />
                {picker3Open && (
                    <div className="switches1-picker-wrapper">
                        <InkColorPicker
                            title="Ink Palette"
                            defaultColor={ink3ColorCd}
                            open={picker3Open}
                            setOpen={setPicker3Open}
                            setColor={() => { }}//{onChangeInk3ColorCd}
                        />
                    </div>
                )}
            </div>
        </div >
    );
};

export default Switches