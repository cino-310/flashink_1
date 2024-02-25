import React from "react";
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/css";
import "../css/InkColorPicker.css";

const InkColorPicker = ({ title, defaultColor, open, setOpen, setColor }) => {
    const [paletteColor, setPaletteColor] = useColor(defaultColor)

    const onChange = (value) => {
        setPaletteColor(value)
        setColor(value.hex)
    }

    return (
        <>
            {open && (
                <div>
                    <div className="picker-back"
                        onClick={() => setOpen(false)}
                    />
                    <div className="picker-wrapper">
                        <label>{title}</label>
                        <ColorPicker
                            width={300}
                            color={paletteColor}
                            onChange={onChange}
                            hideInput={["rgb", "hsv"]}
                        />
                    </div>
                </div>
            )}
        </>
    );
};

export default InkColorPicker